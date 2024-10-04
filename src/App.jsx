import React from 'react';

export function App(props) {
  const cards = [];
  for (let i = 0; i < 8; i++) {
    cards.push(
      <div className='ButtonCard' key={i.toString()}>
        <p>replace text with button</p>
      </div>
    )
  }

  return (
    <div className='App'>
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
      {cards}
    </div>
  );
}

// Log to console
console.log('Hello console')