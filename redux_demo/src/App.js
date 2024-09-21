import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import FirstExample from "./components/CakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FirstExample />
      </div>
    </Provider>
  );
}

export default App;
