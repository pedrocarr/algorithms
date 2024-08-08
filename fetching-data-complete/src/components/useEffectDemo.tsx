import { useEffect, useState } from 'react';

interface DemoProps {}

export default function UseEffectDemo({}: DemoProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // The code that we want to run
    console.log('The count is:', count);

    // Optional return function
    return () => {
      console.log('I am being cleaned up!');
    };
  }, [count]); // The dependency array

  return (
    <div className='text-center'>
      <h1 className='text-3xl'>Count: {count}</h1>
      <button className='mr-2' onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button className='ml-2' onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
