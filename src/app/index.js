<<<<<<< HEAD
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const HomeRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('authToken');
    if (!isAuthenticated) {
      router.push('/auth'); // Redirect to AuthPage if not authenticated
    } else {
      router.push('/home'); // Redirect to Home if authenticated
    }
  }, [router]);

  return null; // or a loading spinner while redirecting
};

export default HomeRedirect;
=======
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const HomeRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('authToken');
    if (!isAuthenticated) {
      router.push('/auth'); // Redirect to AuthPage if not authenticated
    } else {
      router.push('/home'); // Redirect to Home if authenticated
    }
  }, [router]);

  return null; // or a loading spinner while redirecting
};

export default HomeRedirect;
>>>>>>> ae0f5209876ac3b090ee5a5da48891123d83dce4
