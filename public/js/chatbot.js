console.log("Chatbot loaded");

const btn = document.getElementById("chatbot-btn");
const panel = document.getElementById("chatbot-panel");
const closeBtn = document.getElementById("close-chat");
const sendBtn = document.getElementById("send-btn");
const input = document.getElementById("chat-input");
const messages = document.getElementById("chat-messages");

// open chat
btn.addEventListener("click", () => {
  panel.style.display = "flex";
});

// close chat
closeBtn.addEventListener("click", () => {
  panel.style.display = "none";
});

// add message bubble
function addMessage(text, className) {
  const msg = document.createElement("div");
  msg.className = className;
  msg.innerText = text;
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}

// send message
sendBtn.addEventListener("click", async () => {
  const userText = input.value.trim();
  if (!userText) return;

  addMessage(userText, "user-msg");
  input.value = "";

  addMessage("Typing...", "bot-msg");

  try {
    const res = await fetch("/ai/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userText }),
    });

    const data = await res.json();

    messages.lastChild.remove(); // remove typing
    addMessage(data.reply, "bot-msg");
  } catch (error) {
    messages.lastChild.remove();
    addMessage("Error connecting AI", "bot-msg");
  }
});