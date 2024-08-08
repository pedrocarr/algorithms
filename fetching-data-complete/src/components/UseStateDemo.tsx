import { useState } from 'react';

interface DemoProps { }

export function UseStateDemo({ }: DemoProps) {
  const [count, setCount] = useState(0);

  return (
    <div className='text-center'>
      <h1 className='text-3xl'>Count: {count}</h1>
      <button
        className='mr-2'
        onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button
        className='ml-2'
        onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
