import Introductory from "../Introductory/Introductory";
import ResultCalc from "../ResultCalc/ResultCalc";
import data from "../../data/data.json";
import config from "../../data/config.json";
import "./calculation.css";
import { useState } from "react";

function Calculation() {
  const screws = data.find((item) => item.type === "fix");
  const [inputData, setInputData] = useState({
    productSize: {
      length: 5,
      width: 5,
    },
    list: {},
    pipe: {},
    frame: {},
    screws: screws,
  });

  return (
    <div className="calculation">
      <Introductory
        inputData={inputData}
        setInputData={setInputData}
        data={data}
        config={config}
      />
      <ResultCalc inputData={inputData} config={config} />
    </div>
  );
}

export default Calculation;
