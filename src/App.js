import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from "./store/store"

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Navigation/>
    </div>
    </Provider>
  );
}

export default App;
