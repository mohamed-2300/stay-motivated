import React, { useState } from 'react';
import ExerciseList from './ExerciseList';

// Exemple de photos de fitness
const photos = [
    {
        id: 1,
        src: require('./assets/photos/arms.jpg'), // Assure-toi que l'image est dans le dossier correct
        description: 'ARMS WORKOUT',
        categorie: 'body building',
        exercises: ['Barbell Bicep Curl','Dumbbell Hammer Curl','Tricep Dips','Tricep Pushdowns','EZ Bar Preacher Curl','Overhead Tricep Extension']
      },
      {
        id: 2,
        src: require('./assets/photos/backs.jpg'),
        description: 'BACK WORKOUT',
        categorie: 'body building',
        exercises:['Deadlift', 'Pull-ups', 'Bent-over Barbell Row', 'Lat Pulldown', 'T-Bar Row', 'Seated Cable Row']
      },
      {
        id: 3,
        src: require('./assets/photos/cardio.jpg'),
        description: 'CARDIO',
        categorie: 'body building',
        exercises:['Running', 'Cycling', 'Jump Rope', 'Rowing', 'Stair Climbing', 'High-Intensity Interval Training (HIIT)']
      },
      {
        id: 4,
        src: require('./assets/photos/chest.jpg'),
        description: 'CHEST WORKOUT',
        categorie: 'body building',
        exercises:['Barbell Bench Press', 'Incline Dumbbell Press', 'Chest Dips', 'Flat Dumbbell Flyes', 'Cable Chest Flyes', 'Push-ups']
      },
      {
        id: 5,
        src: require('./assets/photos/legs.jpg'),
        description: 'LEGS WORKOUT',
        categorie: 'body building',
        exercises:['Squats', 'Leg Press', 'Lunges', 'Deadlifts', 'Leg Extensions', 'Hamstring Curls']
      },
      {
        id: 6,
        src: require('./assets/photos/stretsh.jpg'),
        description: 'STRETSH MUSCLES',
        categorie: 'calesthenics',
        exercises:['Hamstring Stretch', 'Quadriceps Stretch', 'Hip Flexor Stretch', 'Chest Stretch', 'Shoulder Stretch', 'Triceps Stretch']
      },
      {
        id: 7,
        src: require('./assets/photos/handstand.jpg'),
        description: 'HAND STAND',
        categorie: 'calesthenics',
        exercises:['Wall Handstand', 'Freestanding Handstand', 'Handstand Push-ups', 'Handstand Holds', 'Wall Walks', 'Handstand Shoulder Taps']
      },
      {
        id: 8,
        src: require('./assets/photos/L set.jpg'),
        description: 'L-SET',
        categorie: 'calesthenics',
        exercises:['L-Sit Hold', 'L-Sit to Handstand', 'L-Sit Leg Raises', 'L-Sit to V-Sit', 'L-Sit Crunches', 'L-Sit on Parallettes']
      },
      {
        id: 9,
        src: require('./assets/photos/muscle up.jpg'),
        description: 'MUSCLE UP',
        categorie: 'calesthenics',
        exercises:['Pull-up to Muscle-up', 'Chest-to-Bar Pull-ups', 'False Grip Pull-ups', 'Dips (for muscle-up strength)', 'Explosive Pull-ups', 'Muscle-up Progression (using a band or assisted machine)']
      }
];

function FitnessPhotos() {
  const [selectedExercises, setSelectedExercises] = useState(null);

  // Fonction appelée lors du clic sur une photo
  const handlePhotoClick = (exercises, description) => {
    setSelectedExercises({ exercises, description });
  };

  // Fonction pour fermer la fenêtre modale
  const closeModal = () => {
    setSelectedExercises(null);
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 p-4">
        {photos.map((photo) => (
          <div key={photo.id} className="border-2 border-yellow-400 p-2">
            <img
              src={photo.src}
              alt={photo.description || 'Photo de fitness'}
              className="w-full h-auto rounded-lg shadow-lg cursor-pointer"
              onClick={() => handlePhotoClick(photo.exercises, photo.description)}
            />
            <p className="mt-2 text-center text-gray-300">{photo.description || 'Fitness Image'}</p>
          </div>
        ))}
      </div>

      {/* Si `selectedExercises` n'est pas null, afficher la fenêtre modale */}
      {selectedExercises && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-black text-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-2xl"
            >
              X
            </button>
            <h2 className="text-2xl font-bold mb-4">
              {`Workout to do: ${selectedExercises.description}`}
            </h2>
            <ExerciseList exercises={selectedExercises.exercises} />
          </div>
        </div>
      )}
    </div>
  );
}

export default FitnessPhotos;
