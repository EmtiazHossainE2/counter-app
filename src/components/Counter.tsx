'use client';

import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

interface CounterProps {
  appName: string;
}

const Counter: React.FC<CounterProps> = ({ appName }) => {
  const [count, setCount] = useState<number>(0);
  const [newAppName, setNewAppName] = useState<string>(appName);
  const [isEditingName, setIsEditingName] = useState<boolean>(false);
  const [isEditingValue, setIsEditingValue] = useState<boolean>(false);
  const [tempValue, setTempValue] = useState<number>(0);
  const [tempAppName, setTempAppName] = useState<string>(newAppName);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count < 1) {
      return;
    } else {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleUpdateValue = () => {
    if (isEditingValue) {
      setCount(tempValue);
    }
    setIsEditingValue(!isEditingValue);
  };

  const handleUpdateAppName = () => {
    if (isEditingName) {
      setNewAppName(tempAppName);
    }
    setIsEditingName(!isEditingName);
  };

  return (
    <div className="container mx-auto w-full  rounded-md bg-white p-8 border">
      <div className="flex flex-col items-center justify-center space-y-5">
        <h1 className="text-2xl font-semibold">
          {isEditingName ? (
            <input
              type="text"
              value={tempAppName}
              onChange={(e) => setTempAppName(e.target.value)}
            />
          ) : (
            newAppName
          )}
        </h1>
        <div className="my-4">
          <p className="pl-3 text-4xl font-bold mx-5  w-full">
            {isEditingValue ? (
              <input
                type="number"
                value={tempValue}
                className='text-right border'
                onChange={(e) => setTempValue(parseInt(e.target.value))}
              />
            ) : (
              count
            )}
          </p>
          <div className="my-4 flex justify-center space-x-4">
            <button
              onClick={handleDecrement}
              className="btn-decrement btn btn-sm">
              <AiOutlineMinus />
            </button>
            <button
              onClick={handleIncrement}
              className="btn-increment btn btn-sm">
              <AiOutlinePlus />
            </button>
          </div>
        </div>
        <div className="flex justify-between space-x-4">
          <button
            onClick={handleUpdateAppName}
            className="btn-update-app-name btn btn-primary">
            {isEditingName ? 'Save' : 'Edit App Name'}
          </button>
          <button
            onClick={handleUpdateValue}
            className="btn-update-value btn btn-primary">
            {isEditingValue ? 'Save Value' : 'Edit Value'}
          </button>
        </div>
        <div className="mt-4">
          <button
            onClick={handleReset}
            className="btn-reset btn btn-error text-white">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
