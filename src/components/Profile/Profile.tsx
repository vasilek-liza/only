import { FC } from 'react';
import { removeToken } from '../../store/Auth/AuthSlice';
import { CustomButton } from '../common/CustomButton/CustomButton';
import { useAppDispatch, useAppSelector } from '../../hook';
import components from './ProfileComponents';
import { resources } from '../../resources';


export const Profile: FC = () => {
  const dispatch = useAppDispatch();
  const { username } = useAppSelector((state: any) => state.authReducer);
  const logOut = () => {
    dispatch(removeToken());
    localStorage.removeItem("accessToken");
    localStorage.removeItem("username");
  }

  return (
    <components.ProfileWrapper>
      <components.Text>{resources.hello}, <b>{username}</b></components.Text>
      <CustomButton onClick={logOut} text={resources.logout}/>
    </components.ProfileWrapper>
  );
}