import React from 'react';
import Calculator from './Bai1';
import CV from './Bai2';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Bài tập LTW Bài 7: SPA & React</h1>
      
      <hr style={{ margin: '40px 0' }} />
      
      <h2 style={{ textAlign: 'center' }}>Bài 1: Calculator</h2>
      <Calculator />
      
      <hr style={{ margin: '40px 0' }} />
      
      <h2 style={{ textAlign: 'center' }}>Bài 2: Trang CV bằng React</h2>
      <CV />
    </div>
  );
}

export default App;
