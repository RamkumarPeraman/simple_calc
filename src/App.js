import React, { useState } from 'react';
const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const handleClick = (value) => {
    setInput(input + value);
  };
  const handleClear = () => {
    setInput('');
    setResult('');
  };
  const handleEquals = () => {
    try {
      setResult(eval(input));
    } 
    catch{
      setResult('Error');
    }
  };
  return (
    <div className='flex items-center justify-center h-screen bg-gray-200'>
      <div className='w-full max-w-xs p-4 bg-white shadow-lg rounded-lg'>
        <section className='flex flex-col items-center justify-center h-16 bg-blue-100 text-2xl p-2 rounded mb-2'>
          <div>{input || '0'}</div>
          <div className='text-gray-500'>{result}</div>
        </section>
        <section className='mb-2'>
          <button
            className='w-full p-2 rounded bg-red-500 text-white hover:bg-red-600'
            onClick={handleClear}
          >
            Clear
          </button>
        </section>
        <section className='grid grid-cols-4 gap-2'>
          <button 
            className='p-4 text-xl bg-gray-200 rounded hover:bg-gray-300' 
            onClick={() => handleClick('1')}>
              1
          </button>
          <button 
            className='p-4 text-xl bg-gray-200 rounded hover:bg-gray-300' 
            onClick={
              () => handleClick('2')
            }>
              2
          </button>
          <button 
            className='p-4 text-xl bg-gray-200 rounded hover:bg-gray-300' 
            onClick={
              () => handleClick('3')
            }>
              3
          </button>
          <button 
            className='p-4 text-xl bg-gray-200 rounded hover:bg-gray-300' 
            onClick={
              () => handleClick('/')
            }>
              /
          </button>
          <button 
            className='p-4 text-xl bg-gray-200 rounded hover:bg-gray-300' 
            onClick={
              () => handleClick('4')
            }>
              4
            </button>
          <button 
            className='p-4 text-xl bg-gray-200 rounded hover:bg-gray-300' 
            onClick={
              () => handleClick('5')
            }>
              5
          </button>
          <button 
            className='p-4 text-xl bg-gray-200 rounded hover:bg-gray-300' 
            onClick={
              () => handleClick('6')
            }>
              6
          </button>
          <button 
            className='p-4 text-xl bg-gray-200 rounded hover:bg-gray-300' 
            onClick={
              () => handleClick('*')
              }>
                *
            </button>
          <button 
            className='p-4 text-xl bg-gray-200 rounded hover:bg-gray-300' 
            onClick={
              () => handleClick('7')
              }>
                7
            </button>
          <button 
            className='p-4 text-xl bg-gray-200 rounded hover:bg-gray-300' 
            onClick={
              () => handleClick('8')
              }>
                8
            </button>
          <button 
            className='p-4 text-xl bg-gray-200 rounded hover:bg-gray-300' 
            onClick={
              () => handleClick('9')
              }>
                9
            </button>
          <button 
            className='p-4 text-xl bg-gray-200 rounded hover:bg-gray-300' 
            onClick={
              () => handleClick('-')
              }>
                -
            </button>
          <button 
            className='p-4 text-xl bg-gray-200 rounded hover:bg-gray-300' 
            onClick={
              () => handleClick('0')
              }>
                0
            </button>
          <button 
            className='p-4 text-xl bg-gray-200 rounded hover:bg-gray-300' 
            onClick={
              () => handleClick('.')
              }>
                .
            </button>
          <button 
            className='p-4 text-xl bg-gray-200 rounded hover:bg-gray-300' 
            onClick={handleEquals

            }>
              =
          </button>
          <button 
            className='p-4 text-xl bg-gray-200 rounded hover:bg-gray-300' 
            onClick={
              () => handleClick('+')
              }>
                +
            </button>
        </section>
      </div>
    </div>
  );
};

export default App;
