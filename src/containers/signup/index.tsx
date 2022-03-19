import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { InputField, Button } from 'components';

export const SignUpContainer: React.FC = () => {
  const [firstName, setFirstName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/signin', { state: { firstName: firstName, email: email, password: password } });
  };
  return (
    <div className="signup-container">
      <h1 className="signup-container_title">
        Let's <br /> <strong>Sign Up</strong>
      </h1>
      <p className="signup-container_describe">Use form below to sign up for this awesome service. You're only few steps away!</p>
      <form onSubmit={handleClick} className="signup-container_form">
        <InputField
          required
          label="First Name"
          name="first-name"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <InputField required label="Email" name="Email-address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <InputField
          required
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="container_btn">
          <Button type="submit" label="Sign Up" />
        </div>
      </form>
    </div>
  );
};
