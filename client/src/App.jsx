import React, { useEffect, useState } from 'react';

function App() {
  const [health, setHealth] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL || ''}/api/health`, { credentials: 'include' })
      .then(res => res.json())
      .then(setHealth)
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Chapter3-4 React Frontend</h1>
      <pre>{health ? JSON.stringify(health, null, 2) : 'Checking server...'}</pre>
    </div>
  );
}

export default App;
