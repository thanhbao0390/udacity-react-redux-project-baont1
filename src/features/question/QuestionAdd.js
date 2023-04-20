import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  // decrement,
  // increment,
  // incrementByAmount,
  // incrementAsync,
  addQuestion,
  // selectQuestion,
} from './questionSlice';
import {
  Link,
} from "react-router-dom";

export function QuestionAdd({ user }) {
  // const questions = useSelector(selectQuestion);
  const dispatch = useDispatch();
  const [optionOne, setOptionOne] = useState('');
  const [optionTwo, setOptionTwo] = useState('');

  const handleChangeOptionOne = (e) => {
    setOptionOne(e.target.value);
  }
  const handleChangeOptionTwo = (e) => {
    setOptionTwo(e.target.value);
  }

  const add = () => {
    // check
    if (!optionOne || !optionTwo) {
      alert('Please fill value text option!');
    } else {
      dispatch(addQuestion({ optionOneText: optionOne, optionTwoText: optionTwo, author: user }))
    }
  }

  return (
    <div><h4>Add Question</h4>
      <div className="qs-btnAdd">
        <Link to={`/`}>List Question</Link>
      </div>
      <div className='qs-add'>
        <form >
          <div><div>Option 1: </div><input value={optionOne} onChange={handleChangeOptionOne} size={75} /></div>
          <div><div>Option 2: </div><input value={optionTwo} onChange={handleChangeOptionTwo} size={75} /></div>
          <input type="button" value="Save" onClick={() => add()} />
        </form>

      </div>
    </div>
  );
}
