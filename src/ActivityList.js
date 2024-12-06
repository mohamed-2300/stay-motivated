import React from 'react';

function ActivityList({ activities }) {
  return (
    <div className="p-4">
      {activities.map((activity, index) => (
        <div key={index} className="border-b py-2">
          <p>Activité: {activity.activity}</p>
          <p>Calories: {activity.calories}</p>
        </div>
      ))}
    </div>
  );
}

export default ActivityList;
