import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const VisionPage = () => {
  return (
    <div className="min-h-screen bg-nexfab-dark text-white">
      <Navigation />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          {/* Mission Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Mission</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-300 leading-relaxed">
                At NexFab, our mission is to drive data-driven decisions within digital media organizations. We strive to offer high-quality data consulting and services to meet the specific needs of our clients. Our goal is to provide comprehensive business consulting, architecture, design, and implementation of customer data platforms, data engineering, marketing automation, data lakehouse, and cost optimization/efficiency on data platforms.
              </p>
            </div>
          </section>

          {/* Story Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Established in 2024, NexFab brings years of experience in the industry and collective product experience in large global telecom and media organizations. Our journey is driven by the aim to deliver unparalleled expertise and a comprehensive range of services to digital media organizations. We are committed to making a difference by enabling businesses to harness the power of data for informed decision-making and sustainable growth.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                NexFab is led by a team of experienced professionals who have a deep understanding of the digital media landscape. Our team is dedicated to providing exceptional consulting and services tailored to the unique requirements of our clients. With a focus on driving data-driven decisions, our leadership ensures that NexFab remains at the forefront of innovation and excellence in the industry.
              </p>
            </div>
          </section>

          {/* Leadership Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8 text-center">Experienced Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Add leadership team members here */}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VisionPage;