import { useState } from "react"
import "./App.css";
import HabitForm from "./components/HabitForm/HabitForm"
import HabitList from "./components/HabitList/HabitList"
import HabitShow from "./components/HabitShow/HabitShow";
import HabitEmpty from "./components/HabitEmpty/HabitEmpty";

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
    <div>
      <header className="header-container">
        <h1>Habit Tracker</h1>
      </header>

      <main className="main-container">

        <HabitForm addHabit={addHabit}/>

        {total === 0 ? (
          <HabitEmpty/>
        ) : ( 
          <>
            
            <HabitShow
            total={total}
            completada={completed}
            pendiente={pending}
          />

            <HabitList 
              habits={habits}
              onToggleHabit={toggleHabit}
              onDeleteHabit={deleteHabit}
            />
          </>
        )}

      </main>

      <footer className="footer-container">
        <p>© 2025 Habit Tracker App</p>
      </footer>

    </div>
  )
}

export default App