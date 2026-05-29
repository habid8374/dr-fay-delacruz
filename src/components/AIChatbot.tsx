import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { chatbotResponses, defaultResponse, noMatchResponse, greetings, goodbyes } from "@/data/chatbotResponses";
import { useChat } from "@/contexts/ChatContext";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  followUp?: string[];
}

const AIChatbot = () => {
  const { aiChatOpen, setAiChatOpen } = useChat();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (aiChatOpen && messages.length === 0) {
      addBotMessage(defaultResponse);
    }
  }, [aiChatOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const addBotMessage = (text: string, followUp?: string[]) => {
    const message: Message = {
      id: Date.now().toString(),
      text,
      isBot: true,
      timestamp: new Date(),
      followUp
    };
    setMessages(prev => [...prev, message]);
  };

  const addUserMessage = (text: string) => {
    const message: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, message]);
  };

  const findResponse = (userInput: string): { response: string; followUp?: string[] } => {
    const input = userInput.toLowerCase();
    
    // Check for WhatsApp confirmation
    if (input.includes('si') || input.includes('sí') || input.includes('yes') || input.includes('ok') || input.includes('dale')) {
      setTimeout(() => handleWhatsAppRedirect(), 1000);
      return { response: "¡Perfecto! Te estoy redirigiendo a WhatsApp para que hables con nuestro equipo humano. 📱" };
    }
    
    // Check for greetings
    if (greetings.some(greeting => input.includes(greeting))) {
      return { response: "¡Hola! 👋 Soy el asistente virtual de HALU. ¿En qué puedo ayudarte hoy?" };
    }
    
    // Check for goodbyes
    if (goodbyes.some(goodbye => input.includes(goodbye))) {
      return { response: "¡Gracias por tu interés en HALU! 😊 Si necesitas más información, no dudes en contactarnos por WhatsApp. ¡Hasta pronto!" };
    }
    
    // Find matching response
    for (const response of chatbotResponses) {
      if (response.keywords.some(keyword => input.includes(keyword))) {
        return { response: response.response, followUp: response.followUp };
      }
    }
    
    return { response: noMatchResponse };
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    addUserMessage(inputValue);
    setInputValue("");
    setIsTyping(true);
    
    setTimeout(() => {
      const { response, followUp } = findResponse(inputValue);
      addBotMessage(response, followUp);
      setIsTyping(false);
    }, 1000);
  };

  const handleFollowUpClick = (followUpText: string) => {
    addUserMessage(followUpText);
    setIsTyping(true);
    
    setTimeout(() => {
      const { response, followUp } = findResponse(followUpText);
      addBotMessage(response, followUp);
      setIsTyping(false);
    }, 1000);
  };

  const handleWhatsAppRedirect = () => {
    window.open('https://wa.me/573246868538?text=Hola, vengo del chatbot y necesito ayuda con HALU', '_blank');
  };

  if (!aiChatOpen) {
    return (
      <Button
        onClick={() => setAiChatOpen(true)}
        className="fixed bottom-6 left-4 sm:left-6 z-40 bg-purple-600 hover:bg-purple-700 text-white rounded-full w-14 h-14 shadow-lg"
        aria-label="Abrir chat con IA"
      >
        <Bot className="w-6 h-6" />
      </Button>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 sm:left-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border">
      {/* Header */}
      <div className="bg-purple-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <div className="font-semibold">Asistente HALU</div>
            <div className="text-xs opacity-90">IA • En línea</div>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setAiChatOpen(false)}
          className="text-white hover:bg-purple-500 p-1"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>

      {/* Messages */}
      <div className="h-80 overflow-y-auto p-4 space-y-3">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
            <div className={`max-w-[80%] p-3 rounded-2xl ${
              message.isBot 
                ? 'bg-gray-100 text-gray-800' 
                : 'bg-purple-600 text-white'
            }`}>
              <div className="flex items-start gap-2">
                {message.isBot && <Bot className="w-4 h-4 mt-1 flex-shrink-0" />}
                {!message.isBot && <User className="w-4 h-4 mt-1 flex-shrink-0" />}
                <div className="text-sm">{message.text}</div>
              </div>
              
              {message.followUp && (
                <div className="mt-2 space-y-1">
                  {message.followUp.map((followUp, index) => (
                    <button
                      key={index}
                      onClick={() => handleFollowUpClick(followUp)}
                      className="block w-full text-left text-xs bg-white text-purple-600 px-2 py-1 rounded-lg hover:bg-purple-50 transition-colors"
                    >
                      {followUp}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 p-3 rounded-2xl">
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4" />
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Escribe tu pregunta..."
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1"
          />
          <Button onClick={handleSendMessage} size="sm" className="bg-purple-600 hover:bg-purple-700">
            <Send className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="flex gap-2 mt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleWhatsAppRedirect}
            className="text-xs flex-1"
          >
            Hablar con humano
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => document.querySelector('#demo-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-xs flex-1"
          >
            Demo gratuita
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AIChatbot;