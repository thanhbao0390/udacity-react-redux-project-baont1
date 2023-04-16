import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  // decrement,
  // increment,
  // incrementByAmount,
  // incrementAsync,
  // incrementIfOdd,
  selectQuestion,
} from './questionSlice';

export function QuestionAdd() {
  const questions = useSelector(selectQuestion);
  const dispatch = useDispatch();
  
  return (
    <div><h4>Add Question</h4>
      <div className='qs-add'>
        <form>
          <div><div>Option 1: </div><input size={75} /></div>
          <div><div>Option 2: </div><input size={75} /></div>
        </form>

      </div>
    </div>
  );
}
