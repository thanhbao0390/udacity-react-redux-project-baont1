import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {
  logout,
} from '../../app/store/rootSlice';
import { useNavigate, } from "react-router-dom";

export default function UserInfo() {
  const { userInfo } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  return (
    <header>
      <div className='header-status'>
        <span>
          {userInfo ? `Logged in by user: ${userInfo.name} (${userInfo.id})` : "You're not logged in"}
        </span>
        <div className='cta'>
          {userInfo ? (
            <button className='button' onClick={() => {dispatch(logout()); navigate("/login"); }}>
              Logout
            </button>
          ) : (
            <NavLink className='button' to='/login'>
              Login
            </NavLink>
          )}
        </div>
      </div>
    </header>
  )
}