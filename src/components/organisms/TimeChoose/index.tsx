import { useEffect, useMemo, useState } from "react";
import "./index.scss";

export type TimeListTypes = {
  day: string;
  list: {
    startTime: number;
    endTime: number;
  }[];
};

type TimeChooseProps = {
  timeList: TimeListTypes[];
};

const TimeChoose = ({ timeList }: TimeChooseProps) => {
  const [day, setDay] = useState<TimeListTypes | null>(null);
  const [time, setTime] = useState<{
    startTime: number;
    endTime: number;
  } | null>(null);
  const memoizedTimeList = useMemo(() => timeList, [timeList]);

  useEffect(() => {
    setDay(timeList[0]);
    setTime(timeList[0].list[0]);
  }, [memoizedTimeList]);

  const convert = (time: number) => {
    let hour = Math.floor((time % 1440) / 60);
    let minute = Math.floor((time % 1440) % 60);
    let result = "";

    if (hour > 9) result += hour;
    else result += "0" + hour;
    if (minute > 9) result += ":" + minute;
    else result += ":0" + minute;

    return result;
  };

  return (
    <div className="o-timeChoose">
      <ul className="o-timeChoose_day">
        {timeList.map((d, i) => (
          <li
            key={i}
            onClick={() => setDay(d)}
            className={day?.day === d.day ? "active" : ""}
          >
            {d.day}
          </li>
        ))}
      </ul>
      <ul className="o-timeChoose_time">
        {day?.list.map((t, i) => (
          <li
            key={i}
            onClick={() => setTime(t)}
            className={`${time === t ? "active" : ""}`}
          >
            {convert(t.startTime)} - {convert(t.endTime)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeChoose;
