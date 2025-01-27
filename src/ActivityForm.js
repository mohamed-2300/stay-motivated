import React, { useState } from 'react';

function ActivityForm({ addActivity }) {
  const [activity, setActivity] = useState("");
  const [calories, setCalories] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addActivity({ activity, calories });
    setActivity("");
    setCalories("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        placeholder="Type d'activité"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
        className="text-black border-2 p-2 mb-2 w-full"
      />
      <input
        type="number"
        placeholder="Calories brûlées"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        className="text-black border-2 p-2 mb-2 w-full"
      />
      <button type="submit" className="hover:bg-yellow-600 duration-300 ease-out scale-100 hover:scale-105 bg-yellow-400 p-2 w-full">Ajouter</button>
    </form>
  );
}

export default ActivityForm;
