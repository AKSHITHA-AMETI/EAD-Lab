import React from 'react';
import PasswordStrengthChecker from './Pswdstrength';
import Counter from './Counter';
import Pagination from './Pagination';
import ModalPortal from './Portal';

const App = () => {
  return (
    <div>
      <Counter/>
      <Pagination/>
      <PasswordStrengthChecker />
      <ModalPortal/>
    </div>
  );
};

export default App;
