import React from 'react';
import { Lock, AlertCircle } from 'lucide-react';

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
        <div className="flex items-center justify-center mb-6">
          <Lock className="w-12 h-12 text-blue-600" />
        </div>
        
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Secure Test Browser
        </h1>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="testUrl" className="block text-sm font-medium text-gray-700 mb-1">
              Test URL
            </label>
            <input
              type="url"
              id="testUrl"
              value={url}
              onChange={(e) => onUrlChange(e.target.value)}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                error ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="https://example.com/test"
              required
            />
            {error && (
              <div className="mt-2 flex items-center text-sm text-red-600">
                <AlertCircle className="w-4 h-4 mr-1" />
                {error}
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 px-4 rounded-md text-white font-medium ${
              isLoading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            }`}
          >
            {isLoading ? 'Loading...' : 'Start Test'}
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-600 text-center">
          This application runs in fullscreen mode and prevents access to other browsers
        </p>
      </div>
    </div>
  );
}