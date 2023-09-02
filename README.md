Step 1: Unique Habit Names (Using Index)

- When adding habits in the HabitForm:
- Ensure the input field captures the habit name.
- Check if the habit name already exists
in the habits array.
- If it does, append the index of the habit to the
name (e.g., "Exercise (2)") to make it unique.
- If not, use the entered name as is.

Step 2: Implement a "Complete" Button

- In the HabitList component:
- Add a "Complete" button for each habit.
- Create a function called handleCompleteClick
to handle the button click event.
- Pass the habit's index to this function
when the button is clicked.
- Inside handleCompleteClick, you will:
- Check if the habit's goal days are greater
than 0.
- If yes, decrement the goal days by 1.
- Update the habit with the new goal days
using the updateHabit function.
- If the goal days become 0, move the habit
to the completedHabits array 
using setCompletedHabits.

Step 3: Add Goal Days Input

- Modify the HabitForm component to include:
- An input field for the user to specify the
goal days when adding a new habit.
- Create a state variable (e.g., goalDays)
to capture the value entered in this input field.
- Implement an event handler 
(e.g., handleGoalDaysChange) to update the
goalDays state when the user enters a value.

Step 4: Create a Toggle for Completed Habits

- In your app's navigation menu:
- Create a button (e.g., "Show Completed Habits")
to toggle the display of completed habits.
- Implement a state variable
(e.g., showCompletedHabits) and a function
(e.g., toggleCompletedHabits) to control
this toggle.
- When the button is clicked, it should toggle
the showCompletedHabits state between true and false.

Step 5: Move Completed Habits Automatically

- In the HabitList component:
- When a habit's goal days reach 0:
- Check if the habit's goalDays is greater than 0.
- If it is, decrement the goal days by 1.
- Update the habit with the new goal days using
the updateHabit function.
- If the updated goalDays become 0, move the habit
to the completedHabits array using setCompletedHabits.

Step 6: Display Completed Habits and Days Taken

- Create a new component (e.g., CompletedHabits)
to display completed habits.
- Pass the completedHabits array as a prop to
this component.
- Inside the CompletedHabits component:
- Use the map function to iterate through the
completedHabits array.
- Display the details of each completed habit,
including the name and the number of days
taken to achieve the goal.

Step 7: Display a Message for Achieved Goals

- In the HabitList component:
- When rendering completed habits, check if the 
goalDays of the habit is 0.
- If goalDays is 0, display a message such as
"Goal achieved in X days," where X is the number
of days taken to achieve the goal.
- This message should replace the goalDays display
for completed habits.

Step 8: Display "day" or "days" Based on the Number

- In your rendering logic:
- When displaying the message for achieved goals,
check if the number of days taken is 1.
- If it is, display "day" (e.g., "Goal achieved in 1 day").
- If the number is greater than 1, display "days"
(e.g., "Goal achieved in 5 days").
