import React, {useCallback, useState} from 'react';

import {ProfileContext} from './profile-context';
import {v4} from 'uuid';

export const ProfileContextProvider = ({children}) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const addUser = useCallback((user) => {
    setUsers([...users,
      {
        id: v4(),
        ...user
      }
    ]);
  }, [setUsers, users]);

  const searchUser = useCallback((login) => {
    const user = users.find(user => user.login === login);
    if (user) {
      setSelectedUser(user);
    }
  }, [users, setSelectedUser]);

  const editUser = useCallback((id, updatedFields) => {
    return users.map((user) => {
      if (user.id === id) {
        return {...user, ...updatedFields};
      }
      return user;
    });
  }, [users]);

  return (
    <ProfileContext.Provider value={{users, selectedUser, addUser, searchUser, editUser}}>
      {children}
    </ProfileContext.Provider>
  );
};
