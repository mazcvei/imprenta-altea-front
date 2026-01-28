'use client';

import { useState } from "react"
import { Button } from "@/src/components/ui/button"
import { Link } from 'react-router-dom'
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/100 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-60 h-10  flex items-center justify-center">
              <img src="logo.png"></img>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#historia" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Nuestra Historia
            </a>
            <a href="#servicios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Servicios
            </a>
            <a href="#contacto" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contacto
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="cursor-pointer text-foreground">
               <Link to="/login">
                  Iniciar Sesion
               </Link>
           
            </Button>
            <Button size="sm" className="cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90">
               <Link to="/registro">
                Registrarse
               </Link>
             
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <a href="#historia" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Nuestra Historia
              </a>
              <a href="#servicios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Servicios
              </a>
              <a href="#contacto" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contacto
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="cursor-pointer justify-start text-foreground">
                  Iniciar Sesion
                </Button>
                <Button size="sm" className="cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90">
                  Registrarse
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
