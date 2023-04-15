import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  // decrement,
  // increment,
  // incrementByAmount,
  // incrementAsync,
  // incrementIfOdd,
  selectQuestion,
} from './questionSlice';
// import styles from './Counter.module.css';

export function Question() {
  const questions = useSelector(selectQuestion);
  const dispatch = useDispatch();

  // console.log(questions);
  // const [questions, setQuestions] = useState();

  // let questionsArray;
  // Promise.all([questions]).then((values) => {
  //   questionsArray = [...values];
  // });
  // let questionsArray = Object.keys(questions).forEach(function (key, index) {
  //   return questionsArray.set(questions[key]);
  // })


  return (
    <div><h4>List Question</h4>
      <div className='qs-list'>
        {questions.map((question) => (
          <div key={question.id} className='qs-list-item'>
            <div className='qs-item-title'>{question.id}</div>
            <div className='qs-item-author'>Author: {question.author}</div>
            <div className='qs-item-timestamp'>{new Date(question.timestamp).toLocaleDateString("en-US")} {new Date(question.timestamp).toLocaleTimeString("en-US")}</div>
            <div>
              <div>{question.optionOne.text}</div>
              <div>{question.optionOne.votes}</div>
            </div>
            <div>
              <div>{question.optionTwo.text}</div>
              <div>{question.optionTwo.votes}</div></div>

          </div>
        ))}
      </div>
    </div>
  );
}
