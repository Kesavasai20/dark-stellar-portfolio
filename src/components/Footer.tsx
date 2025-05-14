
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 gradient-text">KESAVA SAI K</h3>
            <p className="text-white/70 mb-6">
              A passionate developer and designer creating stunning, functional digital experiences. Always learning, always growing.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons */}
              <a href="#" className="text-white/60 hover:text-theme-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href="#" className="text-white/60 hover:text-theme-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.59 9.12h6.81M8.59 14.88h6.81M18.4 4.89l-12.8.01c-1.66 0-3 1.35-3 3.01v8.2c0 1.66 1.34 3.01 3 3.01h12.8c1.66 0 3-1.35 3-3.01v-8.2c0-1.66-1.34-3.01-3-3.01Z"></path><path d="m4.6 5.36 1.05-1.62a2.53 2.53 0 0 1 2.15-1.24h8.39c.92 0 1.76.46 2.16 1.24l1.05 1.62"></path><path d="m9.2 17.93-4.6 1.52 1.79-7.1"></path><path d="m14.8 17.93 4.6 1.52-1.79-7.1"></path></svg>
              </a>
              <a href="https://linkedin.com/in/k-kesava-sai" className="text-white/60 hover:text-theme-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-theme-purple transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/70 hover:text-theme-purple transition-colors">About</a></li>
              <li><a href="#projects" className="text-white/70 hover:text-theme-purple transition-colors">Projects</a></li>
              <li><a href="#skills" className="text-white/70 hover:text-theme-purple transition-colors">Skills</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-theme-purple transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-white/70">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-theme-purple"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                +91 7680943539
              </li>
              <li className="flex items-center text-white/70">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-theme-purple"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                kammorukesavasai@gmail.com
              </li>
              <li className="flex items-center text-white/70">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-theme-purple"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Tamil Nadu, India
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="border-t border-white/10 pt-8 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-bold mb-2 text-lg">Subscribe to Newsletter</h3>
              <p className="text-white/70">Stay updated with my latest projects and news</p>
            </div>
            <div className="flex gap-2">
              <Input 
                placeholder="Enter your email" 
                className="bg-theme-dark-accent border-white/20 focus:border-theme-purple" 
              />
              <Button className="bg-theme-purple hover:bg-theme-purple-light whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © {currentYear} KESAVA SAI K. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Need to add the Input component to avoid build errors
const Input = ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={`flex h-10 w-full rounded-md border border-white/20 bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-white/50 focus-visible:outline-none focus-visible:border-theme-purple focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );
};

export default Footer;
