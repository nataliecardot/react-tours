import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  // Invoke fetchTours once app component has rendered
  // Passing [] (empty dependency array) as second arg ensures it's only called once, after initial render - by default useEffect is called after first render and after every rerender
  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);

      // Catch network errors
      try {
        const response = await fetch(url);
        // Despite the method being named json(), the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object https://developer.mozilla.org/en-US/docs/Web/API/Body/json
        const tours = await response.json();
        setLoading(false);
        setTours(tours);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      {/* removeTour: example of prop drilling - down 2 levels (note, Context API is a way around it) */}
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
