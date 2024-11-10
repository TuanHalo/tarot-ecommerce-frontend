import Field from "@/components/atoms/Field";
import "./index.scss";
import Button from "@/components/atoms/Button";
import { Link } from "react-router-dom";
import { PATH } from "@/config/path";
import { regexp, required } from "@/utils/validate";
import { useFrom } from "@/hooks/useForm";
import { useAuth } from "@/stores/AuthContext";

const SignIn = () => {
  const { values, register, validate } = useFrom({
    email: [required(), regexp("email")],
    password: [required()],
  });

  const { login } = useAuth();

  const onSubmitHandler = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    if (validate()) {
      login({ ...(values as any) });
    }
  };

  return (
    <div className="p-login">
      <form className="p-login_form" onSubmit={onSubmitHandler}>
        <h3 className="p-login_form--title">LOGIN</h3>
        <div className="p-login_form--field">
          <Field
            iconName="mail"
            placeholder="Enter your email"
            {...register("email")}
          />
          <Field
            iconName="key"
            placeholder="Enter your password"
            isPassword
            {...register("password")}
          />
        </div>
        <div className="p-login_form--forgotPassword">
          <span>Forgot password?</span>
          <Link to={PATH.resetPassword}>Recover your password</Link>
        </div>
        <Button name="Login" />
        <div className="p-login_form--register">
          <span>Don't have an account?</span>
          <Link to={PATH.signup}>Register now</Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
