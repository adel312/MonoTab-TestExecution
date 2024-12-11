import { useState, useCallback } from 'react';
import { validateUrl } from '../services/urlValidation';

export function useTestSession() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [testStarted, setTestStarted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleStartTest = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    const validation = validateUrl(url);
    if (!validation.isValid) {
      setError(validation.error || 'Invalid URL');
      return;
    }
    
    setIsLoading(true);
    try {
      // Simulate URL validation/preparation
      await new Promise(resolve => setTimeout(resolve, 1000));
      setTestStarted(true);
    } catch (error) {
      setError('Failed to start test. Please try again.');
      console.error('Failed to start test:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    url,
    setUrl,
    isLoading,
    testStarted,
    error,
    handleStartTest
  };
}