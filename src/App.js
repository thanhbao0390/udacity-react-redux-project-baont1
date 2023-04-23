import React from 'react';
import './App.css';
import { Question } from './features/question/Question';
import { QuestionAdd } from './features/question/QuestionAdd';
import { QuestionVote } from './features/question/QuestionVote';
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
          <Route path='/home' element={<Question />} />
          <Route path='/add' element={<QuestionAdd />} />
          <Route path='/vote/:id' element={<QuestionVote />} />
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
