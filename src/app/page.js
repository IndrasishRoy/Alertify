<<<<<<< HEAD
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const RootPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/auth');
  }, [router]);

  return null;
};

export default RootPage;
=======
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const RootPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/auth');
  }, [router]);

  return null;
};

export default RootPage;
>>>>>>> ae0f5209876ac3b090ee5a5da48891123d83dce4
