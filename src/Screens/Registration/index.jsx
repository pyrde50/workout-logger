import React from 'react';
import { useFormik } from 'formik';
import Paper from '@mui/material/Paper';
import styles from '../../styles/login.module.css';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import loginService from '../../services/login';
import { login } from '../../reducers/userReducer';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';

import { Button, TextField, Typography } from '@mui/material';

const validationSchema = yup.object({
  username: yup.string('Enter your username').required('Username required'),
  password: yup.string('Enter your password').required('Password is required'),
  email: yup.string('Enter your email').required('Email is required'),
});

const Registration = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || '/';

  // TODO!! SEND DATA TO DATABASE
  const handleRegistration = async (values) => {
    try {
      //Send POST request to the backend
      const user = await loginService.registration(values);
      //Set the credentials to the local storage
      const loggedInUser = await loginService.login(values);
      window.localStorage.setItem('user', JSON.stringify(loggedInUser));
      //Set the user info to redux store
      dispatch(login(loggedInUser));
      //navigate to previous page that was opened
      navigate(from, { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleRegistration(values);
    },
  });

  return (
    <div className="Container">
      <div id={styles.toCenter}>
        <Paper elevation={10} className={styles.paper}>
          <form onSubmit={formik.handleSubmit} id={styles.form}>
            <Typography variant="h4" component="div" id={styles.login_text}>
              {t('register')}
            </Typography>
            <TextField
              id="email"
              name="email"
              label={t('email')}
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={
                formik.touched.email
                  ? formik.errors.email
                    ? formik.errors.email
                    : ' '
                  : t('emailHelper')
              }
              className={styles.textField}
              fullWidth
            />
            <TextField
              id="username"
              name="username"
              label={t("username")}
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
              label={t("password")}
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
              {t('register')}
            </Button>
          </form>
          <Button fullWidth id={styles.to_register_button}>
            <Link to="/Login" style={{ textDecoration: 'none' }}>
              {t('clickLogin')}
            </Link>
          </Button>
        </Paper>
      </div>
    </div>
  );
};

export default Registration;
