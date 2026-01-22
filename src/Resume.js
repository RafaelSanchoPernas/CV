import React from "react";
import data from "./data.json";

export default function Resume() {
  const { personal, experience, education, skills } = data;

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-start p-8 font-sans">
      <div className="max-w-6xl w-full grid md:grid-cols-3 gap-12">

        {/* LINKER BEREICH: Bild + persönliche Infos + Skills */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          {/* Bild */}
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500">
            <img
              src={personal.image}
              alt="Profilbild"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Persönliche Infos */}
          <div className="space-y-1 text-center md:text-left">
            <h1 className="text-4xl font-bold text-blue-400">{personal.name}</h1>
            <p>{personal.address}</p>
            <p>{personal.phone}</p>
            <p>{personal.email}</p>
            {personal.github && (
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline"
              >
                GitHub
              </a>
            )}
          </div>

          {/* Skills */}
          <div className="w-full space-y-3 mt-6">
            <h2 className="text-2xl font-semibold text-orange-400 mb-2">Skills</h2>
            {Object.keys(skills).map((category) => (
              <div key={category}>
                <p className="font-semibold text-blue-300">{category}</p>
                <p className="text-gray-300">{skills[category].join(", ")}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RECHTER BEREICH: Erfahrung + Ausbildung */}
        <div className="md:col-span-2 flex flex-col justify-start space-y-10">

          {/* Berufserfahrung */}
          <div>
            <h2 className="text-3xl font-bold text-blue-400 mb-6">Berufserfahrung</h2>
            {experience.map((job, idx) => (
              <div key={idx} className="mb-6 space-y-2">
                <p className="font-semibold text-green-400">{job.period} – {job.position}</p>
                <p className="italic text-gray-300">{job.company}</p>
                <ul className="list-disc list-inside ml-5 text-gray-300">
                  {job.tasks.map((task, tIdx) => (
                    <li key={tIdx}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Ausbildung */}
          <div>
            <h2 className="text-3xl font-bold text-orange-400 mb-6">Ausbildung</h2>
            {education.map((edu, idx) => (
              <div key={idx} className="mb-4">
                <p className="font-semibold text-green-400">{edu.period} – {edu.degree}</p>
                <p className="italic text-gray-300">{edu.school}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
