import { useState } from "react";
import "./frame-sselector.css";

const FrameSelector = ({ configFrames, inputData, setInputData }) => {
  const [selectedFrame, setSelectedFrame] = useState("");

  const handleChange = (event) => {
    setSelectedFrame(event.target.value);
    const currentList = configFrames.find(
      (frame) => frame.name === event.target.value
    );
    setInputData({ ...inputData, frame: currentList });
    console.log(`Selected Frame: ${event.target.value}`);
  };

  return (
    <div className="frame-selector">
      <label className="frame-selector__title" htmlFor="frame">
        Выберите прочность:
      </label>
      <select
        className="frame-selector__select"
        id="frame"
        value={selectedFrame}
        onChange={handleChange}
      >
        <option value="" disabled>
          -- Выберите --
        </option>
        {configFrames.map((frame) => (
          <option key={frame.name} value={frame.name}>
            {frame.name}
          </option>
        ))}
      </select>
      {selectedFrame && <p>Вы выбрали: {selectedFrame}</p>}
    </div>
  );
};

export default FrameSelector;
