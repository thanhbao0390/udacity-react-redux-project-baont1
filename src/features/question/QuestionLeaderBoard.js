import React from 'react';
import { useSelector } from 'react-redux';
import {
  _saveQuestionAnswer,
} from '../../app/store/rootSlice';
import {
  useParams,
} from "react-router-dom";
import Header from "../common/Header";
import UserInfo from "../common/UserInfo";


function QuestionLeaderBoard() {
  const { userInfo, users } = useSelector((state) => state.root)
  let userList = [];
  Object.keys(users).forEach(key => {
    userList.push(users[key]);
  });

  return (
    <div>
      <div><UserInfo /></div>
      <Header title='Question detail' link='/home' linkText='List Question' />
      <div>Would You Rather</div>
      <table>
        <tr>
          <th>user’s name</th>
          <th>user’s avatar</th>
          <th>number of questions the user add</th>
          <th>number of questions the user answered</th>
        </tr>
        {userList.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td><div className='avatar'><img src={'/image/' + user.avatarURL} /></div></td>
              <td>{Object.keys(user.answers).length}</td>
              <td>{Object.keys(user.answers).length}</td>
            </tr>

          )
        })}

        <tr><td></td><td></td><td></td><td></td></tr>
      </table>
    </div>
  );
}

export default QuestionLeaderBoard