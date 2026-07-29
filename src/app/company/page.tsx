import React from 'react';
import Navbar from '@/components/Navbar';
import Overview from '@/components/company/Overview';
import Values from '@/components/company/Values';
import Journey from '@/components/company/Journey';
import ContactCTA from '@/components/company/ContactCTA';

const CompanyPage = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Page Header / Banner */}
      <div className="bg-slate-900 py-24 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          About Our <span className="text-blue-500">Company</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto font-mono uppercase tracking-widest">
          Elite Business Navbay / SA Fashion
        </p>
      </div>

      {/* Company Overview Section */}
      <Overview />
      <Values/>
      <Journey/>
      <ContactCTA/>

      {/* এরপর আমরা Team বা History সেকশন যোগ করতে পারি */}
    </main>
  );
};

export default CompanyPage;