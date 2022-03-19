import React from 'react';
import './styles.css';

interface InputProps {
  onChange: (key: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type: string;
  label: string;
  required?: boolean;
  value: any;
}

export const InputField: React.FC<InputProps> = ({ onChange, name, type, label, required, value }) => {
  return (
    <div className="input_wrapper">
      <label className="input_label" htmlFor={name}>
        {label}
      </label>
      <input required={required} className="input" name={name} type={type} value={value} onChange={onChange} />
    </div>
  );
};
