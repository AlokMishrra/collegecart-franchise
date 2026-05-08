import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';

// We'll dynamically import and render the route components
// This avoids importing TanStack Router dependencies

const root = ReactDOM.createRoot(document.getElementById('root')!);

// Create async component loaders
const loadRoute = (path: string) => {
  return React.lazy(() => 
    import(path).then(module => ({
      default: module.Route.component
    }))
  );
};

const HomePage = loadRoute('./routes/index');
const AboutPage = loadRoute('./routes/about');
const ContactPage = loadRoute('./routes/contact');
const FranchiseOpportunityPage = loadRoute('./routes/franchise-opportunity');
const FranchiseProcessPage = loadRoute('./routes/franchise-process');
const HowItWorksPage = loadRoute('./routes/how-it-works');
const SupportPage = loadRoute('./routes/support');
const SuccessStoriesPage = loadRoute('./routes/success-stories');
const WhyUsPage = loadRoute('./routes/why-us');

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <React.Suspense fallback={<div>Loading...</div>}>
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
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
