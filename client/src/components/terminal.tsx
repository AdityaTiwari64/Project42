import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, Minus, Square } from "lucide-react";

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "Welcome to AdityaOS v2.0",
    "Type 'help' to see available commands.",
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let response = "";

    switch (trimmedCmd) {
      case "help":
        response = "Available commands: about, skills, projects, contact, clear, exit";
        break;
      case "about":
        response = "Aditya Anil Tiwari | Full-Stack Developer & AI Enthusiast | Based in Maharashtra, India.";
        break;
      case "skills":
        response = "Languages: Python, JS, C++ | AI/ML: PyTorch, LangChain | Web: React, Next.js, Node";
        break;
      case "projects":
        response = "1. Agentic AI System\n2. Vegetation Health Mapping\n3. Cisco Community Website";
        break;
      case "contact":
        response = "Email: adiaarushtiwari@gmail.com | LinkedIn: linkedin.com/in/aditya-tiwari";
        break;
      case "clear":
        setHistory([]);
        return;
      case "exit":
        setIsOpen(false);
        return;
      default:
        response = `Command not found: ${trimmedCmd}. Type 'help' for options.`;
    }

    setHistory((prev) => [...prev, `> ${cmd}`, response]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-50 p-4 bg-black border border-primary text-primary rounded-full hover:bg-primary/10 transition-all shadow-[0_0_15px_rgba(0,255,0,0.3)] ${isOpen ? 'hidden' : 'block'}`}
      >
        <TerminalIcon size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-8 right-8 z-50 w-[90vw] md:w-[600px] h-[400px] bg-black/90 backdrop-blur-md border border-primary shadow-[0_0_30px_rgba(0,255,0,0.2)] flex flex-col font-mono text-sm overflow-hidden rounded-lg"
          >
            {/* Title Bar */}
            <div className="flex items-center justify-between px-4 py-2 bg-primary/10 border-b border-primary/30">
              <span className="text-primary font-bold flex items-center gap-2">
                <TerminalIcon size={14} /> aditya@portfolio:~
              </span>
              <div className="flex items-center gap-2">
                <button onClick={() => setIsOpen(false)} className="hover:text-primary"><Minus size={14} /></button>
                <button onClick={() => setIsOpen(false)} className="hover:text-primary"><Square size={12} /></button>
                <button onClick={() => setIsOpen(false)} className="hover:text-destructive"><X size={14} /></button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-4 overflow-y-auto text-primary space-y-2 custom-scrollbar" onClick={() => inputRef.current?.focus()}>
              {history.map((line, i) => (
                <div key={i} className="whitespace-pre-wrap">{line}</div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input Line */}
            <div className="p-4 pt-0 flex items-center gap-2 text-primary">
              <span className="text-accent">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent border-none outline-none text-primary placeholder-primary/50"
                autoFocus
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
