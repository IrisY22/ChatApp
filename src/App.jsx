import './App.css';
import SendMsg from './cmps/SendMsg';

import io from 'socket.io-client';
const socket = io.connect('http://localhost:3001');

function App() {

  const sendMessage = () => {
    // socket.emit
  };

  return (
    <div className="App">
      <SendMsg onSendMsg={sendMessage} />
    </div >
  );
}

export default App;
