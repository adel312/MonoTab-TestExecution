import React from 'react';
import { LoginForm } from './components/LoginForm';
import { TestBrowser } from './components/TestBrowser';
import { useTestSession } from './hooks/useTestSession';

function App() {
  const { url, setUrl, isLoading, testStarted, handleStartTest } = useTestSession();

  if (testStarted) {
    return <TestBrowser url={url} />;
  }

  return (
    <LoginForm
      url={url}
      isLoading={isLoading}
      onUrlChange={setUrl}
      onSubmit={handleStartTest}
    />
  );
}

export default App;