'use client';
import { useState } from 'react';

const Die = ({ value, holdFunction, isHeld, dieId }) => {
  const style = isHeld ? { backgroundColor: 'green' } : { backgroundColor: 'white' };
  return (
    <div style={style} className="die" onClick={() => holdFunction(dieId)}>
      <h3>{value}</h3>
    </div>
  );
};
export default Die;
