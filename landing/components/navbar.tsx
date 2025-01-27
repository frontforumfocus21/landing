"use client";

import { Home, PenSquare, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useEffect, useState } from 'react';

import Link from "next/link";
import { Dock, DockIcon } from "./ui/dock";
import { Separator } from "./ui/separator";
import { ModeToggle } from "./mode-toggle";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

export function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Or return a simplified server-friendly version
  }

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <Dock className="rounded-lg border bg-background/80 backdrop-blur-sm px-4 py-2">
        {/* Main Navigation */}
        <TooltipProvider>
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/"
                  className="p-3 rounded-full hover:bg-accent transition-colors"
                >
                  <Home className="h-5 w-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>Home</TooltipContent>
            </Tooltip>
          </DockIcon>

          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/blog"
                  className="p-3 rounded-full hover:bg-accent transition-colors"
                >
                  <PenSquare className="h-5 w-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>Blog</TooltipContent>
            </Tooltip>
          </DockIcon>

          <Separator orientation="vertical" className="h-8 mx-2" />

          {/* Social Links */}
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="https://github.com/21givenchy"
                  target="_blank"
                  className="p-3 rounded-full hover:bg-accent transition-colors"
                >
                  <Github className="h-5 w-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>GitHub</TooltipContent>
            </Tooltip>
          </DockIcon>

          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="https://linkedin.com/in/georgekarani"
                  target="_blank"
                  className="p-3 rounded-full hover:bg-accent transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>LinkedIn</TooltipContent>
            </Tooltip>
          </DockIcon>

          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="https://twitter.com/frontforumfocus"
                  target="_blank"
                  className="p-3 rounded-full hover:bg-accent transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>X</TooltipContent>
            </Tooltip>
          </DockIcon>

          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="mailto:frontforumfocus@gmail.com"
                  className="p-3 rounded-full hover:bg-accent transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>Email</TooltipContent>
            </Tooltip>
          </DockIcon>

          <Separator orientation="vertical" className="h-8 mx-2" />

          {/* Theme Toggle */}
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="p-3 rounded-full hover:bg-accent transition-colors">
                  <ModeToggle />
                </div>
              </TooltipTrigger>
              <TooltipContent>Toggle Theme</TooltipContent>
            </Tooltip>
          </DockIcon>
        </TooltipProvider>
      </Dock>
    </nav>
  );
}
