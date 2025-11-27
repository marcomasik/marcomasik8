"use client";

import { useEffect } from 'react';

export default function WorksRedirect() {
  useEffect(() => {
    // Redirect to main page with hash
    window.location.replace('/#works');
  }, []);

  return <div>Redirecting...</div>;
}