import React, { useEffect, useState } from 'react'
import { /* BrowserRouter,*/ Routes, Route, useLocation } from 'react-router-dom';

import './App.scss';
import PageLayout from './layouts/PageLayout';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import About from './pages/About/About';

export default function App() {

  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("route_fade_in");

  useEffect(() => {
    if (location !== displayLocation) setTransitionStage("route_fade_out");
  }, [location, displayLocation]);


  return (
    <div
      className={transitionStage}
      onAnimationEnd={() => {
        if (transitionStage === "route_fade_out") {
          setTransitionStage("route_fade_in");
          setDisplayLocation(location);
        }
      }}
    >
      <Routes location={displayLocation}>
        <Route path='/' element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  )
}

// TODO:  
//  - if images take time to load, add loading to whole page until all images are loaded and only then allow showing of page to user (unlikely)
//  - Reduce spacing between skills and reduce images' size slightly (on all media breakpoints)

//  - Add to each project the main skills displayed and display then as tiny icons on the right/up/left of project image when we hover/click it (probably make them appear smothly just like the "View Website" and "Code" buttons)
//    - Add to all media styles the new .single_project_container_wrapper class (Projects.module.scss line 50)
//    - Fix skill icons styling (size and position) in mobile
//    - Tweak animation timings (.single_project_anchors_container put transition to control timing of anchors showing on mobile). The rest of timings is great
//    - on mobile, add a &hover selector such as, when user hovers on .single_project_skills_container, the adjacent sibling .single_project_container .single_project_description_container .single_project_anchors_container becomes visible
