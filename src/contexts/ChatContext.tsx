import { createContext, useContext, useState, ReactNode } from "react";

interface ChatContextType {
  aiChatOpen: boolean;
  offlineChatOpen: boolean;
  setAiChatOpen: (open: boolean) => void;
  setOfflineChatOpen: (open: boolean) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [aiChatOpen, setAiChatOpenState] = useState(false);
  const [offlineChatOpen, setOfflineChatOpenState] = useState(false);

  const setAiChatOpen = (open: boolean) => {
    setAiChatOpenState(open);
    if (open) setOfflineChatOpenState(false);
  };

  const setOfflineChatOpen = (open: boolean) => {
    setOfflineChatOpenState(open);
    if (open) setAiChatOpenState(false);
  };

  return (
    <ChatContext.Provider value={{
      aiChatOpen,
      offlineChatOpen,
      setAiChatOpen,
      setOfflineChatOpen
    }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};