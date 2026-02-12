import { useState } from "react";

export const CircleSlider = () => {
  const [value, setValue] = useState(100);

  return (
    <div className="wrapper">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="range-hidden"
      />

      <div
        className="circle"
        style={{ "--progress": `${value * 3.6}deg` }}
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - (rect.left + rect.width / 2);
          const y = e.clientY - (rect.top + rect.height / 2);

          let angle = Math.atan2(y, x) * (180 / Math.PI) + 90;
          if (angle < 0) angle += 360;

          setValue(Math.round(angle / 3.6));
        }}
      >

        <div className="innerCircle">
          <span>{value}</span>
        </div>
      </div>
    </div>
  );
};
