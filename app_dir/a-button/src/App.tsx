// app.tsx

// Import modules
import React from 'react';
import AmButton from '../src/buttons/AmButton';

// Write the app
function App() {

  // Create a button for each size
  const sizes = ['S', 'M', 'L', 'XL'] as const;

  // Init light states to alternate between light and dark
  const [lightStates, setLightStates] = React.useState<boolean[]>([
    true, false, true, false,  // green buttons
    false, true, false, true,  // gold buttons
  ]);

  // Toggle the light state of a button
  const toggleLight = (index: number) => {
    setLightStates(prev =>
      prev.map((val, i) => (i === index ? !val : val))
    );
  };

  return (

    // Creating a header
    <div style={{ padding: '10px', fontFamily: 'sans-serif' }}>
    <h1 style={{
      textAlign: 'center',
      marginBottom: '4px',
      fontSize: '2rem',
      color: '#333',
    }}>
      Adi's Ambrook Button Grid
    </h1>

    {/* Subheader */}
    <h2 style={{
        textAlign: 'center',
        marginBottom: '4px',
        fontSize: '1.5rem',
        color: '#555',
      }}>
        Click the buttons to change their light mode!
      </h2>

    {/* Creating a grid for the buttons
    // Each column alternates from light to dark */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '24px',
      padding: '40px',
      fontFamily: 'sans-serif',
    }}>

      {/* Column for the green buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {sizes.map((size, index) => (
          <AmButton
            key={`green-${size}`}
            size={size}
            color="green"
            light={lightStates[index]}
            onClick={() => toggleLight(index)}
          >
            I'm a {size} size, green button.
          </AmButton>
        ))}
      </div>

      {/* Column for the gold buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {sizes.map((size, index) => (
          <AmButton
            key={`gold-${size}`}
            size={size}
            color="gold"
            light={lightStates[index+4]}
            onClick={() => toggleLight(index+4)}
          >
            I'm a {size} size, gold button.
          </AmButton>
        ))}
      </div>
    </div>
    </div>
  );
}

// Export
export default App;