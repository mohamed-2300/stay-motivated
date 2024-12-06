import React from 'react';

function ExerciseList({ exercises, title }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-xl mt-4">
      <h3 className="text-xl text-yellow-400 mb-2">{title}</h3>
      <ul className="list-disc pl-6 text-gray-300">
        {exercises.map((exercise, index) => (
          <li key={index} className="mb-1">{exercise}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExerciseList;
