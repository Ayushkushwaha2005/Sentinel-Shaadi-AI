"use client";

import { useState } from "react";

type Message = {
  role: string;
  text: string;
};

export default function AIRecommendations() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input) return;

    const userMessage = {
      role: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: input,
        }),
      });

      const data = await res.json();

      const botMessage = {
        role: "bot",
        text: data.reply,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const botMessage = {
        role: "bot",
        text: "Error connecting AI.",
      };

      setMessages((prev) => [...prev, botMessage]);
    }

    setInput("");
    setLoading(false);
  };

  return (
    <div className="p-6 rounded-2xl bg-black/40 border border-white/10 space-y-4">
      <h2 className="text-2xl font-bold text-white">
        AI Wedding Assistant
      </h2>

      <div className="space-y-2 max-h-[300px] overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-xl ${
              msg.role === "user"
                ? "bg-blue-600 text-white"
                : "bg-zinc-800 text-zinc-100"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about Lucknow wedding planning..."
          className="flex-1 p-3 rounded-xl bg-zinc-900 text-white border border-zinc-700"
        />

        <button
          onClick={sendMessage}
          className="px-5 py-3 rounded-xl bg-purple-600 text-white"
        >
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
}