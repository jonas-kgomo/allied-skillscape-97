import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  course: z.string().min(1, "Please select a course"),
  startDate: z.date().optional(),
  jobTitle: z.string().optional(),
  company: z.string().optional(),
  experience: z.string().optional(),
  education: z.string().optional(),
  motivation: z.string().min(50, "Please provide at least 50 characters about your motivation"),
  goals: z.string().optional(),
  terms: z.boolean().refine((val) => val === true, "You must agree to the terms and conditions"),
  newsletter: z.boolean().optional(),
});

const Apply = () => {
  const courses = [
    "Digital Marketing Mastery",
    "Data Science & Analytics", 
    "Project Management Professional",
    "Web Development Bootcamp",
    "Financial Analysis & Planning",
    "UX/UI Design Excellence"
  ];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      course: "",
      jobTitle: "",
      company: "",
      experience: "",
      education: "",
      motivation: "",
      goals: "",
      terms: false,
      newsletter: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Application Submitted Successfully!",
      description: "We'll review your application and get back to you within 2 business days.",
    });
    console.log(values);
    // Here you would typically send the data to your backend
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Apply for Training
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Take the next step in your career journey. Fill out the application form below to get started.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Application Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Application Form</CardTitle>
                  <p className="text-muted-foreground">Please provide your information and course preferences</p>
                </CardHeader>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4">Personal Information</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your first name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your last name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="Enter your email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number *</FormLabel>
                              <FormControl>
                                <Input type="tel" placeholder="Enter your phone number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Course Selection */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4">Course Selection</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="course"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Preferred Course *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a course" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {courses.map((course) => (
                                    <SelectItem key={course} value={course}>{course}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="startDate"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>Preferred Start Date</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className={cn(
                                        "w-full pl-3 text-left font-normal",
                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        format(field.value, "PPP")
                                      ) : (
                                        <span>Pick a date</span>
                                      )}
                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) => date < new Date()}
                                    initialFocus
                                    className={cn("p-3 pointer-events-auto")}
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Background Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4">Background Information</h3>
                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name="jobTitle"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Current Job Title</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your current position" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company/Organization</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your company name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="experience"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Years of Experience</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select experience level" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="0-1">0-1 years</SelectItem>
                                  <SelectItem value="2-5">2-5 years</SelectItem>
                                  <SelectItem value="6-10">6-10 years</SelectItem>
                                  <SelectItem value="10+">10+ years</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="education"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Highest Education Level</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select education level" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="high-school">High School</SelectItem>
                                  <SelectItem value="associate">Associate Degree</SelectItem>
                                  <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                                  <SelectItem value="master">Master's Degree</SelectItem>
                                  <SelectItem value="phd">PhD</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Goals and Motivation */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4">Goals & Motivation</h3>
                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name="motivation"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Why do you want to take this course? *</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Please describe your motivation and goals for taking this course"
                                  className="min-h-[100px]"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="goals"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>What do you hope to achieve after completion?</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Describe your career goals and how this course will help you achieve them"
                                  className="min-h-[100px]"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="terms"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                I agree to the terms and conditions and privacy policy of Allied Skills Training Centre *
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="newsletter"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                I would like to receive updates about new courses and events
                              </FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-elegant transition-all duration-300 h-12 text-lg"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  </form>
                </Form>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Application Process */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Application Process</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-semibold text-primary">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Submit Application</h4>
                      <p className="text-sm text-muted-foreground">Fill out and submit the application form</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-semibold text-primary">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Review & Contact</h4>
                      <p className="text-sm text-muted-foreground">We'll review your application and contact you within 2 business days</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-semibold text-primary">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Enrollment</h4>
                      <p className="text-sm text-muted-foreground">Complete enrollment and begin your learning journey</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Contact Our Admissions Team</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>📧 alliedskills.co.za</p>
                      <p>📞 0687211598</p>
                      <p>🕒 Mon-Fri: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    Schedule a Call
                  </Button>
                </CardContent>
              </Card>

              {/* Financial Aid */}
              <Card className="shadow-card bg-gradient-to-br from-primary/5 to-primary-glow/10">
                <CardHeader>
                  <CardTitle>Financial Assistance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    We offer various financing options including payment plans, scholarships, and employer sponsorship programs.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Learn About Financial Aid
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Apply;