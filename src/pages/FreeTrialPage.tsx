
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const FreeTrialPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-28 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-10">
            <h1 className="text-3xl font-bold mb-6 text-center">Start Your Free Trial</h1>
            <p className="text-gray-600 mb-8 text-center">
              Try SuperLens free for 14 days. No credit card required.
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Work Email
                </label>
                <Input id="email" type="email" placeholder="your.name@company.com" />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company
                </label>
                <Input id="company" placeholder="Your company name" />
              </div>
              
              <div>
                <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
                  Job Title
                </label>
                <Input id="jobTitle" placeholder="Your position" />
              </div>
              
              <div>
                <Button className="w-full bg-superlens-blue hover:bg-superlens-darkBlue">
                  Start Free Trial
                </Button>
              </div>
            </form>
            
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
