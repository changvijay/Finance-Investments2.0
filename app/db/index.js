const express  =  require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const chat_info = require('./models/chat_info');
const bodyParser = require('body-parser');
// express 
const app = express();
// change the formate 
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// connection for database
try {
    mongoose.connect('mongodb://127.0.0.1:27017/')
    console.log("db connected") 
} catch (error) {
    console.log("db connected",error) 
}

app.get("/chat", (req,res) => {
    chat_info.find({})
    .then(chats => res.json(chats))
    .catch(err => console.log(err))
})


app.post("/message",(req,res)=>{
    chat_info.create({name: req.body.name, content: req.body.content, time : req.body.time, userId: req.body.userid})
    .then(state => res.json(state))
    .catch(err => console.log(err))
})
app.put('/message/:id', async (req, res) => {
    try {
      const messageId = req.params.id;
      const { content, time } = req.body;
  
      const message = await chat_info.findByIdAndUpdate(
        messageId,
        { content, time },
        { new: true } // Return the updated message
      );
  
      if (!message) {
        return res.status(404).json({ error: 'Message not found' });
      }
  
      res.json(message);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Delete a message
  app.delete('/delete/:id', async (req, res) => {
    try {
      const messageId = req.params.id;
      console.log('Deleting message with ID:', messageId);
  
      const deletedMessage = await chat_info.findByIdAndDelete(messageId);
  
      if (!deletedMessage) {
        return res.status(404).json({ error: 'Message not found' });
      }
  
      console.log('Deleted message:', deletedMessage);
      res.json(deletedMessage);
    } catch (error) {
      console.error('Error deleting message:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  


app.listen(3001,()=>{
    console.log("running");
});