import React, { useEffect } from 'react';
import Board from './components/Board';

import Socket from './functions/Socket';

function App() {

  useEffect(() => {

    Socket.initSockets()
    Socket.emitSocketEvent('find-game')

  }, [])

  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;
