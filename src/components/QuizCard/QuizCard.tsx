import Link from "next/link";
import React from "react";
import { MockQuizes } from "src/app/Home/page";

function QuizCard({ title, link, description }: MockQuizes) {
  return (
    <div className="w-4/12">
      <div className="mx-auto max-w-xl py-2 px-2 h-full">
        <div className="relative h-full isolate overflow-hidden bg-gray-900 px-6 shadow-2xl sm:rounded-3xl">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left py-8 ">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {description}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                href={link}
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Start Quiz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizCard;
