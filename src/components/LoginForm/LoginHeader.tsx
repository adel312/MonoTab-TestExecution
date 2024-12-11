import React from 'react';
import { Lock } from 'lucide-react';

export function LoginHeader() {
  return (
    <>
      <div className="flex items-center justify-center mb-6">
        <Lock className="w-12 h-12 text-blue-600" />
      </div>
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Secure Test Browser
      </h1>
    </>
  );
}