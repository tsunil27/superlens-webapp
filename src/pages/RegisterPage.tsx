
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const RegisterPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Register</h1>
          <p className="text-gray-600 mb-8">Create your SuperLens account to get started.</p>
          <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
            <p>This is a placeholder for the Register page content.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RegisterPage;
