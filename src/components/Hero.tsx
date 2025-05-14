
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateText = async () => {
      const phrases = ["Developer.", "Designer.", "Creator."];
      const element = textRef.current;
      
      if (!element) return;
      
      let i = 0;
      
      while (true) {
        const phrase = phrases[i % phrases.length];
        
        // Type the phrase
        for (let j = 0; j < phrase.length; j++) {
          if (element) {
            element.textContent = phrase.substring(0, j + 1);
            await new Promise(resolve => setTimeout(resolve, 100));
          }
        }
        
        // Pause at the end
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Delete the phrase
        for (let j = phrase.length; j > 0; j--) {
          if (element) {
            element.textContent = phrase.substring(0, j - 1);
            await new Promise(resolve => setTimeout(resolve, 50));
          }
        }
        
        i++;
      }
    };
    
    animateText();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-theme-dark pt-16">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-theme-purple/20 blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-theme-purple/10 blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <p className="text-theme-purple mb-2 font-medium tracking-wider">WELCOME TO MY PORTFOLIO</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hello, I'm <span className="gradient-text">KESAVA SAI K</span> <br />
              a <span className="gradient-text">
                <span ref={textRef} className="typing-text"></span>
              </span>
            </h1>
            <p className="text-white/70 text-lg mb-6 max-w-lg mx-auto md:mx-0">
              Transforming ideas into exceptional digital experiences through creative design and cutting-edge development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-theme-purple hover:bg-theme-purple-light text-white px-8 py-6">View My Work</Button>
              <Button variant="outline" className="border-theme-purple text-theme-purple hover:bg-theme-purple/10 px-8 py-6">
                Contact Me
              </Button>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-theme-purple to-theme-purple-light rounded-full opacity-20 blur-lg absolute -top-4 -left-4"></div>
              <div className="w-80 h-80 overflow-hidden rounded-full border-4 border-theme-dark-accent relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80" 
                  alt="Portfolio Image" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-theme-dark-accent p-4 rounded-lg z-20 shadow-lg">
                <p className="text-theme-purple font-bold">2+ Years</p>
                <p className="text-white/80 text-sm">Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
