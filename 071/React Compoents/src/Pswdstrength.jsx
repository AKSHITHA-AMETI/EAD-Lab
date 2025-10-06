import React, { useState } from 'react';

// Password strength checker function
const checkPasswordStrength = (password) => {
  const minLength = 8;
  const lowerCase = /[a-z]/;
  const upperCase = /[A-Z]/;
  const number = /[0-9]/;
  const specialChar = /[\W_]/;
  
  if (password.length < minLength) {
    return "Weak: Password is too short (minimum 8 characters).";
  }
  if (!lowerCase.test(password)) {
    return "Weak: Password must contain at least one lowercase letter.";
  }
  if (!upperCase.test(password)) {
    return "Weak: Password must contain at least one uppercase letter.";
  }
  if (!number.test(password)) {
    return "Weak: Password must contain at least one number.";
  }
  if (!specialChar.test(password)) {
    return "Weak: Password must contain at least one special character.";
  }

  // Check for common patterns
  const commonPatterns = ['password', '12345', 'qwerty', 'letmein'];
  for (let pattern of commonPatterns) {
    if (password.toLowerCase().includes(pattern)) {
      return `Weak: Password contains a common pattern ('${pattern}')`;
    }
  }

  return "Strong: Your password is strong!";
};

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState('');
  const [strengthMessage, setStrengthMessage] = useState('');

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setStrengthMessage(checkPasswordStrength(newPassword));
  };

  return (
    <div className="password-strength-checker">
      <h2>Password Strength Checker</h2>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter your password"
        className="password-input"
      />
      <p className="strength-message">{strengthMessage}</p>
    </div>
  );
};

export default PasswordStrengthChecker;
