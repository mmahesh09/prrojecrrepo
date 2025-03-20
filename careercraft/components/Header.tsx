"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="py-6 w-full">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-foreground">
           CareerCraft
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden rounded-md p-2 text-foreground hover:bg-secondary"
          aria-label="Toggle menu"
        >
          <Menu size={24} />
          <span className="sr-only">Toggle menu</span>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-6">
          <Link
            href="/home"
            className="text-sm font-medium text-foreground hover:text-muted-foreground"
          >
            Home
          </Link>
          <Link
            href="/keywordextractor"
            className="text-sm font-medium text-foreground hover:text-muted-foreground"
          >
           Extractor
          </Link>
          <Link
            href="/projects"
            className="text-sm font-medium text-foreground hover:text-muted-foreground"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-foreground hover:text-muted-foreground"
          >
            Contact Us
          </Link>
        </nav>

        {/* Auth buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/signin"
            className="text-sm font-medium text-foreground hover:text-muted-foreground"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-background border-b border-border md:hidden z-50">
            <div className="py-4 px-4 space-y-4">
              <Link
                href="/home"
                className="block text-sm font-medium text-foreground hover:text-muted-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/keywordextractor"
                className="block text-sm font-medium text-foreground hover:text-muted-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
               Extractor
              </Link>
              <Link
                href="/projects"
                className="block text-sm font-medium text-foreground hover:text-muted-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="block text-sm font-medium text-foreground hover:text-muted-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <div className="pt-4 flex flex-col space-y-3">
                <Link
                  href="/signin"
                  className="text-sm font-medium text-foreground hover:text-muted-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 inline-block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
