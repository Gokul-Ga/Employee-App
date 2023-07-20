import React, { useState } from 'react';
import { Typography, TextField, Button, Container, Grid } from '@mui/material';

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(username, password);
  };

  return (
    <Container maxWidth="sm">
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item>
          <Typography variant="h4">Login</Typography>
        </Grid>
        <Grid item>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} direction="column">
              <Grid item>
                <TextField
                  label="Username"
                  variant="outlined"
                  type="text"
                  id="username"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Password"
                  variant="outlined"
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </Grid>
              <Grid item>
                <Button type="submit" variant="contained" color="primary">
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;





































// import React, { useState } from 'react';

// const Login = ({ handleLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     handleLogin(username, password);
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={handleUsernameChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={handlePasswordChange}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
