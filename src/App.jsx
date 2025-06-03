import React, { useState } from 'react';

const PlaceValueBinaryConverter = () => {
  const [binary, setBinary] = useState([0, 0, 0, 0, 0]);
  const placeValues = [16, 8, 4, 2, 1];

  const toggleBit = (index) => {
    setBinary(prevBinary => {
      const newBinary = [...prevBinary];
      newBinary[index] = 1 - newBinary[index];
      return newBinary;
    });
  };

  const calculateDenary = () => {
    return binary.reduce((sum, bit, index) => sum + bit * placeValues[index], 0);
  };

  return (
    <div style={{padding: '1rem', maxWidth: '600px', margin: '0 auto', backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}>
      <h2 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center', color: '#3b82f6'}}>Binary to Denary Converter with Place Values</h2>
      <div style={{display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1rem'}}>
        {placeValues.map((value, index) => (
          <div key={index} style={{textAlign: 'center'}}>
            <p style={{marginBottom: '0.5rem', fontSize: '1.125rem', fontWeight: 'bold', color: '#10b981'}}>{value}</p>
            <button
              onClick={() => toggleBit(index)}
              style={{
                width: '4rem',
                height: '4rem',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                borderRadius: '0.5rem',
                backgroundColor: binary[index] ? '#3b82f6' : '#e5e7eb',
                color: binary[index] ? 'white' : '#4b5563',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              {binary[index]}
            </button>
            <p style={{marginTop: '0.5rem', fontSize: '0.875rem', fontWeight: 'bold'}}>2<sup>{4-index}</sup></p>
          </div>
        ))}
      </div>
      <div style={{backgroundColor: '#f3f4f6', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem'}}>
        <h3 style={{fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>Calculation:</h3>
        {binary.map((bit, index) => (
          <p key={index} style={{marginBottom: '0.25rem'}}>
            {bit} × {placeValues[index]} = {bit * placeValues[index]}
          </p>
        ))}
        <p style={{marginTop: '0.5rem', fontWeight: 'bold'}}>
          Sum: {binary.reduce((sum, bit, index) => sum + (bit * placeValues[index]), 0)}
        </p>
      </div>
      <div style={{textAlign: 'center', fontSize: '1.25rem'}}>
        <p style={{marginBottom: '0.5rem'}}>
          Binary: <span style={{fontWeight: 'bold', color: '#3b82f6'}}>{binary.join('')}</span>
        </p>
        <p>
          Denary: <span style={{fontWeight: 'bold', color: '#10b981'}}>{calculateDenary()}</span>
        </p>
      </div>
      <div style={{marginTop: '1rem', fontSize: '0.875rem', color: '#6b7280'}}>
        <p>Click on the digits to toggle between 0 and 1.</p>
        <p>The green numbers at the top show the place value of each binary digit.</p>
        <p>Observe how each bit contributes to the final denary value based on its place value.</p>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <PlaceValueBinaryConverter />
    </div>
  );
}
