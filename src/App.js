import './App.css';

import { UseState } from './UseState.js';
import { ClassState } from './ClassState.js';
import { UseReducer } from './UseReducer';

function App() {
  return (
    <div className="App">
      <UseState />
      <ClassState />
      <UseReducer />
    </div>
  );
}

export default App;
