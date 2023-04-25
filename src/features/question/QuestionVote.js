import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  _saveQuestionAnswer,
} from '../../app/store/rootSlice';
import {
  useParams,
  useNavigate,
} from "react-router-dom";
import Header from "../common/Header";
import UserInfo from "../common/UserInfo";


function QuestionVote() {
  const { userInfo } = useSelector((state) => state.root)
  let { question_id } = useParams();
  const navigate = useNavigate();
  const question = useSelector((state) => state.root.questions[question_id]);
  let user = useSelector((state) => state.root.users[question.author]);

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
      dispatch(_saveQuestionAnswer({ authedUser: userInfo.id, answer: vote, qid: question_id }))
      navigate("/home");
    }
  }

  return (
    <div>
      <div><UserInfo /></div>
      <Header title='Vote Question' link='/home' linkText='List Question' />
      <div className='qs-vote'>
        <div className='avatar'><img src={'/image/' + user.avatarURL} /></div>
        <form >
          <div className='vote-option'>{question.id}</div>
          <div className='vote-option'><label><input name='vote' type='radio' value='optionOne' onChange={handleChooseOptionOne} />Option 1: {question.optionOne.text}</label></div>
          <div className='vote-option'><label><input name='vote' type='radio' value='optionTwo' onChange={handleChooseOptionTwo} />Option 2: {question.optionTwo.text}</label></div>
          <input type="button" value="Vote" onClick={() => choose()} />
        </form>
      </div>
    </div>
  );
}

export default QuestionVote