import React, { useState } from "react";

const HabitList = ({
  habits,
  favoriteHabits,
  updateHabit,
  deleteHabit,
  toggleFavorite,
  setCompletedHabits,
}) => {
  const [editableHabitIndex, setEditableHabitIndex] = useState(-1);

  const handleEditClick = (index) => {
    setEditableHabitIndex(index);
  };

  const handleEditChange = (event, index) => {
    const updatedHabit = { ...habits[index], name: event.target.value };
    updateHabit(index, updatedHabit);
  };

  const handleEditSave = () => {
    setEditableHabitIndex(-1);
  };

  const handleCompleteClick = (index) => {
    const completedHabit = habits[index];
    if (completedHabit.goalDays > 0) {
      // Decrease the goal days by 1
      const updatedGoalDays = completedHabit.goalDays - 1;
      const updatedHabit = { ...completedHabit, goalDays: updatedGoalDays };
      updateHabit(index, updatedHabit);

      if (updatedGoalDays === 0) {
        // Move the habit to completedHabits when the goal is achieved
        setCompletedHabits((prevCompletedHabits) => [
          ...prevCompletedHabits,
          updatedHabit,
        ]);
      }
    }
  };

  return (
    <ul>
      {habits.map((habit, index) => (
        <li key={index}>
          {editableHabitIndex === index ? (
            <div>
              <input
                type='text'
                value={habit.name}
                onChange={(e) => handleEditChange(e, index)}
              />
              <button onClick={handleEditSave}>Save</button>
            </div>
          ) : (
            <div>
              <span>Habit name: {habit.name}</span>
              {habit.goalDays > 0 ? (
                <p>
                  Goal: {habit.goalDays} {habit.goalDays === 1 ? "day" : "days"}{" "}
                  left
                </p>
              ) : (
                <></>
              )}
              {habit.goalDays === 0 ? (
                <p>
                  Goal achieved in {habit.initialGoalDays}{" "}
                  {habit.initialGoalDays === 1 ? "day" : "days"}
                </p>
              ) : (
                <div>
                  <button onClick={() => handleEditClick(index)}>Edit</button>
                  <button onClick={() => deleteHabit(index)}>Delete</button>
                  <button
                    className={
                      favoriteHabits.includes(habit)
                        ? "favorite-button favorite"
                        : "favorite-button"
                    }
                    onClick={() => toggleFavorite(index)}
                  >
                    Favorite
                  </button>
                  <button onClick={() => handleCompleteClick(index)}>
                    Complete
                  </button>
                </div>
              )}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default HabitList;
