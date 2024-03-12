import './App.css';
import SendMsg from './cmps/SendMsg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faComments } from '@fortawesome/free-regular-svg-icons'

import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import ModalClose from '@mui/joy/ModalClose';



import io from 'socket.io-client';
import { useState } from 'react';
import AllChats from './cmps/AllChats';
const socket = io.connect('http://localhost:3001');

function App() {
  const [open, setOpen] = useState(false)

  const sendMessage = () => {
    // socket.emit
  };

  return (
    <div className="App">
      <Box sx={{ display: 'flex', justifyContent: 'end' }}>
        <Button
          size="lg"
          variant="plain"
          color="neutral"
          onClick={() => setOpen(true)}
        ><FontAwesomeIcon icon={faComments} /></Button>
        <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
          <ModalClose />
          <AllChats />
        </Drawer>
      </Box>

      <SendMsg onSendMsg={sendMessage} />
    </div >
  );
}

export default App;
