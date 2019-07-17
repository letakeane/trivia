import React from 'react';
import TriviaCard from './TriviaCard';

const TriviaSection = ({trivia}) => {
  const triviaCards = trivia.map(question => {
    return <TriviaCard {...question} />;
  });

  return (
    <section>
      {triviaCards}
    </section>
  )
}

export default TriviaSection;
