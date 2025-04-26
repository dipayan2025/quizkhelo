
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Quiz from './components/Quiz/Quiz';
import About from './components/About';
import Contact from './components/Contact';
import './index.css'


function App() {
  const headingStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: '1rem',
  };
  



  return (
    <Router>
      
        <Navbar />
        <main className="p-4 min-h-screen bg-gray-50 dark:bg-gray-900">
        <h1 style={headingStyle}>Welcome to QuizMaster!</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      
    </Router>
  );
}

export default App;
