import React, { useState, useEffect } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../lib/queryClient";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Button } from "../components/ui/Button";

import { Link } from "react-router-dom";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-[var(--color-bg-primary)] transition-colors duration-300">
        <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg-secondary)]/80 backdrop-blur-md border-b border-[var(--color-border-subtle)]">
          <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
             <img src="/logo.png" alt="kubecost Logo" className="w-8 h-8 object-contain" />
              <span className="font-bold text-xl tracking-tight">kubecost</span>
            </Link>
            <nav className="hidden lg:flex items-center gap-8">
              <Link to="/" className="text-sm font-medium hover:text-[var(--color-accent-primary)] transition-colors">Platform</Link>
              <Link to="/solutions" className="text-sm font-medium hover:text-[var(--color-accent-primary)] transition-colors">Solutions</Link>
              <Link to="/pricing" className="text-sm font-medium hover:text-[var(--color-accent-primary)] transition-colors">Pricing</Link>
            </nav>
            <div className="flex items-center gap-2 md:gap-4">
              <Button variant="ghost" size="sm" onClick={toggleTheme} className="rounded-full w-10 h-10 p-0">
                <AnimatePresence mode="wait">
                  {theme === 'light' ? (
                    <motion.div key="sun" initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0, rotate: 90 }}>
                      <Sun className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div key="moon" initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0, rotate: 90 }}>
                      <Moon className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
              <div className="hidden sm:block">
                <Button size="sm" href="https://atomity.de/contact-form">Get Started</Button>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="lg:hidden rounded-full w-10 h-10 p-0"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden bg-[var(--color-bg-secondary)] border-b border-[var(--color-border-subtle)] overflow-hidden"
              >
                <div className="flex flex-col p-4 gap-4">
                  <Link 
                    to="/" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-base font-medium p-2 hover:bg-[var(--color-bg-primary)] rounded-lg transition-colors"
                  >
                    Platform
                  </Link>
                  <Link 
                    to="/solutions" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-base font-medium p-2 hover:bg-[var(--color-bg-primary)] rounded-lg transition-colors"
                  >
                    Solutions
                  </Link>
                  <Link 
                    to="/pricing" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-base font-medium p-2 hover:bg-[var(--color-bg-primary)] rounded-lg transition-colors"
                  >
                    Pricing
                  </Link>
                  <div className="sm:hidden pt-2 border-t border-[var(--color-border-subtle)]">
                    <Button className="w-full" href="https://atomity.de/contact-form">Get Started</Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
        <main className="pt-16">
          {children}
        </main>
        <footer className="bg-[var(--color-bg-secondary)] border-t border-[var(--color-border-subtle)] py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
             <img src="/logo.png" alt="Atomity Logo" className="w-8 h-8 object-contain" />
              <span className="font-bold text-lg tracking-tight">kubecost</span>
            </div>
            
            <div className="flex gap-6">
              <a href="https://atomity.de/privacy-policy" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]">Privacy Policy</a>
              <a href="#" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]">Terms of Service</a>
            </div>
          </div>
        </footer>
      </div>
    </QueryClientProvider>
  );
};
