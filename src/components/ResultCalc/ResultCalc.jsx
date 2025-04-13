import { useState } from "react";
import "./result-calc.css";
import { calcList, calcPipe, calculateScrewsNeeded } from "./calculations";

const ResultCalc = ({ inputData, config }) => {
  const [openTable, setOpenTable] = useState(false);
  const [resultData, setResultData] = useState({
    lists: { quantity: 0, sum: 0 },
    pipes: { quantity: 0, sum: 0 },
    screws: { quantity: 0, sum: 0 },
  });

  const productWidth = inputData.productSize.width;
  const productLength = inputData.productSize.length;
  const listWidth = inputData.list.width;
  const pipeWidthMm = inputData.pipe.width;
  const maxDistanceBetweenPipes = inputData.frame.step;
  const priceList = inputData.list.price;
  const pricePipe = inputData.pipe.price;
  const priseScrews = inputData.screws.price;

  const handleClick = (event) => {
    event.preventDefault();

    const screwsPerSqMeter = config.find((item) => {
      if (item.value) {
        return item.key === inputData.list.material;
      } else {
        return false;
      }
    }).value;

    const rusultList = calcList(
      productWidth,
      productLength,
      listWidth,
      priceList
    );

    const resultPipe = calcPipe(
      productWidth,
      productLength,
      pipeWidthMm,
      maxDistanceBetweenPipes,
      pricePipe
    );

    const resultScrews = calculateScrewsNeeded(
      productWidth,
      productLength,
      screwsPerSqMeter,
      priseScrews
    );

    setResultData({
      lists: rusultList,
      pipes: resultPipe,
      screws: resultScrews,
    });

    setOpenTable(true);
  };
  return (
    <div className="result-calc">
      <div>
        {inputData.list.type && inputData.pipe.type && inputData.frame.type ? (
          <button onClick={handleClick}>Начать расчёт</button>
        ) : (
          <span className="result-calc__mass">
            {" "}
            Вы должны заполнить все поля
          </span>
        )}
      </div>
      <div>
        {openTable && (
          <>
            <h3>Результат:</h3>
            <table>
              <thead>
                <tr>
                  <th>Наименование</th>
                  <th>ед.</th>
                  <th>кол-во</th>
                  <th>сумма</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{inputData.list.name}</td>
                  <td>{inputData.list.unit}</td>
                  <td>{resultData.lists.quantity}</td>
                  <td>{resultData.lists.sum}</td>
                </tr>
                <tr>
                  <td>{inputData.pipe.name}</td>
                  <td>{inputData.pipe.unit}</td>
                  <td>{resultData.pipes.quantity}</td>
                  <td>{resultData.pipes.sum}</td>
                </tr>
                <tr>
                  <td>{inputData.screws.name}</td>
                  <td>{inputData.screws.unit}</td>
                  <td>{resultData.screws.quantity}</td>
                  <td>{resultData.screws.sum}</td>
                </tr>
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default ResultCalc;
