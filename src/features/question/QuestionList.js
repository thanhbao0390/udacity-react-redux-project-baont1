import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../common/Header';
import UserInfo from '../common/UserInfo';
import Question from '../common/Question';


function QuestionList() {
  const { userInfo, users, questions } = useSelector((state) => state.root)
  const [tabs, setTabs] = useState(1);
  const changeTab = (v) => {
    setTabs(v);
  }

  let answeredList = [];
  Object.keys(users[userInfo.id].answers).forEach(key => {
    answeredList.push(key);
  });

  let questionsList = [];
  Object.keys(questions).forEach(key => {
    questionsList.push(questions[key]);
  });
  questionsList.sort((a, b) => b.timestamp - a.timestamp);
  let questionsAnswered = questionsList.filter(question => answeredList.includes(question.id))
  let questionsUnAnswered = questionsList.filter(question => !answeredList.includes(question.id))

  return (
    <div>
      <div><UserInfo /></div>
      <Header title='List Question' />
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