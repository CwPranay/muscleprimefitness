
"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, Bot, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { inquiryAssistantChatbot } from "@/ai/flows/inquiry-assistant-chatbot";
import { cn } from "@/lib/utils";

type Message = {
  role: "bot" | "user";
  text: string;
  action?: { label: string; link: string };
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hi! I'm your Muscle Prime assistant. How can I help you today? I can answer questions about memberships, training, or how to join!",
    },
  ]);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setLoading(true);

    try {
      const response = await inquiryAssistantChatbot({ message: userMsg });
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: response.response,
          action: response.suggestedAction ? { label: response.suggestedAction, link: response.suggestedActionLink || "#" } : undefined,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Sorry, I'm having a bit of trouble right now. Please call us at 9100462121 for quick help!" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 md:right-8 z-40 w-14 h-14 rounded-full shadow-2xl bg-primary hover:bg-primary/90 transition-transform hover:scale-110"
      >
        {isOpen ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-40 right-6 md:right-8 z-50 w-[350px] md:w-[400px] h-[500px] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-8">
          {/* Header */}
          <div className="bg-primary p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-full">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">Muscle Prime Assistant</div>
                <div className="text-white/60 text-xs">Always Active</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4 bg-background/50">
            <div className="space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={cn("flex flex-col", m.role === "user" ? "items-end" : "items-start")}>
                  <div
                    className={cn(
                      "max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed",
                      m.role === "user" ? "bg-primary text-white rounded-tr-none" : "bg-muted text-foreground rounded-tl-none"
                    )}
                  >
                    {m.text}
                    {m.action && (
                      <div className="mt-3">
                        <Button asChild size="sm" className="bg-white text-primary hover:bg-white/90 font-bold h-8">
                          <a href={m.action.link} target="_blank" rel="noopener noreferrer">
                            {m.action.label}
                          </a>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex items-center gap-2 text-muted-foreground text-xs italic">
                  <Loader2 className="w-3 h-3 animate-spin" /> Assistant is thinking...
                </div>
              )}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 bg-card border-t border-border flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="bg-muted/50 border-none h-10 focus-visible:ring-1 focus-visible:ring-primary"
            />
            <Button type="submit" disabled={loading} size="icon" className="shrink-0 bg-primary h-10 w-10">
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
