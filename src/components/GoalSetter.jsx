import { useState } from 'react';

function GoalSetter() {
  const [goal, setGoal] = useState('');
  const [goalsList, setGoalsList] = useState([]);

  const addGoal = () => {
    if (goal.trim() !== '') {
      setGoalsList([...goalsList, goal]);
      setGoal('');
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>Set Your Goals</h2>
      <input
        type="text"
        value={goal}
        placeholder="Write your goal..."
        onChange={(e) => setGoal(e.target.value)}
      />
      <button onClick={addGoal}>Add Goal</button>

      <ul>
        {goalsList.map((g, index) => (
          <li key={index}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default GoalSetter;