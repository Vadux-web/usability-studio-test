import React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import {textField} from './styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import {hobbyes} from './constants';
import {useProfileContext} from '../../providers/profile';

export const UserForm = () => {

  const {selectedUser, addUser} = useProfileContext();

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const [userLogin, setUserLogin] = useState(selectedUser?.login || '');
  const [userPassword, setUserPassword] = useState(selectedUser?.password || '');
  const [userHobby, setUserHobby] = useState(selectedUser?.hobby || '');

  useEffect(() => {
    if (selectedUser) {
      resetForm(selectedUser);
    }
  }, [selectedUser]);
  const resetForm = (user) => {
    setUserLogin(user ? user.login : '');
    setUserPassword(user ? user.password : '');
    setUserHobby(user ? user.hobby : '');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser({
      login: userLogin,
      password: userPassword,
      hobby: userHobby,
    });
    resetForm();
  };

  const handleLoginChange = (e) => setUserLogin(e.target.value);
  const handlePasswordChange = (e) => setUserPassword(e.target.value);
  const handleHobbyChange = (e) => setUserHobby(e.target.value);

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      onSubmit={handleSubmit}
    >
      <TextField sx={textField} value={userLogin} required label="Введите логин"
                 onChange={handleLoginChange}/>
      <TextField sx={textField} value={userPassword} required label="Введите пароль"
                 type={showPassword ? 'text' : 'password'}
                 InputProps={{
                   endAdornment: (
                     <InputAdornment position="end">
                       <IconButton
                         disableRipple
                         aria-label="toggle password visibility"
                         onClick={togglePasswordVisibility}
                         onMouseDown={togglePasswordVisibility}
                       >
                         {showPassword ? (
                           <VisibilityIcon/>
                         ) : (
                           <VisibilityOffIcon/>
                         )}
                       </IconButton>
                     </InputAdornment>
                   ),
                 }}
                 onChange={handlePasswordChange}/>
      <TextField sx={textField}
                 value={userHobby}
                 select
                 required
                 label="Увлечения"
                 onChange={handleHobbyChange}
      >
        {hobbyes.map((hobby) => (
          <MenuItem key={hobby.id} value={hobby.value}>
            {hobby.value}
          </MenuItem>
        ))}
      </TextField>
      <Button variant="contained" type="submit">Подтвердить</Button>
    </Box>
  );
};