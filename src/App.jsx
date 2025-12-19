import { useState } from "react"
import HabitForm from "./components/HabitForm/HabitForm"
import HabitList from "./components/HabitList/HabitList"
import "./App.css";

const savedHabits = localStorage.getItem("habits");
const initHabits = savedHabits ? JSON.parse(savedHabits) : [];

function App() {
  const [habits, setHabits] = useState(initHabits);

  const addHabit = (name) => {
    const newHabit = {
      id: Date.now(),
      name,
      completed: false
    }
    const updateHabits = [...habits, newHabit];
    setHabits(updateHabits);
    localStorage.setItem("habits", JSON.stringify(updateHabits));
  }


  const toggleHabit = (id) => {
    const updateHabits = habits.map((habit) => habit.id === id ? 
      {...habit, completed: !habit.completed} : habit
      )
      setHabits(updateHabits);
      localStorage.setItem("habits", JSON.stringify(updateHabits));
  }

  const deleteHabit = (id) => {
    const updateHabits = (habits.filter((habit) => habit.id !== id));
    setHabits(updateHabits);
    localStorage.setItem("habits", JSON.stringify(updateHabits));
  }

  const total = habits.length;
  const completed = habits.filter((h) => h.completed).length;
  const pending = total - completed;

  return (
    <div className="App">
      <header>
        <h1>Habit Tracker</h1>
      </header>

      <main>

        <HabitForm addHabit={addHabit}/>

        {total === 0 ? (
          // Espacio para HabitEmpty
          <p>No hay hábitos</p>
        ) : ( 
          <>
            {/* Espacio para habitShow */}
            <div className="habit-summary">
              <p>Total: {total}</p>
              <p>Completados: {completed}</p>
              <p>Pendientes: {pending}</p>
            </div>

            <HabitList 
              habits={habits}
              onToggleHabit={toggleHabit}
              onDeleteHabit={deleteHabit}
            />
          </>
        )}

      </main>

      <footer>
        <p>© 2025 Habit Tracker App</p>
      </footer>

    </div>
  )
}

export default App