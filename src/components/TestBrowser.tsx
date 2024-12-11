import React from 'react';

interface TestBrowserProps {
  url: string;
}

export function TestBrowser({ url }: TestBrowserProps) {
  return (
    <iframe 
      src={url}
      className="w-full h-screen border-0"
      title="Test Content"
      sandbox="allow-same-origin allow-scripts allow-forms"
    />
  );
}