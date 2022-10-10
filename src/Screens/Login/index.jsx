import React from 'react';
import { useFormik } from 'formik';
import Paper from '@mui/material/Paper';
import styles from '../../styles/login.module.css'
import * as yup from 'yup';
import { Button, TextField, Typography } from '@mui/material';
import { Link }from 'react-router-dom';

const validationSchema = yup.object({
  username: yup
    .string('Enter your username')
    .required('Username required'),
    password: yup
      .string('Enter your password')
      .required('Password is required')
});

const Login = () => {

  // TODO!! SEND DATA TO DATABASE
  const handleLogin = async (values) => {
    console.log(values);
  }

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      handleLogin(values);
    }
  });

  return (
    <div className="Container">
      <div id={styles.toCenter}>
        <Paper elevation={10} className={styles.paper}>
          <form onSubmit={formik.handleSubmit} id={styles.form}>
            <Typography variant="h4" component="div" id={styles.login_text}>
              LOGIN
            </Typography>
            <TextField
              id="username"
              name="username"
              label="Username"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username ? formik.errors.username ? formik.errors.username : ' ' : 'Please enter username'}
              className={styles.textField}
              fullWidth
            />
            <TextField 
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password ? formik.errors.password ? formik.errors.password : ' ' : 'Please enter password'}
              className={styles.textField}
              fullWidth
            />
            <Button variant="contained" type="submit"  id={styles.login_button} fullWidth  disabled={!(formik.isValid && formik.dirty)}>
              Log in
            </Button>
          </form>
          <Button  fullWidth id={styles.to_register_button} >
            <Link to="/Register" style={{textDecoration: 'none'}}>CLICK HERE TO REGISTER</Link>
          </Button>
        </Paper>
      </div>
    </div>
  );
};

export default Login;
