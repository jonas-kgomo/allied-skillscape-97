import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Allied Skills Training Centre
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering professionals with cutting-edge skills for tomorrow's workforce
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To provide world-class professional training that bridges the gap between 
                  academic knowledge and industry requirements, ensuring our students are 
                  equipped with the most relevant and in-demand skills.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading skills training center that transforms careers and 
                  drives innovation across industries through comprehensive, practical, 
                  and future-focused education programs.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary-glow/20 rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-6 text-center">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Expert Instructors</h3>
                <p className="text-muted-foreground">Industry professionals with years of real-world experience</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Practical Training</h3>
                <p className="text-muted-foreground">Hands-on learning with real industry projects and scenarios</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Career Support</h3>
                <p className="text-muted-foreground">Job placement assistance and ongoing career guidance</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-semibold text-foreground mb-6">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5000+</div>
                <div className="text-muted-foreground">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Job Placement Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Industry Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15</div>
                <div className="text-muted-foreground">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;