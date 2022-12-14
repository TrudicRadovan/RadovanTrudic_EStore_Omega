import React, { useEffect, useState } from 'react';
import './Chat.css';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import { Avatar, Box, Button, Card, Grid, Stack, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import UserContext from '../../contexts/UserContext';
import MessageDTO from '../../dto/MessageDTO';

const client = new W3CWebSocket('ws://127.0.0.1:8000');

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(new Array<MessageDTO>());

  const { setState, state } = React.useContext<{ setState: any; state: any }>(UserContext);

  const onButtonClicked = (value: any) => {
    console.log(messages);
    client.send(
      JSON.stringify({
        type: 'message',
        msg: value,
        user: state,
        timestamp: Date.now().toString(),
      })
    );
    setMessage('');
  };

  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };

    client.onmessage = message => {
      const dataFromServer = JSON.parse(message.data as string);
      console.log('Got Reply! ', dataFromServer);
      if (dataFromServer.type === 'message') {
        setMessages(prev => [
          ...prev,
          {
            timestamp: dataFromServer.timestamp,
            user: dataFromServer.user,
            msg: dataFromServer.msg,
            type: dataFromServer.type,
          },
        ]);
        /*console.log(messages);
        setMessages([
          ...messages,
          {
            timestamp: dataFromServer.timestamp,
            user: dataFromServer.user,
            msg: dataFromServer.msg,
            type: dataFromServer.type,
          },
        ]);*/
      }
    };
  }, []);

  const handleKeyboard = (e: any) => {
    if (e.code === 'Enter') {
      onButtonClicked(message);
    }
  };

  return (
    <div className="chat-room">
      <h1>Chat</h1>
      <Stack spacing={0} justifyContent="center" alignItems="center" width={300} height={300}>
        <Stack height="200px" sx={{ overflowY: 'auto' }} width="100%" className="chat-scroll" paddingBottom={2}>
          {messages.map(message => (
            <Grid
              item
              key={message.timestamp}
              container
              direction="row"
              justifyContent={message.user.id === state.id ? 'flex-end' : 'flex-start'}
              alignItems="center"
              paddingLeft={1}
              paddingRight={1}
            >
              {message.user.id === state.id && (
                <>
                  <Grid item>
                    <Card sx={{ width: 150, minHeight: 70, margin: '16px 4px 0 4px' }}>
                      <Typography
                        gutterBottom
                        variant="body1"
                        component="div"
                        textAlign="right"
                        padding={1}
                        sx={{ wordBreak: 'break-word' }}
                      >
                        {message.msg}
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid item>
                    <Avatar
                      style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
                      alt={message.user.firstName + ' ' + message.user.lastName}
                      src={message.user.image}
                    />
                  </Grid>
                </>
              )}

              {message.user.id !== state.id && (
                <>
                  <Grid item>
                    <Avatar
                      style={{ color: '#00bbff', backgroundColor: '#e8f9ff' }}
                      alt={message.user.firstName + ' ' + message.user.lastName}
                      src={message.user.image}
                    />
                  </Grid>
                  <Grid item>
                    <Card
                      sx={{
                        width: 150,
                        minHeight: 70,
                        margin: '16px 4px 0 4px',
                        backgroundColor: '#e8f9ff',
                      }}
                    >
                      <Typography
                        gutterBottom
                        variant="body1"
                        component="div"
                        textAlign="left"
                        padding={1}
                        sx={{ wordBreak: 'break-word' }}
                      >
                        {message.msg}
                      </Typography>
                    </Card>
                  </Grid>
                </>
              )}
            </Grid>
          ))}
        </Stack>
        <Grid item container spacing={1} direction="row" justifyContent="center" alignItems="center">
          <Grid item>
            <TextField
              id="chat-text-field"
              placeholder="Type here..."
              value={message}
              onKeyUp={handleKeyboard}
              sx={{
                width: 190,
                height: 50,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderRadius: `25px`,
                  },
                  input: {
                    '&:-webkit-autofill': {
                      borderRadius: '25px',
                    },
                  },
                },
              }}
              onChange={e => setMessage(e.target.value)}
            />
          </Grid>
          <Grid item>
            <Button
              id="chat-button"
              variant="contained"
              sx={{ height: 50, borderRadius: `25px` }}
              endIcon={<SendIcon />}
              onClick={() => onButtonClicked(message)}
              disabled={message === ''}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </div>
  );
};

export default Chat;
