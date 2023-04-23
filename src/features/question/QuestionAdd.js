import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addQuestion,
} from '../../app/store/questionSlice';
import {
  Link,
  useNavigate,
} from "react-router-dom";
import Header from "../common/Header";

export function QuestionAdd() {
  const { userInfo } = useSelector((state) => state.user)
  const navigate = useNavigate();
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
      dispatch(addQuestion({ optionOneText: optionOne, optionTwoText: optionTwo, author: userInfo.id }))
      navigate("/home");
    }
  }

  return (
    <div>
      <div><Header /></div>
      <h4>Add Question</h4>
      <div className="qs-btnAdd">
        <Link to={`/home`}>List Question</Link>
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