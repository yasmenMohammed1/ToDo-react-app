import "./App.css";

import Register from "./components/Register/Register";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="Todo app">
        <Register></Register>
      </header>
    </div>
  );
}

export default App;
