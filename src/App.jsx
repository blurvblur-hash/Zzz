import { useState, useEffect } from "react";
import dailyMessages from "./dailyMessages_2026.json";

export default function App() {
  const [todayMessage, setTodayMessage] = useState("加载中...");
  
  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${yyyy}-${mm}-${dd}`;
    const message = dailyMessages[formattedDate] || "今天没有信纸内容。";
    setTodayMessage(message);
  }, []);

  return (
    <div className="min-h-screen bg-white text-center p-4 flex items-center justify-center">
      <div className="max-w-md">
        <h1 className="text-2xl font-bold mb-4">🎀 Salah 的每日信纸 🎀</h1>
        <p className="text-lg">{todayMessage}</p>
      </div>
    </div>
  );
}