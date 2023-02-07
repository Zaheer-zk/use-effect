import "./App.css";
import { useEffect, useState } from "react";

function App() {
  //useEffect use when we use to fetch data using api.

  //SYNTAX -----------------------------
  // useEffect(() => {
  //
  // }, [<dependency variable>]) - render initially and create dependencies.

  /*
    when ever dependencies changes useEffect called again.
    as same as useState track the state of the variables.
   */

  //EXAMPLE ----------------
  const [state, setState] = useState(2);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      );

      const get = await res.json();
      setData(get);
    }

    getData();
  }, [state]);

  return (
    <div className="App">
      <div>
        <button onClick={() => setState(state + 2)}>Click Me{state}</button>
        {data.map((ele, i) => {
          return (
            <div key={i}>
              <h3>{ele.firstName}</h3>
              <h3>{ele.lastName}</h3>
              <h3>{ele.age}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
