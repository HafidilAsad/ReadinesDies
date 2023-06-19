import React from 'react';
import { useSelector } from 'react-redux';
export default function CounterLabel() {
  const { loading } = useSelector((state) => state.counter);

  return (
    <div>
      <p>{loading ? 'true' : 'false'}</p>
    </div>
  );
}
