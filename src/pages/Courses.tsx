import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Occupational Skills Programme: Plumbing Hand",
      duration: "12 Months",
      level: "NQF Level 3",
      price: "R28,500",
      description: "Comprehensive plumbing training program covering residential and commercial plumbing systems, pipe installation, and maintenance.",
      features: ["Pipe Installation", "System Maintenance", "Safety Protocols", "Tool Usage"],
      category: "Trade Skills",
      code: "SP210403",
      credits: 83,
      deposit: "R3,000",
      registration: "R1,500",
      monthly: "R2,000"
    },
    {
      id: 2,
      title: "Domestic Water and Drainage Pipe Repairer",
      duration: "61 Days",
      level: "NQF Level 2",
      price: "R16,000",
      description: "Specialized training in domestic water systems and drainage pipe repair techniques for residential applications.",
      features: ["Water System Repair", "Drainage Solutions", "Leak Detection", "Pipe Replacement"],
      category: "Trade Skills",
      code: "SP-191201",
      credits: 49,
      deposit: "R3,000",
      registration: "R1,000",
      monthly: "R6,500"
    },
    {
      id: 3,
      title: "Bricklayer Assistant",
      duration: "65 Days",
      level: "NQF Level 1",
      price: "R16,000",
      description: "Entry-level bricklaying skills including mortar preparation, brick laying techniques, and construction safety.",
      features: ["Brick Laying", "Mortar Preparation", "Construction Safety", "Tool Handling"],
      category: "Construction",
      code: "SP-191217",
      credits: 45,
      deposit: "R3,000",
      registration: "R1,000",
      monthly: "R4,400"
    },
    {
      id: 4,
      title: "Coded Welding",
      duration: "61 Days",
      level: "NQF Level 4",
      price: "R16,000",
      description: "Advanced welding certification program covering various welding techniques and metal fabrication processes.",
      features: ["Arc Welding", "Metal Fabrication", "Safety Standards", "Quality Control"],
      category: "Trade Skills",
      code: "SP-210402",
      credits: 96,
      deposit: "R3,000",
      registration: "R1,000",
      monthly: "R4,400"
    },
    {
      id: 5,
      title: "C++ Programmer",
      duration: "75 Days",
      level: "NQF Level 4",
      price: "R12,000",
      description: "Comprehensive C++ programming course covering object-oriented programming, data structures, and software development.",
      features: ["Object-Oriented Programming", "Data Structures", "Algorithm Design", "Software Development"],
      category: "Technology",
      code: "SP-230374",
      credits: 75,
      deposit: "R4,000",
      registration: "R1,000",
      monthly: "R2,700"
    },
    {
      id: 6,
      title: "Coded Shielded Metal Arc Fillet Welder",
      duration: "61 Days",
      level: "NQF Level 2",
      price: "R16,000",
      description: "Specialized welding program focusing on shielded metal arc welding techniques and fillet welding applications.",
      features: ["Arc Welding", "Fillet Welding", "Metal Preparation", "Welding Safety"],
      category: "Trade Skills",
      code: "651202000",
      credits: 40,
      deposit: "R3,000",
      registration: "R1,000",
      monthly: "R6,500"
    },
    {
      id: 7,
      title: "End User Computing",
      duration: "6 Months",
      level: "NQF Level 3",
      price: "R15,800",
      description: "Essential computer skills training covering Microsoft Office suite, internet usage, and basic troubleshooting.",
      features: ["Microsoft Office", "Internet Skills", "Email Management", "Basic Troubleshooting"],
      category: "Technology",
      code: "61591",
      credits: 130,
      deposit: "R2,000",
      registration: "R1,000",
      monthly: "R2,300"
    },
    {
      id: 8,
      title: "Pallet Lift Truck F12 Driver (Forklift Driver)",
      duration: "2 Weeks",
      level: "NQF Level 3",
      price: "R2,500",
      description: "Forklift operator certification program covering safe operation, maintenance, and warehouse logistics.",
      features: ["Safe Operation", "Load Handling", "Maintenance Basics", "Warehouse Safety"],
      category: "Operations",
      code: "734402",
      credits: 20,
      deposit: "N/A",
      registration: "R500",
      monthly: "Paid Upfront"
    },
    {
      id: 9,
      title: "Fashion & Design (Sewing Machine Operator)",
      duration: "12 Months",
      level: "NQF Level 2",
      price: "R29,500",
      description: "Fashion design and sewing machine operation training covering garment construction and textile techniques.",
      features: ["Machine Operation", "Garment Construction", "Pattern Reading", "Quality Control"],
      category: "Creative Arts",
      code: "97238",
      credits: 128,
      deposit: "R2,000",
      registration: "R1,000",
      monthly: "R3,500 (9 payments)"
    },
    {
      id: 10,
      title: "Fashion & Design (Pattern Making Assistant)",
      duration: "12 Months",
      level: "NQF Level 4",
      price: "R29,500",
      description: "Advanced pattern making skills for fashion design including pattern drafting, grading, and modification techniques.",
      features: ["Pattern Drafting", "Pattern Grading", "Design Modification", "Technical Drawing"],
      category: "Creative Arts",
      code: "115458",
      credits: 77,
      deposit: "R2,000",
      registration: "R1,000",
      monthly: "R3,500 (9 payments)"
    }
  ];

  const categories = ["All", "Trade Skills", "Technology", "Construction", "Operations", "Creative Arts"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Courses
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive training programs designed to accelerate your career growth
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button key={category} variant="outline" size="sm">
              {category}
            </Button>
          ))}
        </div>

        {/* Courses grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="shadow-card hover:shadow-elegant transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{course.category}</Badge>
                  <span className="text-2xl font-bold text-primary">{course.price}</span>
                </div>
                <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span>📅 {course.duration}</span>
                  <span>📊 {course.level}</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {course.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-2">What you'll learn:</h4>
                  <ul className="space-y-1">
                    {course.features.map((feature, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center">
                        <span className="text-primary mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <Link to="/apply" state={{ selectedCourse: course.title }}>
                    <Button className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-elegant transition-all duration-300">
                      Enroll Now
                    </Button>
                  </Link>
                  <Link to="/apply" state={{ selectedCourse: course.title }}>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-primary/10 to-primary-glow/20 rounded-xl p-8">
          <h2 className="text-3xl font-semibold text-foreground mb-4">
            Can't Find the Right Course?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We offer custom training programs tailored to your organization's specific needs. 
            Contact us to discuss a personalized learning solution.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow">
            Contact Us for Custom Training
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Courses;