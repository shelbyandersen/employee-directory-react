import { HashRouter as Route} from "react-router-dom";
import Table from "./components/Table/Table"

function App() {
  return (
    <Router basename="/">    <div className="container">
      <div className="row">
        <div className="col">
          <div className="App">
            <Table />
          </div>
        </div>
      </div>
    </div>
    </Router>

  );
}

export default App;
