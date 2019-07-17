import React from 'react';

const TriviaCard = ({question, correct_answer}) => {
  return (
    <div className='card'>
      <h3>{question}</h3>
      <p>{correct_answer}</p>
    </div>
  )
}

export default TriviaCard;
