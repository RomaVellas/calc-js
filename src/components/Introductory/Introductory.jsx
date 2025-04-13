import MaterialSelector from "../MaterialSelector/MaterialSelector";
import PipeSelector from "../PipeSelector/PipeSelector";
import WidthSelector from "../WidthSelector/WidthSelector";
import LengthSelector from "../LengthSelector/LengthSelector";
import FrameSelector from "../FrameSelector/FrameSelector";
import "./introductory.css";

const Introductory = ({ inputData, setInputData, data, config }) => {
  const lists = data.filter((item) => item.type === "list");
  const pipes = data.filter((item) => item.type === "pipe");
  const configFrames = config.filter((item) => item.type === "frame");
  const configWidth = config.find((item) => item.key === "width");
  const configLength = config.find((item) => item.key === "length");

  return (
    <div className="introductory">
      <MaterialSelector
        materials={lists}
        inputData={inputData}
        setInputData={setInputData}
      />
      <PipeSelector
        pipes={pipes}
        inputData={inputData}
        setInputData={setInputData}
      />
      <WidthSelector
        configWidth={configWidth}
        inputData={inputData}
        setInputData={setInputData}
      />
      <LengthSelector
        configLength={configLength}
        inputData={inputData}
        setInputData={setInputData}
      />
      <FrameSelector
        configFrames={configFrames}
        inputData={inputData}
        setInputData={setInputData}
      />
    </div>
  );
};

export default Introductory;
