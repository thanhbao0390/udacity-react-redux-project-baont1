import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';


function Question({ flgAnswered, question }) {
  const { userInfo } = useSelector((state) => state.root)
  let total = question.optionOne.votes.length + question.optionTwo.votes.length;
  let rateOptionOne = total ? Math.round(question.optionOne.votes.length * 100 / (total)) : 0;
  let rateOptionTwo = total ? Math.round(question.optionTwo.votes.length * 100 / (total)) : 0;

  let votedOptionOne = question.optionOne.votes.includes(userInfo.id) ? 'voted' : ''
  let votedOptionTwo = question.optionTwo.votes.includes(userInfo.id) ? 'voted' : ''

  return (
    <div>
      <div className='qs-list-item-top'>
        <div className='qs-item-title'>{question.id}</div>
        <div className='qs-item-author'>Author: {question.author}</div>
        <div className='qs-item-timestamp'>{new Date(question.timestamp).toLocaleDateString("en-US")} {new Date(question.timestamp).toLocaleTimeString("en-US")}</div>
      </div>
      <div className='qs-item-option'>
        <div className={votedOptionOne}>Option 1: {question.optionOne.text}</div>
        <div><progress id="file" value={question.optionOne.votes.length} max={total}></progress> {rateOptionOne}%
          ({question.optionOne.votes.length}/{total})</div>
        <div>[{question.optionOne.votes.join(", ")}]</div>
      </div>
      <div className='qs-item-option'>
        <div className={votedOptionTwo}>Option 2: {question.optionTwo.text}</div>
        <div><progress id="file" value={question.optionTwo.votes.length} max={total}></progress> {rateOptionTwo}%
          ({question.optionTwo.votes.length}/{total})</div>
        <div>[{question.optionTwo.votes.join(", ")}]</div>
      </div>
      <span className='link'><Link to={`/questions/${question.id}`}>Detail</Link></span>
      {!flgAnswered ? <span className='link'><Link to={`/vote/${question.id}`}>Vote</Link></span> : ''}
      
    </div>
  );
}

export default Question