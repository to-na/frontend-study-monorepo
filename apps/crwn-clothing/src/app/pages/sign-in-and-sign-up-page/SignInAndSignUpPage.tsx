import './sign-in-and-sign-up-page.styles.scss';

import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';
const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up-page">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
