import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  login,
  usersList,
} from '../../app/store/userSlice';
import { useNavigate, } from "react-router-dom";

const LoginScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector(usersList);

  const handleChangeBook = (value) => {
    // check
    if (!value) {
      alert('Please choose user!');
    } else {
      dispatch(login({ id: value }));
      //alert('loged');
      navigate("/home");
    }
  }

  return (
    <div className='login-contents'>
      <label>Choose user to login: </label><select onChange={e => { handleChangeBook(e.target.value); }} value={''}>
        <option value="" disabled>
          Move to...
        </option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>{user.name}</option>
        ))}

      </select>
    </div>
  )
}
export default LoginScreen