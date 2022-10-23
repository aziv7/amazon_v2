const stripe = require('stripe')(process.env.STRIPE_SECRET);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { items, email } = req.body;

      let reducedItems = [];

      items.map((e) => {
        let index = reducedItems.findIndex((p) => p.id == e.id);

        if (index == -1) reducedItems.push({ ...e, quantity: 1 });
        else reducedItems[index].quantity += 1;
      });

      let checkoutItems = [];

      for (let item of reducedItems) {
        const product = await stripe.products.create({
          description: item.description,
          name: item.title,
          images: [item.image],
        });

        const price = await stripe.prices.create({
          unit_amount: item.price * 100,
          currency: 'usd',
          product: product.id,
        });

        checkoutItems.push({ price: price.id, quantity: item.quantity });
      }
      console.log(checkoutItems);
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: checkoutItems,
        shipping_address_collection: {
          allowed_countries: ['TN'],
        },

        payment_method_types: ['card'],
        mode: 'payment',
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/canceled`,

        metadata: {
          email,
          images: JSON.stringify(items.map((item) => item.image)),
        },
      });

      return res.status(200).json({ id: session.id });
    } catch (err) {
      console.log(err.message);
      return res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }
}
