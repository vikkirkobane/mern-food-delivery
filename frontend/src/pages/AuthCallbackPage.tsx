import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

export default function AuthCallbackPage() {
  const { user } = useAuth0();
  return (
    <div></div>
  )
}