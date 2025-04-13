import "./length-selector.css";

function LengthSelector({ configLength, inputData, setInputData }) {
  const handleChange = (event) => {
    if (
      event.target.value <= configLength.max &&
      event.target.value >= configLength.min
    ) {
      const newValue = parseInt(event.target.value, 10);
      setInputData({
        ...inputData,
        productSize: {
          ...inputData.productSize,
          length: newValue,
        },
      });
    }
  };

  return (
    <div className="length-selector">
      <label className="length-selector__title" htmlFor="lengthRange">
        Выберите длину:
      </label>
      <input
        className="length-selector__select"
        type="range"
        id="lengthRange"
        min={configLength.min}
        max={configLength.max}
        value={inputData.productSize.length}
        onChange={handleChange}
      />
      <input
        className="length-selector__select"
        type="number"
        min={configLength.min}
        max={configLength.max}
        value={inputData.productSize.length}
        onChange={handleChange}
      />
      <p>Текущая длина: {inputData.productSize.length}</p>
    </div>
  );
}

export default LengthSelector;
