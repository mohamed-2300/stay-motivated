import React, { useState } from 'react';
import Header from './Header';
import ActivityForm from './ActivityForm';
import ActivityList from './ActivityList';
import ProgressChart from './ProgressChart';
import FitnessPhotos from './FitnessPhotos';

function App() {
  const [activities, setActivities] = useState([]);
  const [chartData, setChartData] = useState([]);

  const addActivity = (activity) => {
    setActivities([...activities, activity]);
    const newChartData = [...chartData, { name: `Jour ${activities.length + 1}`, calories: activity.calories }];
    setChartData(newChartData);
  };

  return (
    <div className="bg-black text-white">
      <Header />
      <div className="mt-20 bg-black text-white min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center p-6 text-yellow-400">
        Suivi d'activités sportives
      </h1>
      <div className="w-full max-w-screen-lg p-4">
        <FitnessPhotos />
      </div>
    </div>
      <div className="container mx-auto p-4">
        <ActivityForm addActivity={addActivity} />
        <ActivityList activities={activities} />
        <ProgressChart data={chartData} />
      </div>
    </div>
  );
}

export default App;
