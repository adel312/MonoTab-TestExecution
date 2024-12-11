import React from 'react';
import { Lock, AlertCircle } from 'lucide-react';
import { LoginHeader } from './LoginHeader';
import { UrlInput } from './UrlInput';
import { SubmitButton } from './SubmitButton';

interface LoginFormProps {
  url: string;
  isLoading: boolean;
  error: string | null;
  onUrlChange: (url: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function LoginForm({ url, isLoading, error, onUrlChange, onSubmit }: LoginFormProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <LoginHeader />
        <form onSubmit={onSubmit} className="space-y-4">
          <UrlInput 
            url={url} 
            error={error} 
            onChange={onUrlChange} 
          />
          <SubmitButton isLoading={isLoading} />
        </form>
        <p className="mt-4 text-sm text-gray-600 text-center">
          This application runs in fullscreen mode and prevents access to other browsers
        </p>
      </div>
    </div>
  );
}