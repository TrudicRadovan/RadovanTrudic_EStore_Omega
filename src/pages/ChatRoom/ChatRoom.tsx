import React, { useEffect, useState } from 'react';
import './ChatRoom.css';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import { Avatar, Button, Card, Grid, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import UserContext from '../../contexts/UserContext';

const client = new W3CWebSocket('ws://127.0.0.1:8000');

const ChatRoom = () => {
  const [message, setMessage] = useState('');
  const [messageCompleted, setMessageCompleted] = useState('');
  const [messages, setMessages] = useState(new Array<string>());

  const { setState, state } = React.useContext<{ setState: any; state: any }>(UserContext);

  const onButtonClicked = (value: any) => {
    client.send(
      JSON.stringify({
        type: 'message',
        msg: value,
        user: state,
      })
    );
    setMessageCompleted(message);
    setMessage('');
  };

  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
  }, []);

  useEffect(() => {
    client.onmessage = message => {
      const dataFromServer = JSON.parse(message.data as string);
      console.log('Got Reply! ', dataFromServer);
      if (dataFromServer.type === 'message') {
        const newMessages = [...messages, dataFromServer.msg];
        setMessages(newMessages);
      }
    };
  }, [messageCompleted]);

  return (
    <div className="chat-room">
      <h1>Chat Room</h1>
      <div>
        <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: 50 }}>
          <Grid container spacing={3} direction="row" justifyContent="center" alignItems="center">
            {messages.map(message => (
              <Grid key={message} container spacing={3} direction="row" justifyContent="center" alignItems="center">
                <Grid item>
                  <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{'JH'}</Avatar>
                </Grid>
                <Grid item>
                  <Card sx={{ width: 300, minHeight: 70, margin: '16px 4px 0 4px' }}>
                    <Typography
                      gutterBottom
                      variant="body1"
                      component="div"
                      textAlign="left"
                      padding={1}
                      sx={{ wordBreak: 'break-word' }}
                    >
                      {message}
                    </Typography>
                  </Card>
                </Grid>
              </Grid>
            ))}
            <Grid item container spacing={1} direction="row" justifyContent="center" alignItems="center">
              <Grid item>
                <TextField
                  placeholder="Input message and send"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  sx={{ height: 55 }}
                  endIcon={<SendIcon />}
                  onClick={() => onButtonClicked(message)}
                >
                  Send
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
