"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { 
  Mail, Phone, MapPin, Github, Linkedin, Twitter, 
  Send, Loader2 
} from "lucide-react"
import { toast } from "sonner"

// CUSTOMIZATION INSTRUCTIONS FOR CONTACT:
/*
=== HOW TO MODIFY CONTACT SECTION ===

1. TO UPDATE CONTACT INFORMATION:
   - Modify contactInfo array objects
   - Update email, phone, location values
   - Change href links to actual contact methods

2. TO UPDATE SOCIAL MEDIA LINKS:
   - Modify socialLinks array
   - Update href values with your actual profiles
   - Add new social platforms by copying object structure

3. CONTACT INFO STRUCTURE:
   {
     icon: <Mail className="w-6 h-6" />,
     label: "Email",
     value: "your.email@example.com",
     href: "mailto:your.email@example.com"
   }
*/

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    label: "Email",
    value: "john.doe@example.com",
    href: "mailto:john.doe@example.com"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    label: "Location",
    value: "San Francisco, CA",
    href: "https://maps.google.com/?q=San+Francisco,+CA"
  }
]

const socialLinks = [
  {
    icon: <Github className="w-6 h-6" />,
    label: "GitHub",
    href: "https://github.com/your-username",
    color: "hover:text-gray-900 dark:hover:text-white"
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/your-profile",
    color: "hover:text-blue-600"
  },
  {
    icon: <Twitter className="w-6 h-6" />,
    label: "Twitter",
    href: "https://twitter.com/your-handle",
    color: "hover:text-blue-400"
  }
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    console.log(`Form input changed: ${name} = ${value}`)
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submission started", formData)
    
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log("Form submitted successfully")
      toast.success("Message sent successfully! I'll get back to you soon.")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error("Form submission error:", error)
      toast.error("Failed to send message. Please try again or contact me directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cosmic-gradient mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have an exciting project in mind? Whether it's AI implementation, data analysis, 
            or full-stack development, I'd love to hear about it and discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Get In Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a conversation about AI and technology. Don't hesitate to reach out!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover-lift bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-200">
                    <CardContent className="p-4">
                      <button
                        onClick={() => window.open(info.href, '_blank')}
                        className="flex items-center gap-4 w-full text-left group"
                      >
                        <div className="p-3 rounded-lg bg-cosmic-gradient text-white group-hover:scale-110 transition-transform duration-200">
                          {info.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground group-hover:text-cosmic-gradient transition-colors duration-200">
                            {info.label}
                          </h4>
                          <p className="text-muted-foreground">{info.value}</p>
                        </div>
                      </button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className={`hover:scale-110 transition-all duration-200 ${social.color}`}
                      onClick={() => window.open(social.href, '_blank')}
                    >
                      {social.icon}
                      <span className="sr-only">{social.label}</span>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hello!"
                      required
                      rows={6}
                      className="bg-background/50 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full cosmic-gradient text-white hover:opacity-90 transition-opacity"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Alternative Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-cosmic-blue/10 via-cosmic-purple/10 to-cosmic-amber/10 border border-border"
        >
          <h3 className="text-xl font-semibold mb-2 text-foreground">Prefer Direct Contact?</h3>
          <p className="text-muted-foreground mb-4">
            Feel free to reach out directly for urgent matters or quick questions.
          </p>
          <Button
            variant="outline"
            onClick={() => window.open('mailto:john.doe@example.com', '_blank')}
            className="hover:bg-accent hover:scale-105 transition-all duration-200"
          >
            <Mail className="w-4 h-4 mr-2" />
            john.doe@example.com
          </Button>
        </motion.div>
      </div>
    </section>
  )
}