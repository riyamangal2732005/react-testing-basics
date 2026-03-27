import React from 'react';
import SearchInput from './Components/SearchInput'; // Path is now simpler
import Counter from './Components/Counter';

function App() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1>Flowers: Testing Lab</h1>
      <p>This page demonstrates testing.</p>
      
      <hr />
      
      <h3>1. Search Interaction</h3>
      <SearchInput placeholder="Search for flowers..." />

      <hr style={{ margin: '40px 0' }} />

      <h3>2. Counter Interaction</h3>
      <Counter />
    </div>
  );
}

export default App;