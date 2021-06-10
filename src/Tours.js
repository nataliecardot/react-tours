import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, removeTour }) => {
  return (
    // <section>: Used to either group different articles into different purposes or subjects, or to define the different sections of a single article. In this case section is grouping articles
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          // {...tour} spreads (spread syntax) the properties in the tour object on the props object the Tour component will receive
          return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>;
        })}
      </div>
    </section>
  );
};

export default Tours;
