import "./App.css";
import Route from "./components/Route";
import ShivaApp from "./utils/ShivaApp";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={ShivaApp}>
        <Route />
      </Provider>
    </div>
  );
}

export default App;
