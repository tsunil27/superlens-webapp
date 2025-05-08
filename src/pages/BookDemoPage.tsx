
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

const BookDemoPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    role: '',
    domain: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (value: string, field: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.fullName || !formData.companyName || !formData.role || !formData.domain || !formData.email) {
      toast("Missing Information", {
        description: "Please fill in all required fields"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Here we would typically send this to a backend API
      // Since this is a frontend-only app, we'll use a form submission service
      const response = await fetch('https://formsubmit.co/ajax/naveen@superlens.ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _cc: 'naveen@nexfab.org', // CC the email
          _subject: `Demo Request from ${formData.fullName} at ${formData.companyName}`,
        })
      });
      
      if (response.ok) {
        toast("Success", {
          description: "Thank you! We've received your demo request and will contact you shortly."
        });
        
        // Reset form
        setFormData({
          fullName: '',
          companyName: '',
          role: '',
          domain: '',
          email: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast("Error", {
        description: "There was a problem submitting your request. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-28 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-superlens-darkBlue text-white p-8 rounded-l-xl">
                <h1 className="text-3xl font-bold mb-6">Book a Demo</h1>
                <p className="mb-8 text-blue-100">
                  See how SuperLens can transform your decision making process with AI-powered analytics.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-superlens-lightBlue mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Personalized Demo</h3>
                      <p className="text-blue-200">Tailored to your specific industry and use case</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-superlens-lightBlue mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Expert Consultation</h3>
                      <p className="text-blue-200">Get insights from our data science specialists</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-superlens-lightBlue mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">ROI Assessment</h3>
                      <p className="text-blue-200">Understand the potential value for your business</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-r-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Request Your Demo</h2>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input 
                        id="fullName" 
                        placeholder="Enter your full name" 
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your.name@company.com" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <Input 
                        id="companyName" 
                        placeholder="Your company name" 
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Role <span className="text-red-500">*</span>
                      </label>
                      <Select 
                        value={formData.role} 
                        onValueChange={(value) => handleSelectChange(value, 'role')}
                      >
                        <SelectTrigger id="role">
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="executive">C-Level Executive</SelectItem>
                          <SelectItem value="director">Director</SelectItem>
                          <SelectItem value="manager">Manager</SelectItem>
                          <SelectItem value="developer">Developer</SelectItem>
                          <SelectItem value="data_scientist">Data Scientist/Analyst</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label htmlFor="domain" className="block text-sm font-medium text-gray-700 mb-1">
                        Domain <span className="text-red-500">*</span>
                      </label>
                      <Input 
                        id="domain" 
                        placeholder="example.com" 
                        value={formData.domain}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <Button 
                        className="w-full bg-superlens-blue hover:bg-superlens-darkBlue" 
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Submitting...' : 'Request Demo'}
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookDemoPage;
