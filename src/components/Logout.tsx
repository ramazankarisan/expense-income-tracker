import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { AppState } from '../store';
import { logout } from '../store/actions/userActions';

const Logout = () => {
  const { data } = useSelector((state: AppState) => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(logout());
  }, [])

  if (!data.username) navigate("/login");

  return (
    <>

    </>
  )
}

export default Logout