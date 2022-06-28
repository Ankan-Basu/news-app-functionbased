import { useState } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import About from './Components/About';

const App = () => {
  let categories = ['General', 'Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology'];

  const [progress, setProgress] = useState(0);

  let apiKey = process.env.REACT_APP_API_KEY;

  return (
    <>
      <Router>
        <Navbar categories={categories} />
        <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />

        <Routes>

          <Route path='/' element={<About />} />
          {categories.map((item) => {
            return (
              <Route path={`/${item.toLowerCase()}`} element={<News apiKey={apiKey} category={item} country="us" pageSize={9} setProgress={setProgress} key={item} />} key={item} />);
          })}

        </Routes>
      </Router>
    </>
  );
}

export default App;
