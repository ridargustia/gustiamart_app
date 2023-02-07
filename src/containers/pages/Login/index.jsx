import React, { useEffect, useState } from 'react';
import './Login.scss';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { FaUser, FaLock } from 'react-icons/fa';
import '../../../config/firebase';
import { useNavigate } from 'react-router-dom';

import { loginUserAPI } from '../../../config/redux/action/authAction';
// import { registerUserAPI } from '../../../config/redux/action/authAction';
import Button from '../../../components/atoms/Button';

import Avatar from '../../../assets/img/avatars/shopping.svg';
import logoGustiamart from '../../../assets/img/logo/logoGustiamart.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { isLoading, isLogin } = useSelector((state) => state.authReducer);
  // const isLogin = useSelector((e) => e.isLogin);
  // const isLoading = useSelector((e) => e.isLoading);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegisterSubmit = (event) => {
    event.preventDefault();

    dispatch(loginUserAPI({ email, password }));
  };

  useEffect(() => {
    if (isLogin) {
      navigate('/');
    }
  }, [isLogin, dispatch]);

  return (
    <div className="container">
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Selamat Datang Di GustiaMart</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae quidem ducimus vitae est?
            </p>
          </div>
          <img src={Avatar} alt="avatar" className="image" />
        </div>
        <div className="panel right-panel">
          <div className="signin">
            <div className="card">
              <form action="#">
                <div className="header-logo">
                  <img src={logoGustiamart} alt="logo_gustiamart" />
                </div>
                <div className="input-field">
                  <FaUser className="icon" />
                  <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div className="input-field">
                  <FaLock className="icon" />
                  <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <Button title="Login" onClick={(e) => handleRegisterSubmit(e)} isLoading={isLoading} />
                <a href="ubah_password.html" className="pwd-forget">
                  Lupa Password? Klik disini
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
