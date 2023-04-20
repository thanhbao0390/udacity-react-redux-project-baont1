import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  // decrement,
  // increment,
  // incrementByAmount,
  // incrementAsync,
  // getQuestion,
  voteQuestion,
  // _saveQuestionAnswer,
} from './questionSlice';
import {
  Link,
  useParams,
} from "react-router-dom";

export function QuestionVote({ user }) {
  let { id } = useParams();
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
      dispatch(voteQuestion({authedUser: user, answer: vote, qid: id }))
    }
  }

  return (
    <div><h4>Vote Question</h4>
      <div className="qs-btnAdd">
        <Link to={`/`}>List Question</Link>
      </div>
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
