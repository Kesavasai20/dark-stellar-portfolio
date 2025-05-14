
import { Button } from "@/components/ui/button";

const About = () => {
  // Skills to highlight
  const skills = [
    "Web Development", "UI/UX Design", "Mobile Apps", "Responsive Design"
  ];

  return (
    <section id="about" className="section bg-theme-dark-accent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-theme-purple mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full h-full bg-gradient-to-tr from-theme-purple to-theme-purple-light absolute -top-4 -left-4 rounded-lg opacity-20 blur-md"></div>
            <div className="relative z-10 rounded-lg overflow-hidden border-2 border-theme-dark">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
                alt="About Me" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-sm py-6 px-8 rounded-lg border border-white/10 z-20 w-3/4">
              <p className="text-theme-purple font-bold text-xl mb-1">2+ Years of Experience</p>
              <p className="text-white/80 text-sm">Creating digital experiences</p>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
            <p className="text-white/70 mb-6">
              I am KESAVA SAI K, a passionate developer and designer with expertise in creating stunning, functional websites and applications. With a strong background in both design and development, I bring a unique perspective to every project.
            </p>
            <p className="text-white/70 mb-6">
              My approach combines technical knowledge with creative thinking to deliver solutions that not only look great but also perform exceptionally well. I believe in clean, efficient code and intuitive user experiences.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-theme-purple mr-2"></div>
                  <p>{skill}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-theme-purple hover:bg-theme-purple-light text-white">Download CV</Button>
              <Button variant="outline" className="border-theme-purple text-theme-purple hover:bg-theme-purple/10">
                My Process
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
