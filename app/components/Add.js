'use client';
import { useState } from 'react';

const Add = ({ addClick }) => {
  const [text, setText] = useState('');
  return (
    <>
      <div className="forms">
        ADD TODO TASK
        <input type="text" placeholder="Add Task here..." value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={() => addClick(text)}>ADD</button>
      </div>
    </>
  );
};
export default Add;
