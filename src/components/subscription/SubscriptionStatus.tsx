import { useSubscription } from '@/src/hooks/useSubscription';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/src/components/ui/card';

export function SubscriptionStatus() {
  const { subscription, loading, hasActiveSubscription } = useSubscription();

  if (loading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!subscription) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>No Subscription</CardTitle>
          <CardDescription>You don't have an active subscription yet.</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-600';
      case 'past_due':
        return 'text-yellow-600';
      case 'canceled':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const formatDate = (timestamp: number | null) => {
    if (!timestamp) return 'N/A';
    return new Date(timestamp * 1000).toLocaleDateString();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Subscription Status</CardTitle>
        <CardDescription>
          {subscription.product_name || 'Your subscription details'}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="font-medium">Status:</span>
          <span className={`font-semibold capitalize ${getStatusColor(subscription.subscription_status)}`}>
            {subscription.subscription_status.replace('_', ' ')}
          </span>
        </div>
        
        {hasActiveSubscription && (
          <>
            <div className="flex justify-between items-center">
              <span className="font-medium">Current Period:</span>
              <span className="text-sm">
                {formatDate(subscription.current_period_start)} - {formatDate(subscription.current_period_end)}
              </span>
            </div>
            
            {subscription.cancel_at_period_end && (
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                <p className="text-sm text-yellow-800">
                  Your subscription will cancel at the end of the current period.
                </p>
              </div>
            )}
            
            {subscription.payment_method_brand && subscription.payment_method_last4 && (
              <div className="flex justify-between items-center">
                <span className="font-medium">Payment Method:</span>
                <span className="text-sm">
                  {subscription.payment_method_brand.toUpperCase()} ending in {subscription.payment_method_last4}
                </span>
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
}