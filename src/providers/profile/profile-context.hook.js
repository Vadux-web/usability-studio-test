import { useContext } from 'react';

import { ProfileContext } from './profile-context';

export const useProfileContext = () => {
  return useContext(ProfileContext);
};
