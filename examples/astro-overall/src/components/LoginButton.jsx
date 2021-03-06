import React, { useContext } from 'react';
import AuthContext from '../components/AuthContext.jsx';

const LoginButton = () => {
   const auth = useContext(AuthContext);
   return (
      <>
         <button onClick={auth.login}>Login</button>
      </>
   );
};
export default LoginButton;