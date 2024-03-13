// import backgroungImg from './assets/backgroundImage.jpeg'
import './App.css';
import SendMsg from './cmps/SendMsg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-regular-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'

import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import ModalClose from '@mui/joy/ModalClose';



import io from 'socket.io-client';
import { useState } from 'react';
import RenderChat from './cmps/RenderChat';
import AllMembers from './cmps/AllMembers';
import UserProfile from './cmps/UserProfile';
const socket = io.connect('http://localhost:3001');

function App() {
  const [openAllMembers, setOpenAllMembers] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const [msg, setMsg] = useState('');
  const [msgs, setMsgs] = useState([]);

  const sendMessage = () => {
    // socket.emit
    if (!msg) return
    setMsgs([...msgs, msg]);
    setMsg('')
  };

  return (
    <div className="App">
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          size="lg"
          variant="plain"
          color="neutral"
          onClick={() => setOpenUser(true)}
        ><FontAwesomeIcon icon={faUser} />
        </Button>
        <Drawer open={openUser} anchor="left" onClose={() => setOpenUser(false)}>
          <ModalClose />
          <UserProfile />
        </Drawer>
        <Button
          size="lg"
          variant="plain"
          color="neutral"
          onClick={() => setOpenAllMembers(true)}
        ><FontAwesomeIcon icon={faComments} />
        </Button>
        <Drawer open={openAllMembers} anchor="right" onClose={() => setOpenAllMembers(false)}>
          <ModalClose />
          <AllMembers msgs={msgs} />
        </Drawer>
      </Box>
      <RenderChat msgs={msgs} />
      <SendMsg onSendMsg={sendMessage} setMsg={setMsg} msg={msg} />
    </div >
  );
}

export default App;
