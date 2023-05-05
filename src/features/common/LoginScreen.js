import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  login,
} from '../../app/store/rootSlice';
import { useNavigate, } from "react-router-dom";

const LoginScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.root);
  let usersList = [];
  Object.keys(users).forEach(function (key) {
    usersList.push(users[key]);
  });

  const handleChangeBook = (value) => {
    // check
    if (!value) {
      alert('Please choose user!');
    } else {
      dispatch(login({ id: value }));
      navigate("/home");
    }
  }

  return (
    <div className='login-contents'>
      <label>Choose user to login: </label>
      <select onChange={e => { handleChangeBook(e.target.value); }} value={''}>
        <option value="" disabled>
          Move to...
        </option>
        {usersList.map((user) => (
          <option key={user.id} value={user.id}>{user.name}</option>
        ))}

      </select>
    </div>
  )
}
export default LoginScreen