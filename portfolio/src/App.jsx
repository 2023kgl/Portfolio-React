import { useState } from 'react';
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import ProjectsPage from './components/Pages/Projects'
import Navigation from './components/Navigation';
import Resume from './components/Pages/Resume';


function App() {

  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Projects') {
      return <ProjectsPage />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    
  <div>
  <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
  <main className="mx-2">{renderPage()}</main>
</div>

  )
}

export default App
