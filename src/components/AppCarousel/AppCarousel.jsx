import React, { useState } from 'react';
import CardWrapper from "./AppWrapper";
import WordCard from "../AppWordCard/AppWordCard";
import { useWordsContext } from '../../hooks/useWordsContext';

    const AppCarousel = () => {
      const [wordsLearned, setWordsLearned] = useState(0);
      const [index, setIndex] = useState(0);
      const { words } = useWordsContext();

      const handleViewTranslation = () =>
        setWordsLearned(prev => prev + 1);

      const handlePrev = () =>
        setIndex(prev => (prev === 0 ? words.length - 1 : prev - 1));

      const handleNext = () =>
        setIndex(prev => (prev === words.length - 1 ? 0 : prev + 1));
      return (
        <>
            <CardWrapper
            onPrev={handlePrev}
            onNext={handleNext}
            currentIndex={index}
            total={words.length}
            wordsLearned={wordsLearned}
          >
            <WordCard word={words[index]} onViewTranslation={handleViewTranslation} />
          </CardWrapper>
        </>
      )
  };
export default AppCarousel;
    


