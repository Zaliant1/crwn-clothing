import SignInForm from "../sign-in/sign-in.component";
import SignUpForm from "../sign-up/sign-up.component";

import { AuthenticationContainer } from "./authentication.styles.jsx";

const Authentication = () => (
  <AuthenticationContainer>
    <SignInForm />
    <SignUpForm />
  </AuthenticationContainer>
);

export default Authentication;
