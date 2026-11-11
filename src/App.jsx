import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { Toaster } from "react-hot-toast";
import Loader from "./components/Loader";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);
    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <div className="App">
      <Router basename={import.meta.env.BASE_URL.replace(/\/$/, '')}> 
        {/* The basename allows github.io/portfolio/ to work properly instead of strictly requiring home to be at github.io/ . */}
        {/* The "replace" bit is to remove trailing slashes that can mess with basename's expected input. */}
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
      <Toaster />
    </div>
  );
};

export default App;
