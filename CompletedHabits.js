import React from "react";

const CompletedHabits = ({ completedHabits, onClose }) => {
  return (
    <div className='completed-habits-modal'>
      <div className='completed-habits-content'>
        <h2>Completed Habits</h2>
        <ul>
          {completedHabits.map((habit, index) => (
            <li key={index}>
              {habit.name} -{" "}
              {habit.name !== undefined
                ? `Goal achieved in ${habit.initialGoalDays} days`
                : "No goal set"}
            </li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CompletedHabits;
