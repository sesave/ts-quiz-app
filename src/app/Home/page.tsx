import React from "react";
import QuizCard from "src/components/QuizCard/QuizCard";

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
      <div className="intro-box">
        <div className="intro-texts">
          <h1 className="intro-title">English Vocabulary Quizzes</h1>
          <p className="intro-description">Choose the quiz you want to solve</p>
        </div>
        <div className="intro-icon">
          <i className="bi bi-question-circle"></i>
        </div>
      </div>
      <div className="flex items-stretch">{mockQuizes.map((quiz: MockQuizes, i: number) => {
        return <QuizCard key={i} title={quiz.title} link={quiz.link} description={quiz.description}/>;
      })}</div>
    </div>
  );
}

export default Home;
