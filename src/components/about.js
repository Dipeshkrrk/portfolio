import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-gray-900 text-white">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            Hi, I'm Dipesh.
            <br className="hidden lg:inline-block" />I love to build amazing web
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            This is my Basic portfolio. I will make changes in near future and here i want to just showcase some projects that i have created.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
