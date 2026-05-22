"use client";

import { useState } from "react";

export default function WeddingForm() {
  const [budget, setBudget] = useState("500000");
  const [guests, setGuests] = useState("400");
  const [location, setLocation] = useState("Gomti Nagar");
  const [theme, setTheme] = useState("Modern Minimalist");

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const generateAIPlan = async () => {
    try {
      setLoading(true);
      setResponse("");

      const prompt = `
You are Sentinel Shaadi AI.

Create a realistic wedding plan for Lucknow.

Details:
- Budget: ${budget} INR
- Guests: ${guests}
- Location: ${location}
- Theme: ${theme}

Give:
- Best venue suggestions
- Catering recommendations
- Decoration ideas
- Approx pricing
- Emergency tips
- Parking suggestions

Focus heavily on Lucknow areas like:
- Gomti Nagar
- Hazratganj
- Indira Nagar

Keep answer realistic and professional.
`;

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: prompt,
        }),
      });

      const data = await res.json();

      setResponse(data.reply);
    } catch (error) {
      setResponse("Error generating AI wedding plan.");
    }

    setLoading(false);
  };

  return (
    <div className="w-full min-h-screen bg-black text-white flex items-center justify-center p-10">
      <div className="w-full max-w-4xl rounded-3xl border border-white/10 bg-zinc-900/60 p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          AI Wedding Planner
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="block mb-2">Budget</label>

            <input
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full p-4 rounded-xl bg-zinc-800 border border-zinc-700"
            />
          </div>

          <div>
            <label className="block mb-2">Guest Count</label>

            <input
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full p-4 rounded-xl bg-zinc-800 border border-zinc-700"
            />
          </div>

          <div>
            <label className="block mb-2">Location</label>

            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-4 rounded-xl bg-zinc-800 border border-zinc-700"
            />
          </div>

          <div>
            <label className="block mb-2">Theme</label>

            <input
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="w-full p-4 rounded-xl bg-zinc-800 border border-zinc-700"
            />
          </div>

        </div>

        <button
          onClick={generateAIPlan}
          className="mt-8 w-full p-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg"
        >
          Generate AI Wedding Plan
        </button>

        {loading && (
          <p className="mt-6 text-cyan-400">
            AI is generating your wedding plan...
          </p>
        )}

        {response && (
          <div className="mt-8 p-6 rounded-2xl bg-zinc-950 border border-cyan-500/20 whitespace-pre-wrap">
            {response}
          </div>
        )}
      </div>
    </div>
  );
}