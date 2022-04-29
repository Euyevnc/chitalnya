import { useRef } from 'react';

import Default from './layouts/default';
import './App.scss';

import Home from './pages/home';
import { Observer } from './utils/utils';

function App() {
  const scrollLayoutObserver = useRef(new Observer());
  return (
    <div className="App">
      <Default scrollCallback={scrollLayoutObserver.current.broadcast}>
        <Home scrollObserver={scrollLayoutObserver.current} />
      </Default>
    </div>
  );
}

export default App;
