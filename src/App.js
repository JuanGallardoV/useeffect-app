//? Juan Gallardo 16-03-2022
import React, { useState } from 'react';
import FetchCard from './FetchCard';
import Lifecycle from './Lifecycle';
import ResizeApp from './ResizeApp';

function App() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  return (
    <div>
      <button onClick={() => setShow1(!show1)}>
        Show/Hide
      </button>
      { show1 && <Lifecycle/> }
      <FetchCard/>
      <button onClick={() => setShow2(!show2)}>
        Show/Hide
      </button>
      { show2 && <ResizeApp/> }
    </div>
  );
}

export default App;
