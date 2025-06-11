"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react"

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

const socialLinks = [
  { icon: Github, href: "https://github.com/your-username", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/your-profile", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/your-handle", label: "Twitter" },
  { icon: Mail, href: "mailto:john.doe@example.com", label: "Email" },
]

export function Footer() {
  const scrollToTop = () => {
    console.log("Scrolling to top")
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href: string) => {
    console.log(`Scrolling to section: ${href}`)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="relative bg-gradient-to-b from-background to-muted/30 border-t border-border">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cosmic-blue/5 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cosmic-purple/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-cosmic-gradient mb-4">
                John Doe
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                ML Engineer & Full-Stack Developer passionate about creating intelligent solutions 
                that bridge the gap between cutting-edge AI research and practical applications.
              </p>
              <div className="flex items-center text-sm text-muted-foreground">
                <span>Made with</span>
                <Heart className="w-4 h-4 mx-1 text-red-500" />
                <span>using Next.js, TypeScript, and Tailwind CSS</span>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-cosmic-gradient transition-colors duration-200 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact & Social */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-foreground mb-4">Connect</h4>
              <div className="space-y-3 mb-6">
                <p className="text-sm text-muted-foreground">
                  john.doe@example.com
                </p>
                <p className="text-sm text-muted-foreground">
                  San Francisco, CA
                </p>
              </div>
              
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:text-cosmic-gradient hover:bg-accent transition-all duration-200"
                      onClick={() => window.open(social.href, '_blank')}
                    >
                      <social.icon className="w-4 h-4" />
                      <span className="sr-only">{social.label}</span>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; 2024 John Doe. All rights reserved.</p>
            <div className="flex gap-4">
              <button className="hover:text-foreground transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="hover:text-foreground transition-colors duration-200">
                Terms of Service
              </button>
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="hover:text-cosmic-gradient hover:bg-accent transition-all duration-200"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </motion.div>
      </div>

      {/* Floating Action Button for Mobile */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 cosmic-gradient text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 md:hidden z-30"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  )
}