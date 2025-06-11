"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Building } from "lucide-react"

// CUSTOMIZATION INSTRUCTIONS FOR EXPERIENCE:
/*
=== HOW TO MODIFY EXPERIENCE SECTION ===

1. TO DELETE EXISTING EXPERIENCE ENTRIES:
   - Remove objects from experiences array
   - Each object represents one job/experience

2. TO ADD NEW EXPERIENCE ENTRIES:
   - Copy structure of existing experience object
   - Update all fields: company, role, duration, description, technologies, achievements
   - Add to experiences array

3. EXPERIENCE OBJECT STRUCTURE:
   {
     company: "Company Name",
     role: "Your Job Title",
     duration: "Start Date - End Date",
     location: "City, State/Country",
     description: "Brief description of the role and responsibilities",
     technologies: ["Tech1", "Tech2", "Tech3"],
     achievements: [
       "Key achievement 1",
       "Key achievement 2", 
       "Key achievement 3"
     ],
     logo: "/company-logo.png" // Optional
   }

4. TO REORDER EXPERIENCES:
   - Arrange array items in chronological order (newest first)
   - Timeline will automatically display in order
*/

const experiences = [
  {
    company: "TechCorp AI Solutions",
    role: "Senior ML Engineer",
    duration: "2022 - Present",
    location: "San Francisco, CA",
    description: "Leading AI initiatives and developing production-ready machine learning systems for enterprise clients.",
    technologies: ["Python", "TensorFlow", "PyTorch", "AWS", "Docker", "Kubernetes"],
    achievements: [
      "Architected ML pipeline serving 10M+ predictions daily with 99.9% uptime",
      "Led team of 5 engineers to deliver computer vision solution reducing manual inspection by 85%",
      "Implemented MLOps practices reducing model deployment time from weeks to hours",
      "Published 3 research papers on efficient neural network architectures"
    ],
    logo: "/logos/techcorp.png"
  },
  {
    company: "DataFlow Analytics",
    role: "ML Engineer & Data Scientist",
    duration: "2020 - 2022",
    location: "New York, NY",
    description: "Developed predictive models and analytics solutions for Fortune 500 companies across various industries.",
    technologies: ["Python", "R", "SQL", "Apache Spark", "Tableau", "scikit-learn"],
    achievements: [
      "Built recommendation system increasing customer engagement by 40%",
      "Developed fraud detection model with 95% precision, preventing $2M+ in losses",
      "Created automated reporting system saving 20 hours/week of manual work",
      "Mentored 3 junior data scientists and established best practices documentation"
    ],
    logo: "/logos/dataflow.png"
  },
  {
    company: "StartupX",
    role: "Full-Stack Developer & AI Consultant",
    duration: "2019 - 2020",
    location: "Austin, TX",
    description: "Wore multiple hats in fast-paced startup environment, building both web applications and AI-powered features.",
    technologies: ["React", "Node.js", "MongoDB", "Python", "Flask", "OpenCV"],
    achievements: [
      "Developed MVP web application from concept to launch in 3 months",
      "Integrated computer vision API increasing user engagement by 300%",
      "Optimized database queries improving application performance by 60%",
      "Collaborated with design team to create intuitive user interfaces"
    ],
    logo: "/logos/startupx.png"
  },
  {
    company: "University Research Lab",
    role: "Research Assistant",
    duration: "2018 - 2019",
    location: "Boston, MA",
    description: "Conducted research in machine learning applications for medical image analysis and natural language processing.",
    technologies: ["Python", "MATLAB", "TensorFlow", "OpenCV", "Jupyter", "LaTeX"],
    achievements: [
      "Co-authored 2 peer-reviewed papers on medical image segmentation",
      "Developed novel CNN architecture achieving 92% accuracy on diagnostic imaging",
      "Created dataset of 10,000+ annotated medical images for research community",
      "Presented findings at 3 international conferences"
    ],
    logo: "/logos/university.png"
  }
]

export function ExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cosmic-gradient mb-4">
            Professional Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From research labs to production systems, here's how I've applied AI and data science 
            to solve real-world challenges across different industries and scales.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cosmic-blue via-cosmic-purple to-cosmic-amber hidden md:block" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-cosmic-gradient rounded-full border-4 border-background hidden md:block" />

                <Card className={`ml-0 md:ml-20 hover-lift bg-card/50 backdrop-blur-sm border-l-4 ${
                  index % 4 === 0 ? 'border-l-ml-blue' :
                  index % 4 === 1 ? 'border-l-data-green' :
                  index % 4 === 2 ? 'border-l-dev-purple' : 'border-l-tools-amber'
                }`}>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex items-center gap-4">
                        {experience.logo && (
                          <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                            <Building className="w-6 h-6 text-muted-foreground" />
                          </div>
                        )}
                        <div>
                          <CardTitle className="text-xl font-bold text-foreground">
                            {experience.role}
                          </CardTitle>
                          <div className="text-lg font-semibold text-cosmic-gradient">
                            {experience.company}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {experience.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {experience.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {experience.description}
                    </p>

                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Key Achievements</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <motion.li
                            key={achievementIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: achievementIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 text-muted-foreground"
                          >
                            <div className="w-2 h-2 bg-cosmic-gradient rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.05 }}
                            viewport={{ once: true }}
                          >
                            <Badge
                              variant="secondary"
                              className="bg-accent hover:bg-accent/80 transition-colors duration-200"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            Want to know more about my professional experience?
          </p>
          <button
            onClick={() => window.open('/resume.pdf', '_blank')}
            className="text-cosmic-gradient hover:underline font-medium"
          >
            Download my detailed resume →
          </button>
        </motion.div>
      </div>
    </section>
  )
}