import { useEffect, useState } from 'react';
import './App.css';
import Empty from './components/Empty';
import None from './components/None';
import Used from './components/Used';

function App() {
  const [state, setState] = useState(1)

  return (
    <div className="App">
      <div className='app-content'>
      <h2>App</h2>
      <button onClick={() => setState(prevState => prevState+1)}>Click</button>
      <p>App state changed {state} times.</p>
      </div>
    <div className='content'>
      <None />
      <Empty />
      <Used />
      </div>
    </div>
  );
}

export default App;
