'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makePublicStore, PublicStore } from '@/lib/profile-store';

export default function PublicProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<PublicStore>(null);

  if (!storeRef.current) {
    storeRef.current = makePublicStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}