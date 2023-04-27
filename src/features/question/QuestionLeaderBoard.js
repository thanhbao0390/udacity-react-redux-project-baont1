import React from 'react';
import { useSelector } from 'react-redux';
import Header from "../common/Header";
import UserInfo from "../common/UserInfo";


function QuestionLeaderBoard() {
  const { users } = useSelector((state) => state.root)
  let userList = [];
  Object.keys(users).forEach(key => {
    userList.push(users[key]);
  });

  userList.sort((a, b) =>
    (Object.keys(b.answers).length + Object.keys(b.questions).length)
    - (Object.keys(a.answers).length + Object.keys(a.questions).length));

  return (
    <div>
      <div><UserInfo /></div>
      <Header title='Leader Board' />
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
              <td><div className='avatar'><img src={'/image/' + user.avatarURL} alt='' /></div></td>
              <td>{Object.keys(user.questions).length}</td>
              <td>{Object.keys(user.answers).length}</td>
            </tr>
          )
        })}
      </table>
    </div>
  );
}

export default QuestionLeaderBoard