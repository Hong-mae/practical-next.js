import { loadStripe } from "@stripe/stripe-js";

const key = process.env.NEXT_PUBLIC_STRIPE_SHAREBLE_KEY!;

let stripePromise: any;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(key);
  }

  return stripePromise;
};

export default getStripe;
