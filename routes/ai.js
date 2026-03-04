const express = require("express");
const router = express.Router();
const axios = require("axios");

// POST /chat
router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    // ✅ Basic validation
    if (!message || typeof message !== "string") {
      return res.status(400).json({
        error: "Message is required and must be a string."
      });
    }

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "arcee-ai/trinity-large-preview:free",

        messages: [
          {
            role: "system",
            content: "You are a helpful design assistant for modern loft interior queries."
          },
          {
            role: "user",
            content: message
          }
        ],

        temperature: 0.7,
        max_tokens: 500
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": process.env.BASE_URL || "http://localhost:3000",
          "X-Title": "Modern Loft AI Assistant"
        },
        timeout: 15000 // 15 sec safety timeout
      }
    );

    const aiReply =
      response.data?.choices?.[0]?.message?.content || 
      "Sorry, I couldn't generate a response.";

    return res.status(200).json({ reply: aiReply });

  } catch (err) {
    console.error("OPENROUTER ERROR:", err.response?.data || err.message);

    return res.status(500).json({
      error: "AI service unavailable. Please try again later."
    });
  }
});

module.exports = router;