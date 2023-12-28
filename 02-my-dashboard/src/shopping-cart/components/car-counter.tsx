"use client"
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { addOne, initCounterState, substracOne } from "@/store/counter/counterSlice";
import { useAppSelector } from "@/store/store";

interface Props {
  value?:number
}

export const CarCounter = ({value = 0}:Props) => {
  const count = useAppSelector(state => state.counter.count);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initCounterState(value))
  },[dispatch, value])

  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
        onClick={() => { dispatch(substracOne())}}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          >
          -1
        </button>
        <button
          onClick={() => { dispatch(addOne()) }}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>
      </div>
    </>
  );
};
