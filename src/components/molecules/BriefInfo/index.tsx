import "./index.scss";

type BriefInfoProps = {
  briefInfo: {
    [key: string]: string | number;
  };
};

const BriefInfo = ({ briefInfo }: BriefInfoProps) => {
  return (
    <ul className="m-briefInfo">
      {Object.entries(briefInfo).map(([key, value]) => (
        <li key={key}>
          <span>{key}</span>
          <span>{value}</span>
        </li>
      ))}
    </ul>
  );
};

export default BriefInfo;
