import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Home from '../navbar';
import Auth0ProviderWithHistory from '../Auth0ProviderWithHistory';
import { useAuth0 } from "@auth0/auth0-react";
import '../css/chatbox.css'



function Chatbox() {
  const allRef = useRef();
  const [content, setChat] = useState('');
  const navigate = useNavigate();
  const [chats, setMessage] = useState([]);
  const [editingMessageId, setEditingMessageId] = useState(null);
  const { user, isAuthenticated } = useAuth0();

  const submit = async (e) => {
    e.preventDefault();

    try {
      await waitForUserSubAssignment();
      const name = user.name
      const userid = user.sub
      const time = Date.now();
      const result = await axios.post('http://localhost:3001/message', { name, content, time, userid });
      navigate('/chat');
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const waitForUserSubAssignment = async () => {
    return new Promise((resolve) => {
      if (user.sub) {
        resolve();
      } else {
        const intervalId = setInterval(() => {
          if (user.sub) {
            clearInterval(intervalId);
            resolve();
          }
        }, 100);
      }
    });
  };





  useEffect(() => {
    axios
      .get('http://localhost:3001/chat')
      .then((result) => setMessage(result.data))
      .catch((err) => console.error(err));
  }, []);

  const startEdit = (messageId) => {
    const messageToEdit = chats.find((message) => message._id === messageId);
    if (messageToEdit) {
      setEditingMessageId(messageId);
      setChat(messageToEdit.content);
    }
  };

  const cancelEdit = () => {
    setEditingMessageId(null);
    setChat('');
  };
  const left = {
    float: "left",
    marginRight: "60%"
  }
  const right = {
    float: "right",
    marginLeft: "60%"
  }
  const handleDelete = (messageId) => {
    axios
      .delete(`http://localhost:3001/delete/${messageId}`)
      .then((result) => {
        console.log(result);
        window.location.reload();
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    // Scroll to the bottom of the container
    if (allRef.current) {
      allRef.current.scrollTop = allRef.current.scrollHeight;
    }
  }, [chats]);
  return (
    <Auth0ProviderWithHistory>
      <Home />
      <div className='chatpage'>
        {isAuthenticated && user ? (
          <div>Welcome, {user.name}!</div>
        ) : (
          <div>Welcome, Guest!</div>
        )}
        <div className='all' id='all' ref={allRef}>
          {chats.map((message) => (
            <div key={message.time} className='singlemessage' >

              {(message.userId === user?.sub) ? (

                <div className='message' style={right}>
                  {message.content}
                  <div>
                    <button className='edit'>
                      <Link to="#" onClick={() => startEdit(message._id)}>
                        edit
                      </Link>
                    </button>

                    <button className='delete'>
                      <Link to="#" onClick={() => handleDelete(message._id)}>
                        delete
                      </Link>
                    </button>
                    <div className='time'>{new Date(message.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>

                  </div>


                </div>




              ) : (

                <div className='message' style={left}>
                  <div className='name'>{message.name}</div><br></br>{message.content}<br></br>
                  <div className='time'>{new Date(message.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>

                </div>

              )
              }

            </div>
          ))}
        </div>
        <div className='down'>
          {editingMessageId ? (
            <form onSubmit={submit}>
              <div>
                {isAuthenticated && user ? (
                  <label>
                    <input className='nameclass' type="text" value={user.name} readOnly />
                    <input type="text" className='messageclass' value={content} onChange={(e) => setChat(e.target.value)} />
                  </label>
                ) : (
                  <div> <h1>login pls</h1>  </div>
                )}
              </div>
              <div>
                <button type="submit">Save</button>
                <button type="button" onClick={cancelEdit}>
                  Cancel
                </button>
              </div>
            </form>
          ) : ( 
            <form onSubmit={submit}>
              <div>
                {isAuthenticated && user ? (
                  <label>
                    <input className='nameclass' type="text" value={user.name} readOnly />
                    <input className='messageclass' type="text" onChange={(e) => setChat(e.target.value)} required />
                    <button>Submit</button>
                  </label>
                ) : (
                  <div><h1>login pls</h1></div>
                )}
              </div>

            </form>
          )}

        </div>
      </div>
    </Auth0ProviderWithHistory>
  );
}

export default Chatbox;
