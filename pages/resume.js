import React from "react";
import Header from "../components/Header";
import Head from "next/head";
import data from "../data/portfolio.json";

const Resume = () => {
  return (
    <>
      <Head>
        <title>{data.name} | Resume</title>
      </Head>
      <div className={`relative ${data.showCursor && "cursor-none"}`}>
        <div className="gradient-circle"></div>
        <div className="gradient-circle-bottom"></div>

        <div className="container mx-auto mb-10">
          <Header />
          <div className="mt-10">
            <h1 className="mx-auto text-4xl font-bold">{data.name}</h1>
            <h2 className="text-xl mt-5">{data.resume.tagline}</h2>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold">Experience</h2>
            <div className="mt-5">
              {data.resume.experiences.map((experience) => (
                <div key={experience.id} className="mt-5">
                  <h3 className="text-lg font-bold">{experience.position}</h3>
                  <p className="text-sm text-gray-500">{experience.dates}</p>
                  <p className="text-sm text-gray-500">{experience.type}</p>
                  <ul className="list-disc ml-5 mt-2">
                    {experience.bullets.split(", ").map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold">Education</h2>
            <div className="mt-5">
              <h3 className="text-lg font-bold">{data.resume.education.universityName}</h3>
              <p className="text-sm text-gray-500">{data.resume.education.universityDate}</p>
              <p className="mt-2">{data.resume.education.universityPara}</p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-bold">Languages</h2>
              <div className="mt-5">
                {data.resume.languages.map((language, index) => (
                  <span
                    key={index}
                    className="mr-3 text-sm bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-md"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Frameworks</h2>
              <div className="mt-5">
                {data.resume.frameworks.map((framework, index) => (
                  <span
                    key={index}
                    className="mr-3 text-sm bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-md"
                  >
                    {framework}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold">Other Skills</h2>
            <div className="mt-5">
              {data.resume.others.map((other, index) => (
                <span
                  key={index}
                  className="mr-3 text-sm bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-md"
                >
                  {other}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
