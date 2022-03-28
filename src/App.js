import "./App.css";

import Register from "./components/Register/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import { AddTask } from "./components/AddTask/AddTask";
import Display from "./components/displayTasks/Display";
import { useEffect, useState } from "react";

function App() {
  let appTasks = [];
  let [gettingTasks, settingTasks] = useState([]);
  gettingTasks = (tasks) => {
    return (appTasks = [...tasks]);
  };

  settingTasks = function () {
    return [...appTasks];
  };
  return (
    <div className="App">
      <header className="Todo app">
        {/* <Register></Register> */}
        <AddTask sendArray={gettingTasks}></AddTask>
        <Display displayedtasks={[...appTasks]}></Display>
        <button
          onClick={() => {
            console.log(appTasks);
          }}
        ></button>
      </header>
    </div>
  );
}

export default App;
