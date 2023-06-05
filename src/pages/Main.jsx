import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {UserForm} from '../features/UserForm';
import {formsWrapper} from './styles';
import Typography from '@mui/material/Typography';
import {ProfileContextProvider} from '../providers/profile';
import {SearchForm} from '../features/SearchForm';

export const Main = () => {
  return (
    <ProfileContextProvider>
      <Container maxWidth="false" disableGutters>
        <Box sx={formsWrapper}>
          <Typography variant="h5" mb={2}>
            Данные пользователя
          </Typography>
          <UserForm/>
          <Typography variant="h5" mt={6} mb={2}>
            Поиск пользователя
          </Typography>
          <SearchForm/>
        </Box>
      </Container>
    </ProfileContextProvider>
  );
};
