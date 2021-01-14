import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  Input,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const RegisterView = () => {
  const classes = useStyles();


  const { control, register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data)


  return (
    <Page
      className={classes.root}
      title="Register">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center">
        <Container maxWidth="sm">

          <form onSubmit={handleSubmit(onSubmit)}>
            <Box mb={3}>
              <Typography
                color="textPrimary"
                variant="h2">
                Create new account
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2">
                Use your email to create new account
              </Typography>
            </Box>
            <Controller
              as={<TextField />}
              name="firstName"
              control={control}
              defaultValue=""
              variant="outlined"
              margin="normal"
              fullWidth
              label="First name"
              inputRef={register({ required: true })}
              error={errors.firstName}
              helperText={errors.firstName && 'First Name is required !'}
            />
            <Controller
              as={<TextField />}
              name="lastName"
              control={control}
              defaultValue=""
              variant="outlined"
              margin="normal"
              fullWidth
              label="Last name"
              inputRef={register({ required: true })}
              error={errors.lastName}
              helperText={errors.lastName && 'Last Name is required !'}
            />
            <TextField
              fullWidth
              label="First name"
              margin="normal"
              name="firstName"
              variant="outlined"
              name="firstName" ref={register} />
            <TextField
              fullWidth
              label="Last name"
              margin="normal"
              name="lastName"
              variant="outlined" />
            <TextField
              fullWidth
              label="Email Address"
              margin="normal"
              name="email"
              type="email"
              variant="outlined" />
            <TextField
              fullWidth
              label="Password"
              margin="normal"
              name="password"
              type="password"
              variant="outlined" />
            <Box
              alignItems="center"
              display="flex"
              ml={-1}>
              <Checkbox
                name="policy" />
              <Typography
                color="textSecondary"
                variant="body1">
                I have read the
                    {' '}
                <Link
                  color="primary"
                  component={RouterLink}
                  to="#"
                  underline="always"
                  variant="h6">
                  Terms and Conditions
                </Link>
              </Typography>
            </Box>
            <Box my={2}>
              <input type="submit" />
            </Box>
            <Typography
              color="textSecondary"
              variant="body1">
              Have an account?
                  {' '}
              <Link
                component={RouterLink}
                to="/login"
                variant="h6">
                Sign in
              </Link>
            </Typography>
          </form>

        </Container>
      </Box>
    </Page>
  );
};

export default RegisterView;
