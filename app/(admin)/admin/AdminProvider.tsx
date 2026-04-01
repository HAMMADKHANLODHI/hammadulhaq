'use client';
import { useRef, useEffect } from 'react';
import { Provider } from 'react-redux';
// Use the Alias '@' to prevent path errors
import { makeAdminStore, type AdminStore } from '@/lib/admin-store';
// import { hydrateAuth } from '@/lib/features/auth/authSlice';

export default function AdminProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AdminStore>(null);

  if (!storeRef.current) {
    storeRef.current = makeAdminStore();
  }

  // Hydrate token on client mount
  useEffect(() => {
    if (storeRef.current) {
      // storeRef.current.dispatch(hydrateAuth());
    }
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
}