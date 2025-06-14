import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Vacancy from './pages/vacancies.jsx';
import Navbar from './components/navbar.jsx';
import VacancyNavbar from './components/VacancyNavbar.jsx';
import JobStatus from './pages/JobStatus.jsx';  
import ApplyJob from './pages/ApplyJob.jsx'; 
import JobCreation from './pages/JobsForYou/JobCreation.jsx';
import JobModification from './pages/JobsForYou/JobModification.jsx';
import ReceivedCVs from './pages/JobsForYou/Received.jsx';
import AcceptedCVs from './pages/JobsForYou/AcceptedCV.jsx';


function App() {

  return (
    <Router>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="/mainhome"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
            </>
          }
        />
        <Route
          path="/vacancies"
          element={
            <>
              <VacancyNavbar />
              <Vacancy />
            </>
          }
        />
        <Route
          path="/applied-job"
          element={
            <>
              <VacancyNavbar />
              <JobStatus />
            </>
          }
        />
        <Route
          path="/apply"
          element={
            <>
              <VacancyNavbar />
              <ApplyJob />
            </>
          }
        />
        <Route
          path="/vacancy-creation"
          element={
            <>
              <VacancyNavbar />
              <JobCreation />
            </>
          }
        />
        <Route
          path="/job-creation"
          element={
            <>
              <VacancyNavbar />
              <JobCreation />
            </>
          }
        />
        <Route
          path="/job-modification"
          element={
            <>
              <JobModification />
              <VacancyNavbar />
            </>
          }
        />
        <Route
          path="/received-cvs"
          element={
            <>
              <ReceivedCVs />
              <VacancyNavbar />
            </>
          }
        />
        <Route
          path="/accepted-cvs"
          element={
            <>
              <AcceptedCVs />
              <VacancyNavbar />
            </>
          }
        />
      
      </Routes>
    </Router>
  );
}

export default App;
