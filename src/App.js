import "./App.css";

import Register from "./components/Register/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import { AddTask } from "./components/AddTask/AddTask";

function App() {
  return (
    <div className="App">
      <header className="Todo app">
        {/* <Register></Register> */}
        <AddTask></AddTask>
      </header>
    </div>
  );
}

export default App;
