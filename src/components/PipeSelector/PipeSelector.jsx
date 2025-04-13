import { useState } from "react";
import "./pipe-selector.css";

const PipeSelector = ({ inputData, setInputData, pipes }) => {
  const [selectedPipe, setSelectedPipe] = useState("");

  const handleChange = (event) => {
    setSelectedPipe(event.target.value);
    const currentPipe = pipes.find((pipe) => pipe.name === event.target.value);
    setInputData({ ...inputData, pipe: currentPipe });
  };

  return (
    <div className="pipe-selector">
      <label className="pipe-selector__title" htmlFor="pipe">
        Выберите трубу:
      </label>
      <select
        className="pipe-selector__select"
        id="pipe"
        value={selectedPipe}
        onChange={handleChange}
      >
        <option value="" disabled>
          -- Выберите --
        </option>
        {pipes.map((pipe) => (
          <option key={pipe.name} value={pipe.name}>
            {pipe.name}
          </option>
        ))}
      </select>
      {selectedPipe && <p>Вы выбрали: {selectedPipe}</p>}
    </div>
  );
};

export default PipeSelector;
