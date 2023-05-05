import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  saveQuestionAsync,
} from '../../app/store/rootSlice';
import { useNavigate } from "react-router-dom";
import Header from "../common/Header";
import UserInfo from "../common/UserInfo";

function QuestionAdd() {
  const { userInfo } = useSelector((state) => state.root)
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
    dispatch(saveQuestionAsync({ optionOneText: optionOne, optionTwoText: optionTwo, author: userInfo.id }))
    .unwrap()
    .then((originalPromiseResult) => {
      // handle result here
      navigate("/home");
    })
    .catch((rejectedValueOrSerializedError) => {
      // handle error here
      alert(rejectedValueOrSerializedError.message);
    });
    
  }

  return (
    <div>
      <div><UserInfo /></div>
      <Header title='Add Question' />
      <div>Would You Rather</div>
      <div className='qs-add'>
        <form >
          <div className='qs-item-option'><div>Option 1: </div><input data-testid='optionOne' value={optionOne} onChange={handleChangeOptionOne} size={75} /></div>
          <div className='qs-item-option'><div>Option 2: </div><input data-testid='optionTwo' value={optionTwo} onChange={handleChangeOptionTwo} size={75} /></div>
          <input data-testid='save' type="button" value="Save" onClick={() => add()} />
        </form>
      </div>
    </div>
  );
}

export default QuestionAdd