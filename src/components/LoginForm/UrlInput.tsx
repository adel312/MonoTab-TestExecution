import React from 'react';
import { AlertCircle } from 'lucide-react';

interface UrlInputProps {
  url: string;
  error: string | null;
  onChange: (url: string) => void;
}

export function UrlInput({ url, error, onChange }: UrlInputProps) {
  return (
    <div>
      <label htmlFor="testUrl" className="block text-sm font-medium text-gray-700 mb-1">
        Test URL
      </label>
      <input
        type="url"
        id="testUrl"
        value={url}
        onChange={(e) => onChange(e.target.value)}
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
  );
}