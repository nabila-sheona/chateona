import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';

const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    dispatch(signInStart());
    try {
      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Replace with actual Google OAuth response data
        body: JSON.stringify({ 
          email: 'test@example.com',
          name: 'Test User',
          photo: 'profilePhotoUrl'
        }),
      });

      const data = await res.json();

      if (data.success === false) {
        dispatch(signInFailure(data));
        return;
      }

      dispatch(signInSuccess(data));
      navigate('/home');
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };

  return (
    <button onClick={handleGoogleLogin} className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">
      Sign in with Google
    </button>
  );
};

export default OAuth;
