import React from 'react';
import { useSelector } from 'react-redux';
import {
  useParams,
} from "react-router-dom";
import Header from "../common/Header";
import UserInfo from "../common/UserInfo";


function QuestionDetail() {
  const { userInfo } = useSelector((state) => state.root)
  let { question_id } = useParams();
  const question = useSelector((state) => state.root.questions[question_id]);

  let user = useSelector((state) => state.root.users[question.author]);

  let total = question.optionOne.votes.length + question.optionTwo.votes.length;
  let rateOptionOne = total ? Math.round(question.optionOne.votes.length * 100 / (total)) : 0;
  let rateOptionTwo = total ? Math.round(question.optionTwo.votes.length * 100 / (total)) : 0;

  let votedOptionOne = question.optionOne.votes.includes(userInfo.id) ? 'voted' : ''
  let votedOptionTwo = question.optionTwo.votes.includes(userInfo.id) ? 'voted' : ''

  return (
    <div>
      <div><UserInfo /></div>
      <Header title='Question detail' />
      <div>Would You Rather</div>
      <div className='qs-contents-answered'>
        <div className='qs-detail'>
          <div className='avatar'><img src={'/image/' + user.avatarURL} alt='' /></div>
          <div>
            <div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionDetail