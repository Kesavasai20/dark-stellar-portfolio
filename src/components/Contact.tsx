
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, User, MessageSquare } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setLoading(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "yourname@example.com",
      link: "mailto:yourname@example.com"
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Discord",
      value: "yourusername",
      link: "#"
    },
    {
      icon: <User className="w-5 h-5" />,
      title: "LinkedIn",
      value: "yourlinkedin",
      link: "https://linkedin.com/"
    }
  ];

  return (
    <section id="contact" className="section bg-theme-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-white/70 max-w-lg mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
          <div className="w-16 h-1 bg-theme-purple mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-theme-dark-accent p-6 rounded-lg border border-white/10 animate-fade-in">
            <h3 className="text-xl font-bold mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="bg-theme-dark border-white/20 focus:border-theme-purple"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="bg-theme-dark border-white/20 focus:border-theme-purple"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter message subject"
                  required
                  className="bg-theme-dark border-white/20 focus:border-theme-purple"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  className="bg-theme-dark border-white/20 focus:border-theme-purple min-h-[120px]"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-theme-purple hover:bg-theme-purple-light"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <p className="text-white/70 mb-6">
              Don't hesitate to reach out. I'm available for freelance work, full-time positions, and collaborations.
            </p>
            
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start p-4 bg-theme-dark-accent rounded-lg border border-white/10 hover:border-theme-purple transition-all duration-300">
                <div className="bg-theme-purple/20 p-3 rounded-lg mr-4">
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-medium">{info.title}</h4>
                  <a 
                    href={info.link} 
                    className="text-theme-cool-gray hover:text-theme-purple transition-colors"
                  >
                    {info.value}
                  </a>
                </div>
              </div>
            ))}
            
            {/* Social Icons */}
            <div className="mt-8">
              <h4 className="font-medium mb-4">Follow me</h4>
              <div className="flex space-x-4">
                {/* GitHub */}
                <a href="#" className="bg-theme-dark-accent p-3 rounded-lg border border-white/10 hover:border-theme-purple transition-all duration-300 hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                
                {/* Twitter */}
                <a href="#" className="bg-theme-dark-accent p-3 rounded-lg border border-white/10 hover:border-theme-purple transition-all duration-300 hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
                
                {/* LinkedIn */}
                <a href="#" className="bg-theme-dark-accent p-3 rounded-lg border border-white/10 hover:border-theme-purple transition-all duration-300 hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                
                {/* Instagram */}
                <a href="#" className="bg-theme-dark-accent p-3 rounded-lg border border-white/10 hover:border-theme-purple transition-all duration-300 hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
