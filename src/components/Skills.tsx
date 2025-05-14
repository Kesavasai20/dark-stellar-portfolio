
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  // Technical skills with proficiency level
  const technicalSkills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "UI/UX Design", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "Python", level: 70 }
  ];
  
  // Soft skills
  const softSkills = [
    "Problem Solving", 
    "Communication", 
    "Team Collaboration", 
    "Time Management", 
    "Adaptability",
    "Creativity"
  ];

  return (
    <section id="skills" className="section bg-theme-dark-accent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-white/70 max-w-lg mx-auto">
            A comprehensive overview of my technical expertise and professional skills.
          </p>
          <div className="w-16 h-1 bg-theme-purple mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-theme-purple">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2 bg-white/10"
                    // Fix: removing indicatorClassName and adding inline style for the indicator
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-theme-dark p-4 rounded-lg border border-white/10 hover:border-theme-purple transition-all duration-300 hover-effect"
                >
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-theme-purple mr-3"></div>
                    <h4 className="font-medium">{skill}</h4>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Additional Skill Visualization */}
            <div className="mt-8 p-6 bg-theme-dark rounded-lg border border-white/10">
              <h4 className="text-xl font-bold mb-4 text-center">Experience Overview</h4>
              <div className="flex justify-between items-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-theme-purple to-theme-purple-light flex items-center justify-center mb-2 mx-auto">
                    <span className="text-white font-bold text-lg">2+</span>
                  </div>
                  <p className="text-sm">Years<br/>Experience</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-2 mx-auto">
                    <span className="text-white font-bold text-lg">5+</span>
                  </div>
                  <p className="text-sm">Projects<br/>Completed</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-2 mx-auto">
                    <span className="text-white font-bold text-lg">5+</span>
                  </div>
                  <p className="text-sm">Happy<br/>Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
