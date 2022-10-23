import * as admin from 'firebase-admin';
import { buffer } from 'micro';

const serviceAccount = require('../../permissons.json');

const app = !admin.apps.length
  ? admin.initializeApp({ credential: admin.credential.cert(serviceAccount) })
  : admin.app();

const stripe = require('stripe')(process.env.STRIPE_SECRET);

const endpoint = process.env.STRIPE_WEBHOOK_SECRET;

export default async (req, res) => {
  if (req.method === 'POST') {
    const requestBuffer = await buffer(req);

    const payload = requestBuffer.toString();
    const sig = req.headers['stripe-signature'];

    let event;

    //checking if event is coming from stripe
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpoint);
    } catch (error) {
      console.log(error.message);
      return res.status(400).send('Webhook Error');
    }

    if (event.type === 'checkout.session.completed') {
      // console.log(event);
      const session = event.data.object;
      //console.log(session.total_details);
      //save order completed
      try {
        await app
          .firestore()
          .collection('users')
          .doc(session.metadata.email)
          .collection('orders')
          .doc(session.id)
          .set({
            amount: session.amount_total / 100,
            amount_shipping: session.total_details.amount_shipping,
            images: JSON.parse(session.metadata.images),
            timestamp: admin.firestore.FieldValue.serverTimestamp(),
          });

        return res.status(200);
      } catch (error) {
        console.log(error.message);
        return res.status(400).send('Webhook Error');
      }
    }
  }
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
