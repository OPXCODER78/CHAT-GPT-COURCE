'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/src/hooks/useAuth';
import { SubscriptionStatus } from '@/src/components/subscription/SubscriptionStatus';
import { Button } from '@/src/components/ui/button';

export default function DashboardPage() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="animate-pulse text-white">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect
  }

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
              <p className="text-gray-300">Welcome back, {user.email}</p>
            </div>
            <div className="space-x-4">
              <Button 
                onClick={() => router.push('/')}
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-purple-900"
              >
                Home
              </Button>
              <Button 
                onClick={handleSignOut}
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-purple-900"
              >
                Sign Out
              </Button>
            </div>
          </div>

          <div className="grid gap-6">
            <SubscriptionStatus />
          </div>
        </div>
      </div>
    </div>
  );
}