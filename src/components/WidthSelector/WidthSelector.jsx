import "./width-selector.css";

const WidthSelector = ({ configWidth, inputData, setInputData }) => {
  const handleChange = (event) => {
    if (
      event.target.value <= configWidth.max &&
      event.target.value >= configWidth.min
    ) {
      const newValue = parseInt(event.target.value, 10);
      setInputData({
        ...inputData,
        productSize: {
          ...inputData.productSize,
          width: newValue,
        },
      });
    }
  };

  return (
    <div className="width-selector">
      <label className="width-selector__title" htmlFor="widthRange">
        Выберите ширину:
      </label>
      <input
        className="width-selector__select"
        type="range"
        id="widthRange"
        min={configWidth.min}
        max={configWidth.max}
        value={inputData.productSize.width}
        onChange={handleChange}
      />
      <input
        className="width-selector__select"
        type="number"
        min={configWidth.min}
        max={configWidth.max}
        value={inputData.productSize.width}
        onChange={handleChange}
      />
      <p>Текущая ширина: {inputData.productSize.width}</p>
    </div>
  );
};

export default WidthSelector;
