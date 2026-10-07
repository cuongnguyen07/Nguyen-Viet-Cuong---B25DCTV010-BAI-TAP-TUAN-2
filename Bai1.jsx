import React, { useState } from 'react';

function Display({ value }) {
  return (
    <div style={{ backgroundColor: '#e0e0e0', padding: '20px', textAlign: 'right', fontSize: '24px', minHeight: '30px' }}>
      {value || '0'}
    </div>
  );
}

function Button({ label, color, onClick }) {
  return (
    <button 
      style={{ backgroundColor: color, color: 'white', border: '1px solid #333', padding: '15px', fontSize: '18px', cursor: 'pointer', width: '100%' }} 
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default function Calculator() {
  const [expression, setExpression] = useState('');

  const handleClick = (value) => {
    if (value === 'Clear') {
      setExpression('');
    } else if (value === 'Delete') {
      setExpression(expression.slice(0, -1));
    } else if (value === '=') {
      try {
        setExpression(eval(expression).toString());
      } catch (error) {
        setExpression('Error');
      }
    } else {
      if (expression === 'Error') {
        setExpression(value);
      } else {
        setExpression(expression + value);
      }
    }
  };

  const buttons = [
    { label: 'Clear', color: '#4caf50' },
    { label: 'Delete', color: '#4caf50' },
    { label: '.', color: '#4caf50' },
    { label: '/', color: '#2196f3' },
    { label: '7', color: '#4caf50' },
    { label: '8', color: '#4caf50' },
    { label: '9', color: '#4caf50' },
    { label: '*', color: '#4caf50' },
    { label: '4', color: '#4caf50' },
    { label: '5', color: '#4caf50' },
    { label: '6', color: '#4caf50' },
    { label: '-', color: '#4caf50' },
    { label: '1', color: '#4caf50' },
    { label: '2', color: '#4caf50' },
    { label: '3', color: '#4caf50' },
    { label: '+', color: '#4caf50' },
    { label: '0', color: '#4caf50' },
    { label: '=', color: '#4caf50' }
  ];

  return (
    <div style={{ width: '300px', margin: '20px auto', border: '1px solid #ccc' }}>
      <Display value={expression} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2px', backgroundColor: '#333', padding: '2px' }}>
        {buttons.map((btn, index) => (
          <div key={index} style={{ gridColumn: btn.label === '0' || btn.label === '=' ? 'span 2' : 'auto' }}>
            <Button label={btn.label} color={btn.color} onClick={() => handleClick(btn.label)} />
          </div>
        ))}
      </div>
    </div>
  );
}
