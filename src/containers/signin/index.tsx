import React from 'react';
import './styles.css';
import { useLocation } from 'react-router-dom';
import { Button } from 'components';

export const SignInContaier: React.FC = () => {
  const { state }: any = useLocation();

  return (
    <div className="signin-container">
      <h1 className="signin-container_title">Welcome, {state.firstName}</h1>
      <p className="signin-container_describe">
        You have been registered for this awesome service. <br /> Please check your email listed below for instructions.
      </p>
      <div className="signin-container_email">{state.email}</div>
      <Button label="Sign in" />
    </div>
  );
};
