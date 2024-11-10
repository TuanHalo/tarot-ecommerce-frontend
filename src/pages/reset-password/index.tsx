import Button from "@/components/atoms/Button";
import Field from "@/components/atoms/Field";
import { useFrom } from "@/hooks/useForm";
import { regexp, required } from "@/utils/validate";
import "./index.scss";
import { useState } from "react";

const ResetPassword = () => {
  const [step, setStep] = useState(1);
  const { register } = useFrom({
    email: [required(), regexp("email")],
    password: [required()],
  });

  const onSubmitHandler = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
  };

  return (
    <div className="p-resetPassword">
      <form className="p-resetPassword_form" onSubmit={onSubmitHandler}>
        <h3 className="p-resetPassword_form--title">RESET PASSWORD</h3>
        <div className="p-resetPassword_form--field">
          {step == 1 ? (
            <Field
              iconName="mail"
              placeholder="Enter your email"
              {...register("email")}
            />
          ) : step == 2 ? (
            <Field
              iconName="code"
              placeholder="Enter your code"
              {...register("code")}
            />
          ) : step == 3 ? (
            <Field
              iconName="key"
              placeholder="Enter your new password"
              isPassword
              {...register("password")}
            />
          ) : (
            ""
          )}
        </div>
        <div className="p-resetPassword_form--actions">
          <Button
            name="Quay lại"
            icon="arrowLeft"
            type="Type2"
            onClick={() => setStep(step - 1)}
            disabled={step === 1}
          />
          <Button
            name="Xác nhận"
            onClick={() => setStep(step + 1)}
            disabled={step === 3}
          />
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
