import React, { useState, useRef, useEffect } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  Calendar,
  Phone,
  Copy,
  Check,
  RotateCcw,
  Loader2,
  ChevronDown
} from 'lucide-react';
import { BARBER_CONTACT } from '../data/barberData';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

interface AiChatProps {
  currentLang: Language;
  onOpenBooking: () => void;
  isOpenExternal?: boolean;
  onCloseExternal?: () => void;
}

export const AiChat: React.FC<AiChatProps> = ({
  currentLang,
  onOpenBooking,
}) => {
  const t = TRANSLATIONS[currentLang];
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedTag, setCopiedTag] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const initialWelcomeMsg = t.aiChat.welcomeMsg;

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: initialWelcomeMsg,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  // Update welcome message if language changes and chat is untouched
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].id === 'welcome') {
        return [
          {
            id: 'welcome',
            role: 'assistant',
            content: t.aiChat.welcomeMsg,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ];
      }
      return prev;
    });
  }, [currentLang, t.aiChat.welcomeMsg]);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      inputRef.current?.focus();
    }
  }, [isOpen, messages]);

  const handleCopyTag = () => {
    navigator.clipboard.writeText(BARBER_CONTACT.cashAppTag);
    setCopiedTag(true);
    setTimeout(() => setCopiedTag(false), 2000);
  };

  const handleSend = async (userText?: string) => {
    const textToSend = (userText || input).trim();
    if (!textToSend || loading) return;

    const userMessage: Message = {
      id: `u-${Date.now()}`,
      role: 'user',
      content: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const historyToSend = [...messages, userMessage].map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: historyToSend,
          language: currentLang,
        }),
      });

      if (!res.ok) {
        throw new Error('Server returned error');
      }

      const data = await res.json();
      const assistantMessage: Message = {
        id: `a-${Date.now()}`,
        role: 'assistant',
        content: data.reply || data.error || 'I am ready to help with your haircut inquiry!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error('Chat error:', err);
      const fallbackMessage: Message = {
        id: `err-${Date.now()}`,
        role: 'assistant',
        content:
          "Matt specializes in $25 precision haircuts, $15 beard trimming & razor shave, and $25 Chicago house calls (with $25 deposit via Cash App $Muahz26). You can book online right now or call/text Matt directly at +1 (312) 385-9229!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClear = () => {
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        content: t.aiChat.welcomeMsg,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  const quickPrompts = [
    t.aiChat.promptPricing,
    t.aiChat.promptHouseCall,
    t.aiChat.promptDeposit,
    t.aiChat.promptSpecialty,
  ];

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-20 lg:bottom-6 right-4 sm:right-6 z-40">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2.5 px-4 py-3 bg-amber-400 hover:bg-amber-300 text-neutral-950 rounded-2xl shadow-xl shadow-amber-400/20 font-semibold text-xs sm:text-sm transition-all duration-200 cursor-pointer active:scale-95 group border border-amber-300/40"
            aria-label="Open AI Barber Chat"
          >
            <div className="relative">
              <Sparkles className="w-4 h-4 text-neutral-950 animate-pulse" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-600 rounded-full" />
            </div>
            <span>{t.aiChat.floatingButton}</span>
          </button>
        )}
      </div>

      {/* Slide-over / Modal Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 lg:bottom-6 right-3 sm:right-6 z-50 w-[calc(100vw-24px)] sm:w-[420px] h-[550px] max-h-[85vh] bg-neutral-900 border border-neutral-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4">
          {/* Header */}
          <div className="px-4 py-3.5 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-neutral-100 font-display flex items-center gap-1.5">
                  <span>{t.aiChat.windowTitle}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                </h3>
                <div className="text-[11px] text-neutral-400 font-mono">
                  {t.aiChat.status}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleClear}
                title={t.aiChat.clearChat}
                className="p-1.5 text-neutral-400 hover:text-neutral-200 rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Action Banner inside Chat */}
          <div className="px-3 py-2 bg-neutral-950/80 border-b border-neutral-800/80 flex items-center justify-between text-[11px] font-mono">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenBooking();
              }}
              className="text-amber-400 hover:underline flex items-center gap-1 font-semibold cursor-pointer"
            >
              <Calendar className="w-3 h-3" />
              <span>{t.aiChat.bookNowAction}</span>
            </button>
            <a
              href={`tel:${BARBER_CONTACT.phoneRaw}`}
              className="text-neutral-400 hover:text-white flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>(312) 385-9229</span>
            </a>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs">
            {messages.map((m) => {
              const isAssistant = m.role === 'assistant';
              return (
                <div
                  key={m.id}
                  className={`flex gap-2.5 ${isAssistant ? 'justify-start' : 'justify-end'}`}
                >
                  {isAssistant && (
                    <div className="w-6 h-6 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center shrink-0 mt-0.5 text-amber-400">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] rounded-2xl p-3 leading-relaxed ${
                      isAssistant
                        ? 'bg-neutral-950 border border-neutral-800 text-neutral-200'
                        : 'bg-amber-400 text-neutral-950 font-medium ml-auto'
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{m.content}</div>

                    {/* Helpful inline action chips if relevant */}
                    {isAssistant && m.content.includes('$Muahz26') && (
                      <div className="mt-2.5 pt-2 border-t border-neutral-800 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={handleCopyTag}
                          className="px-2 py-1 rounded bg-neutral-900 border border-neutral-700 hover:border-neutral-500 text-[11px] font-mono text-amber-400 flex items-center gap-1 transition-colors cursor-pointer"
                        >
                          {copiedTag ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                          <span>{copiedTag ? 'Copied!' : 'Copy $Muahz26'}</span>
                        </button>
                      </div>
                    )}

                    <div
                      className={`text-[9px] mt-1 text-right font-mono ${
                        isAssistant ? 'text-neutral-500' : 'text-neutral-800'
                      }`}
                    >
                      {m.timestamp}
                    </div>
                  </div>

                  {!isAssistant && (
                    <div className="w-6 h-6 rounded-lg bg-amber-400/20 flex items-center justify-center shrink-0 mt-0.5 text-amber-400">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}

            {loading && (
              <div className="flex gap-2.5 items-center text-xs text-neutral-400">
                <div className="w-6 h-6 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center shrink-0 text-amber-400">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="p-3 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center gap-2 text-neutral-400">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-amber-400" />
                  <span>Thinking...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Suggestions */}
          <div className="px-3 py-2 bg-neutral-950/60 border-t border-neutral-800">
            <div className="text-[10px] font-mono text-neutral-500 mb-1.5 uppercase tracking-wider">
              {t.aiChat.quickPromptsTitle}
            </div>
            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSend(prompt)}
                  disabled={loading}
                  className="px-2.5 py-1 text-[11px] rounded-lg bg-neutral-800/80 hover:bg-neutral-800 border border-neutral-700/80 text-neutral-300 hover:text-white whitespace-nowrap cursor-pointer transition-colors shrink-0"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Input Box */}
          <div className="p-3 bg-neutral-950 border-t border-neutral-800">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                placeholder={t.aiChat.inputPlaceholder}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={loading}
                className="flex-1 px-3 py-2 text-xs bg-neutral-900 border border-neutral-700 focus:border-amber-400 rounded-xl text-neutral-100 placeholder-neutral-500 focus:outline-none transition-colors"
              />
              <button
                type="button"
                onClick={() => handleSend()}
                disabled={!input.trim() || loading}
                className="p-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 disabled:opacity-50 disabled:hover:bg-amber-400 text-neutral-950 font-bold transition-all cursor-pointer shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
