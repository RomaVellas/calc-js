import { useState } from "react";
import "./material-selector.css";

const MaterialSelector = ({ inputData, setInputData, materials }) => {
  const [selectedMaterial, setSelectedMaterial] = useState("");

  const handleChange = (event) => {
    setSelectedMaterial(event.target.value);
    const currentList = materials.find(
      (material) => material.name === event.target.value
    );
    setInputData({ ...inputData, list: currentList });
    console.log(`Selected Material: ${event.target.value}`);
  };

  return (
    <div className="material-selector">
      <label className="material-selector__title" htmlFor="material">
        Выберите материал:
      </label>
      <select
        className="material-selector__select"
        id="material"
        value={selectedMaterial}
        onChange={handleChange}
      >
        <option value="" disabled>
          -- Выберите --
        </option>

        {materials.map((material) => (
          <option key={material.name} value={material.name}>
            {material.name + " "} Материал: {material.material}
          </option>
        ))}
      </select>
      {selectedMaterial && <p>Вы выбрали: {selectedMaterial}</p>}
    </div>
  );
};

export default MaterialSelector;
