// Objetivos:
// Recibir habitos
// Renderizar un HabitItem por cada hábito

import HabitItem from "../HabitItem/HabitItem"

function HabitList ({ habits, onToggleHabit, onDeleteHabit}) {
  return (
    <ul>
      {habits.map((habit) => (
        <HabitItem
          key= {habit.id}
          habit={habit}
          onToggle={onToggleHabit}
          onDelete={onDeleteHabit}
        />
      ))}
    </ul>
  );
}

export default HabitList;