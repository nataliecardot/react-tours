import React, { useState } from 'react';

const Tour = ({ id, image, info, price, name }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        {/* substring: characters including spaces and punctuation */}
        <p>
          {readMore ? info : `${info.substring(0, 200).trim()}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Show less...' : 'Read more...'}
          </button>
        </p>
        <button className="delete-btn">Not Interested</button>
      </footer>
    </article>
  );
};

export default Tour;
