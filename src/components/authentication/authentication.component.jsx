import SignInForm from "../sign-in/sign-in.component";
import SignUpForm from "../sign-up/sign-up.component";

import "./authentication.styles.scss";

const Authentication = () => {
  const someObject = {
    foobar: "foobar",
    testing: "stuff",
  };
  return (
    <div className="authentication-container">
      <SignInForm {...someObject} />
      <SignUpForm foobar={someObject.foobar} testing={someObject.stuff} />
    </div>
  );
};

export default Authentication;
