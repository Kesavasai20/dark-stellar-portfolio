
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Sample project data
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    description: "A modern e-commerce platform with a seamless shopping experience, built with React and Node.js."
  },
  {
    id: 2,
    title: "Financial Dashboard",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    description: "An intuitive dashboard for financial data visualization using modern design principles."
  },
  {
    id: 3,
    title: "Social Media App",
    category: "Mobile Development",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    description: "A cross-platform social media application built with React Native and Firebase."
  },
  {
    id: 4,
    title: "Portfolio Website",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    description: "A responsive portfolio website showcasing professional work and skills."
  }
];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  
  // Get unique categories for filter buttons
  const categories = ["All", ...new Set(projectsData.map(project => project.category))];
  
  // Filter projects based on selected category
  const filteredProjects = filter === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className="section bg-theme-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-white/70 max-w-lg mx-auto">
            Explore my recent work and projects that showcase my skills and expertise in various domains.
          </p>
          <div className="w-16 h-1 bg-theme-purple mx-auto mt-4"></div>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={filter === category ? "default" : "outline"}
              className={filter === category 
                ? "bg-theme-purple hover:bg-theme-purple-light" 
                : "border-white/20 text-white hover:border-theme-purple hover:text-theme-purple"
              }
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {filteredProjects.map(project => (
            <Card 
              key={project.id}
              className="bg-theme-dark-accent border border-white/10 overflow-hidden group hover:border-theme-purple/50 transition-all duration-300"
            >
              <div className="overflow-hidden h-60">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <span className="text-sm text-theme-purple">{project.category}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
                <p className="text-white/60 mb-4">{project.description}</p>
                <Button variant="outline" className="border-theme-purple text-theme-purple hover:bg-theme-purple/10">
                  View Project
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-theme-purple hover:bg-theme-purple-light text-white px-8">View All Projects</Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
