import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';

// Import page components directly
import HomePage from './routes/index';
import AboutPage from './routes/about';
import ContactPage from './routes/contact';
import FranchiseOpportunityPage from './routes/franchise-opportunity';
import FranchiseProcessPage from './routes/franchise-process';
import HowItWorksPage from './routes/how-it-works';
import SupportPage from './routes/support';
import SuccessStoriesPage from './routes/success-stories';
import WhyUsPage from './routes/why-us';
import AdminLogin from './routes/admin/index';
import AdminDashboard from './routes/admin/dashboard';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/franchise-opportunity" element={<FranchiseOpportunityPage />} />
        <Route path="/franchise-process" element={<FranchiseProcessPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/success-stories" element={<SuccessStoriesPage />} />
        <Route path="/why-us" element={<WhyUsPage />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
