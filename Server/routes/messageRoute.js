const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const MessageModel = require("../models/messageModel");

// POST request to send a message
router.post("/send-message", authMiddleware, async (req, res) => {
  try {
   
    const { senderId, receiverId, content } = req.body;

 
    const newMessage = new MessageModel({
      senderId,
      receiverId,
      content,
    });

    // Save the message to the database
    await newMessage.save();

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: newMessage,
    });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
});

// Add more routes for retrieving, updating, or deleting messages if needed

module.exports = router;
