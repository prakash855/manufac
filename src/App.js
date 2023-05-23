import {
  alcoholClasses,
  flavanoidsByAlcoholClass,
  gammaTypeOfAlcohol,
  calculateMean,
  calculateMedian,
  calculateMode,
} from "./utility";
import "./App.css";

const App = () => {
  return (
    <div className="tables">
      <div className="data">
        <table>
          <thead>
            <tr>
              <th>Measures</th>
              {alcoholClasses.map((item) => (
                <th>Class {item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Flavanoids Mean</th>
              {flavanoidsByAlcoholClass.map((item) => (
                <td>{calculateMean(item)}</td>
              ))}
            </tr>
            <tr>
              <th>Flavanoids Median</th>
              {flavanoidsByAlcoholClass.map((item) => (
                <td>{calculateMedian(item)}</td>
              ))}
            </tr>
            <tr>
              <th>Flavanoids Mode</th>
              {flavanoidsByAlcoholClass.map((item) => (
                <td>{calculateMode(item)}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="data">
        <table>
          <thead>
            <tr>
              <th>Measures</th>
              {alcoholClasses.map((item) => (
                <th>Class {item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Gamma Mean</th>
              {gammaTypeOfAlcohol.map((item) => (
                <td>{calculateMean(item)}</td>
              ))}
            </tr>
            <tr>
              <th>Gamma Median</th>
              {gammaTypeOfAlcohol.map((item) => (
                <td>{calculateMedian(item)}</td>
              ))}
            </tr>
            <tr>
              <th>Gamma Mode</th>
              {gammaTypeOfAlcohol.map((item) => (
                <td>{calculateMode(item)}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
