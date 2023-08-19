import React from "react";
import Hero from "src/components/Hero/Hero";
import QuizCard from "src/components/QuizCard/QuizCard";
import styles from './home.module.css'

export type MockQuizes = {
  title: string;
  link: string;
  description: string;
};

function Home() {
  const mockQuizes: MockQuizes[] = [
    {
      title: "Flags",
      link: "/quiz/flags",
      description: "Identify flags for the whole world",
    },
    {
      title: "Languages",
      link: "/;quiz/languages",
      description: "Try to discover what language is showed to you",
    },
    {
      title: "Metal Genres",
      link: "/quiz/metalgenres",
      description:
        "The quiz will show you a band and you have to discover it genre",
    },
  ];
  return (
    <div className="home">
      <Hero/>
      <div className={`flex items-stretch ${styles.quizCards__container} flex-col lg:flex-row`}>
        {mockQuizes.map((quiz: MockQuizes, i: number) => {
          return (
            <QuizCard
              key={i}
              title={quiz.title}
              link={quiz.link}
              description={quiz.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
