import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import {textField} from '../UserForm/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import {useProfileContext} from '../../providers/profile';

export const SearchForm = () => {
  const [login, setLogin] = useState('');
  const {searchUser} = useProfileContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    searchUser(login);
      };

  const handleSearchChange = (e) => setLogin(e.target.value);

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      onSubmit={handleSubmit}
    >
      <TextField sx={textField} label="Введите логин"
                 onChange={handleSearchChange}
                 required
                 InputProps={{
                   startAdornment: (
                     <InputAdornment position="start">
                       <SearchIcon/>
                     </InputAdornment>
                   ),
                 }}/>
        <Button variant="contained" type="submit">Поиск</Button>
    </Box>
  );
};