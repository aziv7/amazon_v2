import { getSession, useSession } from 'next-auth/react';
import { Header, Order } from '../components';
import db from '../firebase';

const orders = ({ orders }) => {
  const { data: session } = useSession();
  console.log(orders);
  return (
    <div>
      <Header />

      <main className='max-w-screen-lg mx-auto p-10'>
        <h1 className='text-3xl border-b mb-2 pb-1 border-yellow-500'>
          Your Orders
        </h1>
        {session ? <h2>Orders</h2> : <h2>SignIn to see orders</h2>}

        <div className='mt-5 space-y-4'>
          {orders.map((order) => (
            <Order order={order} key={order.id} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default orders;

export async function getServerSideProps(ctx) {
  const stripe = require('stripe')(process.env.STRIPE_SECRET);

  const session = await getSession(ctx);

  if (!session) return { props: {} };

  const Dborders = await db
    .collection('users')
    .doc(session.user?.email)
    .collection('orders')
    .orderBy('timestamp', 'desc')
    .get();

  const orders = await Promise.all(
    Dborders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      images: order.data().images,
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, { limit: 100 })
      ).data,
    }))
  );

  return {
    props: {
      orders: orders,
    },
  };
}
