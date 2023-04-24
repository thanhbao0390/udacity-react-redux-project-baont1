import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import { Outlet, useNavigate, } from 'react-router-dom'

const ProtectedRoute = () => {
  const { userInfo } = useSelector((state) => state.root)
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
      return;
    }
  }, [userInfo, navigate]);
  
  
  if (!userInfo) {
    return '';
  } else {
    return <Outlet />
  }
}

export default ProtectedRoute