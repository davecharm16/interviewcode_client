import './App.css'
import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import Button from './component/Button';

function App() {
  const [count, setCount] = useState(0);
  const socket = io('http://localhost:5000', { transports: ['websocket', 'polling'] })

  useEffect(() => {
    socket.on('updateCounter', (updatedCount) => {
      setCount(updatedCount)
    });
  }, []);

  const incrementCounter = () => {
    socket.emit('increment');
  }

  return (
    <div className="App">
      <h1>Counter {count}</h1>
      <Button onPress={() => incrementCounter()} />
    </div>
  );
}

export default App;
