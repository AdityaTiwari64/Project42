import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, Minus, Square } from "lucide-react";

type FileSystem = {
  [key: string]: string | FileSystem;
};

const fileSystem: FileSystem = {
  "about.txt": "Aditya Anil Tiwari\nFull-Stack Developer & AI Enthusiast\nBased in Maharashtra, India.\n\nPassionate about building scalable applications and intelligent AI systems.",
  "skills": {
    "languages.txt": "Python, JavaScript, C++, HTML5, CSS3",
    "ai_ml.txt": "PyTorch, TensorFlow, LangChain, OpenAI API, RAG",
    "web.txt": "React.js, Next.js, Node.js, Express.js, TailwindCSS",
    "cloud.txt": "AWS, Google Cloud, Firebase, Docker",
    "tools.txt": "Git, GitHub, VS Code, Linux/Unix, Jupyter"
  },
  "projects": {
    "agentic_ai.txt": "Agentic AI Automation System\n- Multi-agent workflows using LLMs\n- Top 240/5,743 in NASSCOM Hackathon",
    "vegetation_mapping.txt": "Vegetation Health Mapping\n- NDVI analysis on satellite imagery\n- 92% accuracy in land cover detection",
    "skycrate.txt": "Skycrate | Cloud Storage\n- Robust cloud storage solution\n- Featured at VIT Project Exhibition",
    "cisco_community.txt": "Cisco Community VITB Website\n- Full-stack platform for 500+ students\n- Authentication, events, real-time notifications"
  },
  "contact.md": "Email: adiaarushtiwari@gmail.com\nLinkedIn: linkedin.com/in/aditya-tiwari\nGitHub: github.com/AdityaTiwari64",
  "resume.pdf": "[LINK] Opening resume..."
};

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "AdityaOS v2.0 (tty1)",
    "Login: guest",
    "Password: *",
    "Last login: " + new Date().toUTCString(),
    "",
    "Welcome to Aditya's Interactive Portfolio Terminal.",
    "Type 'help' to see available commands.",
    ""
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState<string[]>([]);
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

  const getCurrentDir = (): FileSystem => {
    let current: any = fileSystem;
    for (const segment of currentPath) {
      if (current[segment] && typeof current[segment] === 'object') {
        current = current[segment];
      } else {
        return {};
      }
    }
    return current;
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;
    
    const parts = trimmedCmd.split(" ");
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);
    
    let response: string = "";

    switch (command) {
      case "help":
        response = `GNU bash, version 5.1.16(1)-release (x86_64-pc-linux-gnu)
These shell commands are defined internally.  Type 'help' to see this list.

Available commands:
  ls [dir]      List directory contents
  cd [dir]      Change the shell working directory
  cat [file]    Concatenate and print files
  clear         Clear the terminal screen
  whoami        Print effective userid
  date          Print the system date and time
  pwd           Print name of current/working directory
  echo [text]   Display a line of text
  exit          Close the terminal session
  open [url]    Open a URL in a new tab`;
        break;
        
      case "ls":
        const dir = getCurrentDir();
        const items = Object.keys(dir).map(key => {
          const isDir = typeof dir[key] === 'object';
          return isDir ? `<span class="text-blue-400 font-bold">${key}/</span>` : key;
        });
        response = items.join("  ");
        break;

      case "cd":
        if (!args[0] || args[0] === "~") {
          setCurrentPath([]);
        } else if (args[0] === "..") {
          setCurrentPath(prev => prev.slice(0, -1));
        } else {
          const current = getCurrentDir();
          if (current[args[0]] && typeof current[args[0]] === 'object') {
            setCurrentPath(prev => [...prev, args[0]]);
          } else if (current[args[0]]) {
            response = `bash: cd: ${args[0]}: Not a directory`;
          } else {
            response = `bash: cd: ${args[0]}: No such file or directory`;
          }
        }
        break;

      case "cat":
        if (!args[0]) {
          response = "usage: cat [file]";
        } else {
          const current = getCurrentDir();
          const content = current[args[0]];
          
          if (content) {
            if (typeof content === 'string') {
              if (args[0] === "resume.pdf") {
                window.open("/attached_assets/resume_Aditya_Anil_Tiwari_1765379185632.pdf", "_blank");
                response = "Opening resume in new tab...";
              } else {
                response = content;
              }
            } else {
              response = `cat: ${args[0]}: Is a directory`;
            }
          } else {
            response = `cat: ${args[0]}: No such file or directory`;
          }
        }
        break;

      case "pwd":
        response = "/" + currentPath.join("/");
        break;

      case "whoami":
        response = "guest";
        break;
        
      case "date":
        response = new Date().toString();
        break;
        
      case "echo":
        response = args.join(" ");
        break;

      case "open":
        if (args[0]) {
            window.open(args[0].startsWith('http') ? args[0] : `https://${args[0]}`, '_blank');
            response = `Opening ${args[0]}...`;
        } else {
            response = "usage: open [url]";
        }
        break;

      case "sudo":
        response = "guest is not in the sudoers file. This incident will be reported.";
        break;

      case "clear":
        setHistory([]);
        return;

      case "exit":
        setIsOpen(false);
        return;

      default:
        response = `bash: ${command}: command not found`;
    }

    const pathString = currentPath.length > 0 ? `/${currentPath.join("/")}` : "~";
    const prompt = `guest@aditya:${pathString}$ ${trimmedCmd}`;
    
    setHistory((prev) => [...prev, prompt, response]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    }
    if (e.key === "ArrowUp") {
      // Future: Implement command history navigation
    }
  };

  const pathString = currentPath.length > 0 ? `/${currentPath.join("/")}` : "~";

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-50 p-4 bg-black border border-primary text-primary rounded-full hover:bg-primary/10 transition-all shadow-[0_0_15px_rgba(0,255,0,0.3)] hover:scale-110 active:scale-95 ${isOpen ? 'hidden' : 'block'}`}
      >
        <TerminalIcon size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-8 right-8 z-50 w-[90vw] md:w-[600px] h-[400px] bg-black/95 backdrop-blur-md border border-primary shadow-[0_0_30px_rgba(0,255,0,0.2)] flex flex-col font-mono text-sm overflow-hidden rounded-lg"
          >
            {/* Title Bar */}
            <div className="flex items-center justify-between px-4 py-2 bg-primary/10 border-b border-primary/30 select-none cursor-grab active:cursor-grabbing">
              <span className="text-primary font-bold flex items-center gap-2">
                <TerminalIcon size={14} /> guest@aditya:{pathString}
              </span>
              <div className="flex items-center gap-2">
                <button onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors"><Minus size={14} /></button>
                <button onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors"><Square size={12} /></button>
                <button onClick={() => setIsOpen(false)} className="hover:text-destructive transition-colors"><X size={14} /></button>
              </div>
            </div>

            {/* Content */}
            <div 
              className="flex-1 p-4 overflow-y-auto text-primary space-y-1 custom-scrollbar font-mono text-xs md:text-sm leading-relaxed" 
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((line, i) => (
                <div 
                  key={i} 
                  className="whitespace-pre-wrap break-words"
                  dangerouslySetInnerHTML={{ __html: line }}
                />
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input Line */}
            <div className="p-4 pt-0 flex items-center gap-2 text-primary bg-black/50 backdrop-blur-sm">
              <span className="text-accent font-bold">guest@aditya:{pathString}$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent border-none outline-none text-primary placeholder-primary/30 font-bold"
                autoFocus
                autoComplete="off"
                spellCheck="false"
              />
              <div className="w-2 h-4 bg-primary animate-blink" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
