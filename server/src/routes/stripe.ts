import express from 'express';
import Stripe from 'stripe';

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

router.post('/create-checkout-session', async (req, res) => {
  const { amount, email, name } = req.body;
  if (!amount || !email || !name) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `Payment from ${name}`,
            },
            unit_amount: Math.round(Number(amount) * 100),
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.BASE_URL}/pay?success=1`,
      cancel_url: `${process.env.BASE_URL}/pay?canceled=1`,
    });
    res.json({ url: session.url });
  } catch (err: unknown) {
    const message = (err && typeof err === 'object' && 'message' in err) ? (err as { message: string }).message : 'Unknown error';
    res.status(500).json({ error: 'Stripe error', details: message });
  }
});

export default router;
