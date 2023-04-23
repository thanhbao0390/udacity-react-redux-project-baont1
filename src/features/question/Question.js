import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectQuestion,
} from '../../app/store/questionSlice';
import {
  Link,
} from "react-router-dom";
import Header from "../common/Header";

export function Question() {
  const questions = useSelector(selectQuestion);
  const { userInfo } = useSelector((state) => state.user)

  const [tabs, setTabs] = useState(1);

  const changeTab = (value) => {
    setTabs(value);
  }

  questions.sort((a, b) => b.timestamp - a.timestamp);
  let questionsAnswered = questions.filter(question => question.optionOne.votes.includes(userInfo.id) || question.optionTwo.votes.includes(userInfo.id))
  let questionsUnAnswered = questions.filter(question => !question.optionOne.votes.includes(userInfo.id) && !question.optionTwo.votes.includes(userInfo.id))

  return (
    <div>
      <div><Header /></div>
      <h4>List Question</h4>
      <div>
        <div className="qs-btnAdd">
          <Link to={`/add`}>Add Question</Link>
        </div>
        <div className='qs-tabs'>
          <button onClick={() => changeTab(1)} className={(tabs === 1) ? 'qs-tabs-unanswered qs-tabs-unanswered-selected' : 'qs-tabs-unanswered'}>Unanswered</button>
          <button onClick={() => changeTab(0)} className={(tabs !== 1) ? 'qs-tabs-answered qs-tabs-answered-selected' : 'qs-tabs-answered'}>Answered</button>
        </div>
        {(tabs === 1) ? (
          <div className='qs-contents-unanswered'>
            <div className='qs-list'>
              {questionsUnAnswered.map((question) => {
                let total = question.optionOne.votes.length + question.optionTwo.votes.length;
                let rateOptionOne = total ? Math.round(question.optionOne.votes.length * 100 / (total)) : 0;
                let rateOptionTwo = total ? Math.round(question.optionTwo.votes.length * 100 / (total)) : 0;
                return (<div key={question.id} className='qs-list-item'>
                  <div className='qs-list-item-top'>
                    {/* <div className='qs-item-title'>{question.id}</div> */}
                    <div className='qs-item-author'>Author: {question.author}</div>
                    <div className='qs-item-timestamp'>{new Date(question.timestamp).toLocaleDateString("en-US")} {new Date(question.timestamp).toLocaleTimeString("en-US")}</div>
                  </div>
                  <div className='qs-item-option'>
                    <div>Option 1: {question.optionOne.text}</div>
                    <div><progress id="file" value={question.optionOne.votes.length} max={total}></progress> {rateOptionOne}%
                      ({question.optionOne.votes.length}/{total})</div>
                    <div>[{question.optionOne.votes.join(", ")}]</div>
                  </div>
                  <div className='qs-item-option'>
                    <div>Option 2: {question.optionTwo.text}</div>
                    <div><progress id="file" value={question.optionTwo.votes.length} max={total}></progress> {rateOptionTwo}%
                      ({question.optionTwo.votes.length}/{total})</div>
                    <div>[{question.optionTwo.votes.join(", ")}]</div>
                  </div>
                  <div><Link to={`/vote/${question.id}`}>Vote</Link></div>
                </div>
                )
              })}
            </div>
          </div>
        ) : (
          <div className='qs-contents-answered'>
            <div className='qs-list'>
              {questionsAnswered.map((question) => {
                let total = question.optionOne.votes.length + question.optionTwo.votes.length;
                let rateOptionOne = total ? Math.round(question.optionOne.votes.length * 100 / (total)) : 0;
                let rateOptionTwo = total ? Math.round(question.optionTwo.votes.length * 100 / (total)) : 0;
                return (<div key={question.id} className='qs-list-item'>
                  <div className='qs-list-item-top'>
                    {/* <div className='qs-item-title'>{question.id}</div> */}
                    <div className='qs-item-author'>Author: {question.author}</div>
                    <div className='qs-item-timestamp'>{new Date(question.timestamp).toLocaleDateString("en-US")} {new Date(question.timestamp).toLocaleTimeString("en-US")}</div>
                  </div>
                  <div className='qs-item-option'>
                    <div>Option 1: {question.optionOne.text}</div>
                    <div><progress id="file" value={question.optionOne.votes.length} max={total}></progress> {rateOptionOne}%
                      ({question.optionOne.votes.length}/{total})</div>
                    <div>[{question.optionOne.votes.join(", ")}]</div>
                  </div>
                  <div className='qs-item-option'>
                    <div>Option 2: {question.optionTwo.text}</div>
                    <div><progress id="file" value={question.optionTwo.votes.length} max={total}></progress> {rateOptionTwo}%
                      ({question.optionTwo.votes.length}/{total})</div>
                    <div>[{question.optionTwo.votes.join(", ")}]</div>
                  </div>
                </div>
                )
              })}
            </div>
          </div>
        )}


      </div>
    </div>
  );
}
