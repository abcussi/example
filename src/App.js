
import { useEffect, useState } from 'react';
import './App.css';
import { runner, runnerAsync } from './util';
import WorkerBuilder from './worker-builder';
import  Worker from "./worker";
function App() {
  const [data, setData] = useState()
  let instance = new WorkerBuilder(Worker);

  useEffect(() => {
    instance.onmessage = (message) => {
      if (message) {
        console.log(message.data)
        setData(message.data);
      }
    };
  }, [])
  

  return (
    <div style={{
      backgroundColor: `${data === 'loading' ? 'orange': 'transparent'}`
    }}>
      <button onClick={()=> {
        console.log("sigue corriendo :D")
      }}>
        presiona para saber si la pagina sigue viva ?
      </button>
      <br/>
      <button onClick={ async ()=> {
        setData('loading')
        instance.postMessage(100000000)
      }}>
        web worker
      </button>
      <br/>
      <button onClick={()=> {
        setData('loading')
        setData(runner(100000000))
      }}>
        Sync on main thread  
      </button>
      <br/>
      <button onClick={async ()=> {
        setData('loading')
        setData(await runnerAsync(100000000))
      }}>
        Async on main thread  
      </button>
      <br/>
      <span>{data}</span>
    </div>
  );
}

export default App;
