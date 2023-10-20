import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer';
import HookCakeContainer from './components/HookCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import ChocolateContainer from './components/ChocolateContainer';
import SameItemContainer from './components/SameItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <SameItemContainer cake /> */}
        {/* <SameItemContainer /> */}
        {/* <CakeContainer /> */}
        {/* <HookCakeContainer /> */}
        {/* <IceCreamContainer /> */}
        {/* <ChocolateContainer /> */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
