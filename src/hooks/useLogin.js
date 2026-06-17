import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
  const [e, se] = useState(null);
  const [i, si] = useState(false);
  const { dispatch: d } = useAuthContext();

  const login = async (em, pw) => {
    si(true);
    se(null);

    const r = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ em, pw })
    });
    const j = await r.json();

    if (!r.ok) {
      si(false);
      se(j.m || j.er);
    }
    if (r.ok) {
      localStorage.setItem('u', JSON.stringify(j));
      d({ type: 'LOGIN', payload: j });
      si(false);
    }
  };

  return { login, isLoading: i, error: e };
};