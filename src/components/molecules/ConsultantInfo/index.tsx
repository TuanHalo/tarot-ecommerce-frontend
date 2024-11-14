import Button from "@/components/atoms/Button";
import "./index.scss";

type ConsultantInfoProps = {
  avatar: string;
  name: string;
  description?: string;
  action1: {
    name: string;
    icon: string;
    type: "Type1" | "Type2";
  };
  action2: {
    name: string;
    icon: string;
    type: "Type1" | "Type2";
  };
  type?: "Short" | "Long";
};

const ConsultantInfo = ({
  avatar,
  name,
  description = "",
  action1,
  action2,
  type = "Short",
}: ConsultantInfoProps) => {
  return (
    <div className={"m-consultantInfo " + type.toLowerCase()}>
      <img src={avatar} alt="" className="m-consultantInfo_avatar" />
      <div className="m-consultantInfo_brief">
        <h6 className="m-consultantInfo_brief--name">{name}</h6>
        {description ? (
          <p className="m-consultantInfo_brief--desc">{description}</p>
        ) : (
          ""
        )}
      </div>
      <div className="m-consultantInfo_action">
        <Button {...action1} />
        <Button {...action2} />
      </div>
    </div>
  );
};

export default ConsultantInfo;
