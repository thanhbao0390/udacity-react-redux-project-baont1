import React from 'react';
import './App.css';
import QuestionList from './features/question/QuestionList';
import QuestionAdd from './features/question/QuestionAdd';
import QuestionDetail from './features/question/QuestionDetail';
import QuestionVote from './features/question/QuestionVote';
import QuestionLeaderBoard from './features/question/QuestionLeaderBoard';
import ErrorPage from "./features/common/ErrorPage";
import LoginScreen from "./features/common/LoginScreen";
import ProtectedRoute from "./features/common/ProtectedRoute";
import RootPage from "./features/common/RootPage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootPage />} errorElement={<ErrorPage />}>
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/' element={<LoginScreen />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/home' element={<QuestionList />} />
          <Route path='/add' element={<QuestionAdd />} />
          <Route path='/questions/:question_id' element={<QuestionDetail />} />
          <Route path='/vote/:question_id' element={<QuestionVote />} />
          <Route path='/leaderboard' element={<QuestionLeaderBoard />} />
        </Route>
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div >
  );
}

export default App;
