import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  voteQuestion,
} from '../../app/store/questionSlice';
import {
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";
import Header from "../common/Header";
import UserInfo from "../common/UserInfo";


function QuestionVote() {
  const { userInfo } = useSelector((state) => state.user)
  let { id } = useParams();
  const navigate = useNavigate();
  const question = useSelector((state) => state.question.value[id]);

  const dispatch = useDispatch();
  const [vote, setVote] = useState('');

  const handleChooseOptionOne = (e) => {
    setVote(e.target.value);
  }
  const handleChooseOptionTwo = (e) => {
    setVote(e.target.value);
  }

  const choose = () => {
    // check
    if (!vote) {
      alert('Please fill value text option!');
    } else {
      dispatch(voteQuestion({ authedUser: userInfo.id, answer: vote, qid: id }))
      navigate("/home");
    }
  }

  return (
    <div>
      <div><UserInfo /></div>
      <Header title='Vote Question' link='/home' linkText='List Question' />
      <div className='qs-add'>
        <form >
          <div><label><input name='vote' type='radio' value='optionOne' onChange={handleChooseOptionOne} />Option 1: {question.optionOne.text}</label></div>
          <div><label><input name='vote' type='radio' value='optionTwo' onChange={handleChooseOptionTwo} />Option 2: {question.optionTwo.text}</label></div>
          <input type="button" value="Vote" onClick={() => choose()} />
        </form>
      </div>
    </div>
  );
}

export default QuestionVote