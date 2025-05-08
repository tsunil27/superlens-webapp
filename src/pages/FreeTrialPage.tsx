
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/sonner';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  surName: z.string().min(2, { message: "Sur name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid business email." })
    .refine((email) => {
      const parts = email.split('@');
      return parts.length === 2 && !['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'].includes(parts[1].toLowerCase());
    }, { message: "Please use a business email address." }),
  role: z.string().min(2, { message: "Please enter your role." }),
  domain: z.string().min(2, { message: "Please enter your company domain." }),
});

const FreeTrialPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      surName: "",
      email: "",
      role: "",
      domain: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Here we would typically connect to a backend API
      // For now, we'll simulate a successful registration
      console.log("Form submitted with values:", values);
      
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      toast.success("Registration successful! Check your email for next steps.");
      
      // Reset the form
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("There was an error processing your registration. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-28 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-10">
            <h1 className="text-3xl font-bold mb-4 text-center">Start Your Free Trial</h1>
            <p className="text-gray-600 mb-8 text-center">
              Try SuperLens free for 14 days. No credit card required.
            </p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your first name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="surName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sur Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your sur name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.name@company.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role</FormLabel>
                      <FormControl>
                        <Input placeholder="Your position in the company" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="domain"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Domain</FormLabel>
                      <FormControl>
                        <Input placeholder="Your industry or business domain" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div>
                  <Button 
                    type="submit" 
                    className="w-full bg-superlens-blue hover:bg-superlens-darkBlue"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </Button>
                </div>
              </form>
            </Form>
            
            <p className="text-xs text-gray-500 mt-6 text-center">
              By signing up, you agree to our <a href="/terms" className="text-superlens-blue hover:underline">Terms of Service</a> and <a href="/privacy" className="text-superlens-blue hover:underline">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FreeTrialPage;
