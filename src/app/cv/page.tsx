"use client";

import { useEffect } from 'react';

export default function CVRedirect() {
  useEffect(() => {
    window.location.replace('/#cv');
  }, []);

  return <div>Redirecting...</div>;
}