"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import chatbotData from "../../sadies_alterations_chatbot_expanded.json";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize with a welcome message
  useEffect(() => {
    const welcomeMessage = "Hello! Welcome to Sadie's Alterations. How can I assist you with your tailoring or alteration needs today?";
    
    setMessages([
      {
        id: "welcome",
        sender: "bot",
        text: welcomeMessage,
        timestamp: new Date(),
      }
    ]);
  }, []);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Math.random().toString(36).substring(2, 9),
      sender: "user",
      text: inputValue,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: currentInput }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch reply");
      }

      const data = await response.json();
      const botMessage: Message = {
        id: Math.random().toString(36).substring(2, 9),
        sender: "bot",
        text: data.reply || "Üzgünüm, şu anda yanıt veremiyorum.",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Error communicating with chat API:", error);
      const errorMessage: Message = {
        id: Math.random().toString(36).substring(2, 9),
        sender: "bot",
        text: "Üzgünüm, bir bağlantı hatası oluştu. Lütfen tekrar deneyin.",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const formatText = (text: string) => {
    // Basic markdown links replacement [Text](Url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      parts.push(
        <a 
          key={match.index} 
          href={match[2]} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#00FF66] hover:underline underline-offset-4 cursor-pointer"
        >
          {match[1]}
        </a>
      );
      lastIndex = linkRegex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    if (parts.length === 0) return text;
    return <>{parts}</>;
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-10 right-10 md:bottom-20 md:right-20 z-[9999999]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 md:w-20 md:h-20 bg-black border border-white/20 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.6)] hover:shadow-[0_0_30px_rgba(34,197,94,0.9)] hover:scale-105 hover:border-[#00FF66] transition-all duration-300 group cursor-pointer"
        >
          <div className="relative w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden">
            <Image 
              src="/asset/favicon.png" 
              alt="Sadies Chatbot" 
              fill 
              className="object-contain"
            />
          </div>
        </button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-28 right-10 md:bottom-44 md:right-20 w-[90vw] sm:w-[400px] h-[600px] max-h-[80vh] bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col z-[9999999] shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#00FF66]/30">
                  <Image 
                    src="/asset/favicon.png" 
                    alt="Sadies" 
                    fill 
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold tracking-wide text-white">SADIES Assistant</h4>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-[10px] text-white/50 uppercase tracking-widest font-light">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/40 hover:text-white/90 transition-colors p-1 rounded-lg cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map(msg => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`flex gap-2 max-w-[80%] ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}>
                    {msg.sender === "bot" && (
                      <div className="relative w-6 h-6 rounded-full overflow-hidden border border-white/10 shrink-0 self-end">
                        <Image 
                          src="/asset/favicon.png" 
                          alt="Sadies" 
                          fill 
                          className="object-contain"
                        />
                      </div>
                    )}
                    <div 
                      className={`p-3 text-sm rounded-2xl whitespace-pre-line leading-relaxed ${
                        msg.sender === "user" 
                          ? "bg-white text-black rounded-tr-none" 
                          : "bg-white/5 text-white/90 border border-white/10 rounded-tl-none"
                      }`}
                    >
                      {formatText(msg.text)}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex gap-2 max-w-[80%] flex-row">
                    <div className="relative w-6 h-6 rounded-full overflow-hidden border border-white/10 shrink-0 self-end">
                      <Image 
                        src="/asset/favicon.png" 
                        alt="Sadies" 
                        fill 
                        className="object-contain"
                      />
                    </div>
                    <div className="p-3 bg-white/5 border border-white/10 rounded-2xl rounded-tl-none flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/10 bg-white/[0.01]">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-1.5 focus-within:border-[#00FF66]/50 transition-colors">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSend();
                  }}
                  placeholder="Type your message here..."
                  className="flex-1 bg-transparent border-none outline-none text-sm text-white py-1.5 placeholder:text-white/30 cursor-none"
                />
                <button
                  onClick={handleSend}
                  className="p-1.5 bg-white hover:bg-[#00FF66] text-black rounded-lg transition-colors cursor-pointer shrink-0"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
