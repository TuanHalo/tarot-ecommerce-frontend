import "./index.scss";

type ButtonProps = {
  name: string;
  type?: "Type1" | "Type2";
  icon?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

const Button = ({
  name,
  type = "Type1",
  icon = "",
  onClick = undefined,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      className={`a-button ${type.toLowerCase()}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <img src={"/images/" + icon + ".svg"} alt="" />}
      {name}
    </button>
  );
};

export default Button;
