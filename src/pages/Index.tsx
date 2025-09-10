import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroTraining from "@/assets/hero-training.jpg";

const Index = () => {
  const stats = [
    { number: "5000+", label: "Students Trained" },
    { number: "95%", label: "Job Placement Rate" },
    { number: "50+", label: "Industry Partners" },
    { number: "15", label: "Years of Excellence" },
  ];

  const featuredCourses = [
    {
      title: "C++ Programmer",
      description: "Learn comprehensive C++ programming with object-oriented programming and software development",
      duration: "75 days",
      price: "R12,000"
    },
    {
      title: "End User Computing", 
      description: "Essential computer skills including Microsoft Office, internet usage, and basic troubleshooting",
      duration: "6 months",
      price: "R15,800"
    },
    {
      title: "Coded Welding",
      description: "Advanced welding certification covering various welding techniques and metal fabrication",
      duration: "61 days", 
      price: "R16,000"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-primary-glow/15 py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Transform Your Career with 
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent"> Professional Skills</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Join thousands of professionals who have advanced their careers through our industry-leading training programs. 
                Learn from experts, gain practical experience, and unlock new opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/courses">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-elegant transition-all duration-300">
                    Explore Courses
                  </Button>
                </Link>
                <Link to="/apply">
                  <Button variant="outline" size="lg" className="transition-all duration-300 hover:shadow-card">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroTraining} 
                alt="Professional training center with diverse students learning"
                className="rounded-xl shadow-elegant w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-primary-glow/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Popular Courses
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our most in-demand training programs designed to accelerate your career growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredCourses.map((course, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {course.description}
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-muted-foreground">📅 {course.duration}</span>
                    <span className="text-lg font-bold text-primary">{course.price}</span>
                  </div>
                  <Button className="w-full" variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/courses">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow">
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary-glow/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Allied Skills Training Centre?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to delivering world-class training that makes a real difference in your career
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Expert Instructors</h3>
              <p className="text-muted-foreground leading-relaxed">
                Learn from industry professionals with years of real-world experience and proven track records
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">💼</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Practical Learning</h3>
              <p className="text-muted-foreground leading-relaxed">
                Hands-on training with real industry projects, case studies, and practical applications
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🌟</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Career Support</h3>
              <p className="text-muted-foreground leading-relaxed">
                Comprehensive job placement assistance, resume building, and ongoing career guidance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Start Your Application Today
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Take the first step towards your career transformation. Fill out this quick form and we'll get back to you within 24 hours.
              </p>
            </div>

            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                      <input 
                        type="tel" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Course Interest *</label>
                      <select 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a course</option>
                        <option value="digital-marketing">Digital Marketing Mastery</option>
                        <option value="data-science">Data Science & Analytics</option>
                        <option value="project-management">Project Management Professional</option>
                        <option value="web-development">Web Development Bootcamp</option>
                        <option value="financial-analysis">Financial Analysis & Planning</option>
                        <option value="ux-ui-design">UX/UI Design Excellence</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message (Optional)</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Tell us about your goals and what you hope to achieve..."
                    ></textarea>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input 
                      type="checkbox" 
                      id="consent" 
                      required
                      className="mt-1 w-4 h-4 text-primary border-input rounded focus:ring-primary"
                    />
                    <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                      I agree to be contacted by Allied Skills Training Centre regarding my application and consent to the processing of my personal data. *
                    </label>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="flex-1 bg-gradient-to-r from-primary to-primary-glow hover:shadow-elegant transition-all duration-300"
                    >
                      Submit Quick Application
                    </Button>
                    <Link to="/apply" className="flex-1">
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="lg" 
                        className="w-full transition-all duration-300 hover:shadow-card"
                      >
                        Complete Full Application
                      </Button>
                    </Link>
                  </div>
                </form>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Need help with your application? Our admissions team is here to assist you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                <span className="flex items-center justify-center">📧 alliedskills.co.za</span>
                <span className="flex items-center justify-center">📞 0687211598</span>
                <span className="flex items-center justify-center">🕒 Mon-Fri: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary-glow/10">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-primary-glow rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join our next cohort and take the first step towards achieving your professional goals. 
              Limited seats available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/events">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Upcoming Events
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Allied Skills Training Centre</h3>
              <p className="text-white/80 leading-relaxed">
                Empowering professionals with cutting-edge skills for tomorrow's workforce.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/courses" className="block text-white/80 hover:text-white transition-colors">Courses</Link>
                <Link to="/about" className="block text-white/80 hover:text-white transition-colors">About</Link>
                <Link to="/events" className="block text-white/80 hover:text-white transition-colors">Events</Link>
                <Link to="/apply" className="block text-white/80 hover:text-white transition-colors">Apply</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-white/80">
                <p>📧 alliedskills.co.za</p>
                <p>📞 0687211598</p>
                <p>📍 123 Training Center Drive</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  LinkedIn
                </Button>
                <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Twitter
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 Allied Skills Training Centre. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;