import { useState } from "react";
import "./index.scss";

type TimeListTypes = {
  day: string;
  list: {
    from: string;
    to: string;
    disable?: boolean;
  }[];
};

type TimeChooseProps = {
  timeList: TimeListTypes[];
};

const TimeChoose = ({ timeList }: TimeChooseProps) => {
  const [day, setDay] = useState(timeList[0]);
  const [time, setTime] = useState(day.list[0]);

  return (
    <div className="o-timeChoose">
      <ul className="o-timeChoose_day">
        {timeList.map((d, i) => (
          <li
            key={i}
            onClick={() => setDay(d)}
            className={day.day === d.day ? "active" : ""}
          >
            {d.day}
          </li>
        ))}
      </ul>
      <ul className="o-timeChoose_time">
        {day.list.map((t, i) => (
          <li
            key={i}
            onClick={() => setTime(t)}
            className={`${time === t ? "active" : ""} ${
              t.disable ? "disable" : ""
            }`}
          >
            {t.from} - {t.to}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeChoose;
