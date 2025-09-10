import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Digital Transformation Workshop",
      date: "March 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Main Campus",
      type: "Workshop",
      price: "Free",
      description: "Learn how digital technologies are reshaping industries and discover strategies for successful digital transformation.",
      capacity: "50 attendees",
      featured: true
    },
    {
      id: 2,
      title: "Career Fair 2024",
      date: "March 22, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Exhibition Hall",
      type: "Career Fair",
      price: "Free",
      description: "Connect with top employers and explore exciting career opportunities across various industries.",
      capacity: "200 attendees",
      featured: true
    },
    {
      id: 3,
      title: "AI & Machine Learning Seminar",
      date: "April 5, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Technology Center",
      type: "Seminar",
      price: "$49",
      description: "Explore the latest trends in AI and machine learning with industry experts and hands-on demonstrations.",
      capacity: "75 attendees",
      featured: false
    },
    {
      id: 4,
      title: "Entrepreneurship Bootcamp",
      date: "April 12-14, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Innovation Hub",
      type: "Bootcamp",
      price: "$299",
      description: "3-day intensive program covering business planning, funding strategies, and startup essentials.",
      capacity: "30 attendees",
      featured: false
    }
  ];

  const pastEvents = [
    {
      title: "Cybersecurity Awareness Day",
      date: "February 28, 2024",
      attendees: 120
    },
    {
      title: "Women in Tech Conference",
      date: "February 14, 2024",
      attendees: 200
    },
    {
      title: "Industry Panel Discussion",
      date: "January 30, 2024",
      attendees: 85
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Events & Workshops
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our community events, workshops, and networking opportunities
          </p>
        </div>

        {/* Featured Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-8">Featured Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.filter(event => event.featured).map((event) => (
              <Card key={event.id} className="shadow-elegant border-primary/20">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-gradient-to-r from-primary to-primary-glow text-white">
                      {event.type}
                    </Badge>
                    <span className="text-lg font-semibold text-primary">{event.price}</span>
                  </div>
                  <CardTitle className="text-2xl mb-2">{event.title}</CardTitle>
                  <div className="space-y-1 text-muted-foreground">
                    <p>📅 {event.date}</p>
                    <p>🕒 {event.time}</p>
                    <p>📍 {event.location}</p>
                    <p>👥 {event.capacity}</p>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="space-y-3">
                    <Button className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-elegant transition-all duration-300">
                      Register Now
                    </Button>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-8">All Upcoming Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="shadow-card hover:shadow-elegant transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{event.type}</Badge>
                    <span className="font-semibold text-primary">{event.price}</span>
                  </div>
                  <CardTitle className="text-lg mb-2">{event.title}</CardTitle>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>{event.date}</p>
                    <p>{event.time}</p>
                    <p>{event.location}</p>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {event.description}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div className="bg-gradient-to-r from-primary/5 to-primary-glow/10 rounded-xl p-8">
          <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">Recent Events</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <div key={index} className="text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">{event.title}</h3>
                <p className="text-muted-foreground mb-1">{event.date}</p>
                <p className="text-primary font-semibold">{event.attendees} attendees</p>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="text-center mt-16 bg-gradient-to-r from-primary/10 to-primary-glow/20 rounded-xl p-8">
          <h2 className="text-3xl font-semibold text-foreground mb-4">
            Never Miss an Event
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about upcoming events, workshops, and exclusive opportunities.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 rounded-lg border border-input bg-background"
            />
            <Button className="bg-gradient-to-r from-primary to-primary-glow">
              Subscribe
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Events;