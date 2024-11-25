import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const CourseListingPage = lazy(() => import('./pages/CourseListingPage'));
const PaymentPage = lazy(() => import('./pages/PaymentPage'));
const CourseDetailsPage = lazy(() => import('./pages/CourseDetailsPage'));
const OrderSummary = lazy(() => import('./pages/OrderSummary'));

const App = () => (
  <Router>
    <Suspense fallback={<div className="text-center p-8">Loading...</div>}>
      <Routes>
        <Route path="/" element={<CourseListingPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/course/:id" element={<CourseDetailsPage />} />
        <Route path="/order-summary" element={<OrderSummary />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
