import "./index.scss";

type ButtonProps = {
  name: string;
  type?: "Type1" | "Type2";
  icon?: string;
};

const Button = ({ name, type = "Type1", icon = "" }: ButtonProps) => {
  return (
    <button className={`a-button ${type.toLowerCase()}`}>
      {icon && <img src={"/images/" + icon + ".svg"} alt="" />}
      {name}
    </button>
  );
};

export default Button;
