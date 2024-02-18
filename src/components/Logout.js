import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

const Logout = ({setIsAuth}) => {
  const navigate=useNavigate();
  const logoutWithGoogle=()=>{
    signOut(auth).then(()=>{
      localStorage.clear();
      setIsAuth(false);
      navigate('/');
    })
  }
  return (
    <div>
      <p>ログアウトする</p>
      <button onClick={logoutWithGoogle}>ログアウト</button>
    </div>
  )
}

export default Logout