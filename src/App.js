import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { Question } from './features/question/Question';
import { QuestionAdd } from './features/question/QuestionAdd';
import { QuestionVote } from './features/question/QuestionVote';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {

  const user = 'sarahedo';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Question user={user} />,
    },
    {
      path: "/add",
      element: <QuestionAdd user={user} />,
    },
    {
      path: "/vote/:id",
      element: <QuestionVote user={user} />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header> */}
    </div>
  );
}

export default App;
