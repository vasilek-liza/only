import { FC } from 'react';
import { getToken } from '../../store/Auth/AuthThunks';
import { useState } from 'react';
import { CustomButton } from '../common/CustomButton/CustomButton';
import { resources } from '../../resources';
import { useAppDispatch, useAppSelector } from '../../hook';
import { useForm} from "react-hook-form";
import { ErrorIcon } from '../common/ErrorIcon';
import components from './AutificationComponents';
import { IUser } from '../../interfaces/IUser';
import { CustomCheckbox } from '../common/CustomCheckbox/CustomCheckbox';

export const Autification: FC = () => {
  const { register, getValues, handleSubmit, formState: { errors } } = useForm<IUser>();
  const [checked, setChecked] = useState(false);
  const dispatch = useAppDispatch();
  const { error, loading } = useAppSelector((state) => state.authReducer);
  const onSubmit = async(data: IUser) => {
    try {
      await dispatch(getToken({data, checked}));
    } finally{}
  }

  return (
    <components.AutificationComponent>
      {error && !loading 
        ? ( 
          <components.ErrorAuth>
            <ErrorIcon />
            <p>Пользователя {getValues("username")} не существует</p>
          </components.ErrorAuth>
        )
        : ""
      }
      <components.Form onSubmit={handleSubmit(onSubmit)}>

        <components.Label>{resources.username}</components.Label>
        <components.CustomInput 
          invalid={!!errors.username} 
          type="username" 
          {...register("username", { required: true })} 
        />

        {errors.username && errors.username.type === "required" && 
          <components.ErrorInput>Обязательное поле</components.ErrorInput>
        }

        <components.Label >{resources.password}</components.Label>
        <components.CustomInput 
          invalid={!!errors.password} 
          type="password" 
          {...register("password", { required: true })} 
        />

        {errors.password && errors.password.type === "required" &&  
          <components.ErrorInput>Обязательное поле</components.ErrorInput>
        }

        <CustomCheckbox 
          type="checkbox"
          name="checkbox" 
          checked={checked}
          onChange={() => setChecked(!checked)} 
        /> 

        <CustomButton 
          text={resources.login} 
          type="submit" 
          login={true}
          disabled={loading}
        />

      </components.Form>

    </components.AutificationComponent>
  );
}