import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectQuestion,
} from '../../app/store/questionSlice';
import {
  Link,
} from 'react-router-dom';
import Header from '../common/Header';
import UserInfo from '../common/UserInfo';
import Question from '../common/Question';

function QuestionList() {
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
      <div><UserInfo /></div>
      <Header title='List Question' link='/add' linkText='Add Question' />
      <div>
        <div className='qs-tabs'>
          <button onClick={() => changeTab(1)} className={(tabs !== 0) ? 'qs-tabs-unanswered qs-tabs-unanswered-selected' : 'qs-tabs-unanswered'}>Unanswered</button>
          <button onClick={() => changeTab(0)} className={(tabs === 0) ? 'qs-tabs-answered qs-tabs-answered-selected' : 'qs-tabs-answered'}>Answered</button>
        </div>
        {(tabs === 1) ? (
          <div className='qs-contents-unanswered'>
            <div className='qs-list'>
              {questionsUnAnswered.map((question) => {
                return (
                  <div key={question.id} className='qs-list-item'>
                    <Question flgAnswered={false} question={question} />
                  </div>
                )
              })}
            </div>
          </div>
        ) : (
          <div className='qs-contents-answered'>
            <div className='qs-list'>
              {questionsAnswered.map((question) => {
                return (
                  <div key={question.id} className='qs-list-item'>
                    <Question flgAnswered={true} question={question} />
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

export default QuestionList