import React, { useState } from "react";

const HabitForm = ({ addHabit }) => {
  const [habit, setHabit] = useState({
    name: "",
    reminderTime: "",
    goalDays: 1,
    initialGoalDays: 1,
  }); // Add initialGoalDays

  const handleHabitChange = (event) => {
    setHabit((prevHabit) => ({ ...prevHabit, name: event.target.value }));
  };

  const handleReminderChange = (event) => {
    setHabit((prevHabit) => ({
      ...prevHabit,
      reminderTime: event.target.value,
    }));
  };

  const handleGoalDaysChange = (event) => {
    const goalDays = parseInt(event.target.value);
    setHabit((prevHabit) => ({
      ...prevHabit,
      goalDays,
      initialGoalDays: goalDays, // Store initial goal days
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (habit.name.trim() !== "") {
      addHabit(habit);
      setHabit({ name: "", reminderTime: "", goalDays: 0, initialGoalDays: 0 }); // Reset goalDays and initialGoalDays
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type='text'
        value={habit.name}
        onChange={handleHabitChange}
        placeholder='Enter a new habit'
      />
      <input
        type='text'
        value={habit.reminderTime}
        onChange={handleReminderChange}
        placeholder='Enter reminder time (e.g., 12:00)'
      />
      <input
        type='number'
        value={habit.goalDays}
        onChange={handleGoalDaysChange}
        placeholder='Enter goal days'
      />
      <button type='submit'>Add Habit</button>
    </form>
  );
};

export default HabitForm;
