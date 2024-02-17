const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
    {
        name: String,
        content: String,
        time:{
            type:Date
        },
        userId : String
    }
)


const chat_info = mongoose.model("chat_info",chatSchema);

module.exports = chat_info;