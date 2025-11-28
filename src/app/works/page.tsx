"use client";

import { useEffect } from 'react';

export default function WorksRedirect() {
  useEffect(() => {
    window.location.replace('/#works');
  }, []);

  return <div>Redirecting...</div>;
}