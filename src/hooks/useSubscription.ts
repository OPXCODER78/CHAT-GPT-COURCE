import { useEffect, useState } from 'react';
import { supabase } from '@/src/lib/supabase';
import { useAuth } from './useAuth';
import { getProductByPriceId } from '@/src/stripe-config';

export interface UserSubscription {
  customer_id: string;
  subscription_id: string | null;
  subscription_status: 'not_started' | 'incomplete' | 'incomplete_expired' | 'trialing' | 'active' | 'past_due' | 'canceled' | 'unpaid' | 'paused';
  price_id: string | null;
  current_period_start: number | null;
  current_period_end: number | null;
  cancel_at_period_end: boolean;
  payment_method_brand: string | null;
  payment_method_last4: string | null;
  product_name?: string;
}

export function useSubscription() {
  const { user } = useAuth();
  const [subscription, setSubscription] = useState<UserSubscription | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setSubscription(null);
      setLoading(false);
      return;
    }

    const fetchSubscription = async () => {
      try {
        const { data, error } = await supabase
          .from('stripe_user_subscriptions')
          .select('*')
          .maybeSingle();

        if (error) {
          console.error('Error fetching subscription:', error);
          setSubscription(null);
        } else if (data) {
          const product = data.price_id ? getProductByPriceId(data.price_id) : null;
          setSubscription({
            ...data,
            product_name: product?.name,
          });
        } else {
          setSubscription(null);
        }
      } catch (error) {
        console.error('Error fetching subscription:', error);
        setSubscription(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscription();
  }, [user]);

  const hasActiveSubscription = subscription?.subscription_status === 'active';

  return {
    subscription,
    loading,
    hasActiveSubscription,
  };
}