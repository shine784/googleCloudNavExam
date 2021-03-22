import * as React from 'react';
import * as ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';

import App from 'components/App';
import "./styles.css";
import "./styles.scss";
import CounterStore from 'store/CounterStore';

const store = new CounterStore;
export const StoreContext = React.createContext<CounterStore>(store);
export const useStore = () => React.useContext(StoreContext);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
  ,
  document.getElementById('app'));

  window.onresize = (event: Event)=> {
    console.log('Resizing...',event)
  };

