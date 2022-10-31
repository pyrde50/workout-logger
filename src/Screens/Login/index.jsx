import React from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import Paper from '@mui/material/Paper';
import styles from '../../styles/login.module.css';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import loginService from '../../services/login';
import { login } from '../../reducers/userReducer';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router';

import { Button, TextField, Typography } from '@mui/material';

const validationSchema = yup.object({
  username: yup.string('Enter your username').required('Username required'),
  password: yup.string('Enter your password').required('Password is required'),
});

const Login = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || '/';

  // TODO!! SEND DATA TO DATABASE
  const handleLogin = async (values) => {
    try {
      //Send POST request to the backend
      const user = await loginService.login(values);
      //Set the credentials to the local storage
      window.localStorage.setItem('user', JSON.stringify(user));
      //Set the user info to redux store
      dispatch(login(user));
      //navigate to previous page that was opened
      navigate(from, { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  return (
    <div className="Container">
      <div id={styles.toCenter}>
        <Paper elevation={10} className={styles.paper}>
          <form onSubmit={formik.handleSubmit} id={styles.form}>
            <Typography variant="h4" component="div" id={styles.login_text}>
              {t('LOGIN')}
            </Typography>
            <TextField
              id="username"
              name="username"
              label={t('username')}
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={
                formik.touched.username
                  ? formik.errors.username
                    ? formik.errors.username
                    : ' '
                  : t('usernameHelper')
              }
              className={styles.textField}
              fullWidth
            />
            <TextField
              id="password"
              name="password"
              label={t('password')}
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={
                formik.touched.password
                  ? formik.errors.password
                    ? formik.errors.password
                    : ' '
                  : t('passwordHelper')
              }
              className={styles.textField}
              fullWidth
            />
            <Button
              variant="contained"
              type="submit"
              id={styles.login_button}
              fullWidth
              disabled={!(formik.isValid && formik.dirty)}
            >
              {t('logIn')}
            </Button>
          </form>
          <Button fullWidth id={styles.to_register_button}>
            <Link to="/Register" style={{ textDecoration: 'none' }}>
              {t('REGISTER')}
            </Link>
          </Button>
        </Paper>
      </div>
    </div>
  );
};

export default Login;
