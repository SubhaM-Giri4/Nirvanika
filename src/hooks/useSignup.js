import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
  const [e, se] = useState(null);
  const [i, si] = useState(false);
  const { dispatch: d } = useAuthContext();

  const signup = async (nm, em, pw) => {
    si(true);
    se(null);

    const r = await fetch(`${import.meta.env.VITE_API_URL}/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nm, em, pw })
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

  return { signup, isLoading: i, error: e };
};
// import { useState } from "react";
// import { useAuthContext } from "./useAuthContext";
// import { API_URL } from "../components/constants/data";
//
// export const useSignup = () => {
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(null);
//   const { dispatch } = useAuthContext();
//
//   const signup = async (name, email, password) => {
//     setIsLoading(true);
//     setError(null);
//     const response = await fetch(`${API_URL}/api/user/signup`, {
//       method: "POST",
//       body: JSON.stringify({ name, email, password }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const data = await response.json();
//     if (!response.ok) {
//       setError(data.error || "Something went wrong!");
//       setIsLoading(false);
//     }
//     if (response.ok) {
//       // save token in local storage
//       localStorage.setItem("user", JSON.stringify(data));
//
//       // update the auth context
//       dispatch({ type: "LOGIN", payload: data });
//
//       setIsLoading(false);
//     }
//   };
//   return { signup, error, isLoading };
// };
