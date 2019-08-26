import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Count from './count';
const initState = {
  count: 0
};
function renderState(state = initState, action) {
  switch(action.type) {
    case 'INC':
      return {
        count: state.count + 1
      };
      break;    
    default:
      return state;
      break;
  }
}
const store = createStore(renderState);
const App = () => (
  <Provider store={store}>
    <Count/>
  </Provider>
);
render(<App />, document.getElementById('root'));