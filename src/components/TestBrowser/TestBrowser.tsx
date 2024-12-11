import React, { useEffect } from 'react';
import { SECURE_SANDBOX_ATTRIBUTES } from '../../constants/security';
import { useFullscreen } from '../../hooks/useFullscreen';

interface TestBrowserProps {
  url: string;
}

export function TestBrowser({ url }: TestBrowserProps) {
  const { isFullscreen, requestFullscreen } = useFullscreen();

  useEffect(() => {
    if (!isFullscreen) {
      requestFullscreen();
    }
  }, [isFullscreen, requestFullscreen]);

  return (
    <div className="w-full h-screen bg-gray-100">
      <iframe 
        src={url}
        className="w-full h-full border-0"
        title="Test Content"
        sandbox={SECURE_SANDBOX_ATTRIBUTES}
      />
    </div>
  );
}