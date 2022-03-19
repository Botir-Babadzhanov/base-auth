import React from 'react';
import './styles.css';

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
  type?: buttonTypes;
}

type buttonTypes = 'submit' | 'button';

export const Button: React.FC<ButtonProps> = ({ onClick, label, type }) => {
  return (
    <div className="button_wrapper">
      <button type={type || 'button'} className="button" onClick={onClick}>
        {label}
      </button>
    </div>
  );
};
