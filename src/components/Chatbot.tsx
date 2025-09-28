import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const botResponses = {
  greeting: "Hey! Hi sir, how are you? Welcome to Dadipelli Ganesh's portfolio. Ask me anything about my background, projects, or experience!",
  
  background: "Dadipelli Ganesh is a Machine Learning Engineer and Full Stack Developer with 2+ years of experience. He specializes in AI-powered solutions, has worked on 15+ projects, and is proficient in 10+ technologies including Python, React.js, FastAPI, and Azure.",
  
  experience: "Ganesh has worked at TRiDE Innovative Technologies as a Machine Learning Intern (March 2025 - Present) where he built similarity search models and RAG chatbots. He also worked at Path Creators, Sri Vaikunta Technologies as a Full Stack Developer developing landmark recognition applications.",
  
  projects: "Some featured projects include: 1) Intelligent Document Processor - AI-powered OCR system, 2) Consciousness Bandwidth Optimization - cognitive load analysis system, and 3) Quantum Emotional Resonance Network - emotional connection platform. Each project showcases innovative use of ML and full-stack technologies.",
  
  skills: "Technical skills include Python (90%), React.js (85%), Machine Learning (88%), FastAPI (80%), PostgreSQL (75%), and Azure (70%). Ganesh also has experience with LangChain, Transformers, OpenCV, and modern web technologies.",
  
  education: "Ganesh is pursuing B.Tech in Computer Science with a CGPA of 7.91. He scored 96.2% in Intermediate and 98% in SSC. He also holds certifications in Microsoft Azure AZ-900, Full Stack Development, and Machine Learning.",
  
  contact: "You can reach Ganesh at ganeshdadipelli@gmail.com or +91 9392450425. He's located in Secunderabad, Telangana, India. You can also connect on GitHub, LinkedIn, or LeetCode.",
  
  default: "That's an interesting question! You can ask me about Ganesh's background, experience, projects, skills, education, or how to contact him. I'm here to help you learn more about his professional journey!"
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Send initial greeting
      setTimeout(() => {
        addBotMessage(botResponses.greeting);
      }, 500);
    }
  }, [isOpen]);

  const addBotMessage = (text: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        text,
        isBot: true,
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, 1000);
  };

  const addUserMessage = (text: string) => {
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date()
    }]);
  };

  const getBotResponse = (userInput: string) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('background') || input.includes('about') || input.includes('who')) {
      return botResponses.background;
    }
    if (input.includes('experience') || input.includes('work') || input.includes('job')) {
      return botResponses.experience;
    }
    if (input.includes('project') || input.includes('work') || input.includes('portfolio')) {
      return botResponses.projects;
    }
    if (input.includes('skill') || input.includes('technical') || input.includes('technology')) {
      return botResponses.skills;
    }
    if (input.includes('education') || input.includes('study') || input.includes('degree')) {
      return botResponses.education;
    }
    if (input.includes('contact') || input.includes('reach') || input.includes('email') || input.includes('phone')) {
      return botResponses.contact;
    }
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return "Hello! I'm here to help you learn about Dadipelli Ganesh. What would you like to know?";
    }
    
    return botResponses.default;
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    
    addUserMessage(inputText);
    const response = getBotResponse(inputText);
    
    setTimeout(() => {
      addBotMessage(response);
    }, 1500);
    
    setInputText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chatbot Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 bg-white text-black rounded-full shadow-lg hover:scale-110 transition-all duration-300 pulse-glow ${
          isOpen ? 'hidden' : 'block'
        }`}
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-card-bg border border-border-color rounded-xl shadow-glow flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border-color">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-full">
                  <Bot size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Portfolio Assistant</h3>
                  <p className="text-xs text-text-secondary">Ask me anything!</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X size={20} className="text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  {message.isBot && (
                    <div className="p-2 bg-white/10 rounded-full flex-shrink-0 self-end">
                      <Bot size={16} className="text-white" />
                    </div>
                  )}
                  
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      message.isBot
                        ? 'bg-white/10 text-white'
                        : 'bg-white text-black'
                    }`}
                  >
                    {message.text}
                  </div>
                  
                  {!message.isBot && (
                    <div className="p-2 bg-white rounded-full flex-shrink-0 self-end">
                      <User size={16} className="text-black" />
                    </div>
                  )}
                </motion.div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-3"
                >
                  <div className="p-2 bg-white/10 rounded-full">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div className="bg-white/10 text-white p-3 rounded-lg">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '200ms' }} />
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '400ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border-color">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 bg-secondary-bg border border-border-color rounded-lg text-white placeholder-text-secondary text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim()}
                  className="p-2 bg-white text-black rounded-lg hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}