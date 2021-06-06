import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    const response = await fetch(url);
    const tours = await response.json(); // Parse HTTP response as JSON object
  };

  // Invoke fetchTours once app component has rendered
  // Passing [] (empty dependency array) as second arg ensures it's only called once, after initial render - by default useEffect is called after first render and after every rerender
  useEffect(() => fetchTours(), []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      <Tours />
    </main>
  );
}

export default App;
