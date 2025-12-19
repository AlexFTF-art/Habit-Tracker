import { useState } from "react";
import "./HabitForm.css"

function HabitForm({addHabit}) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name.trim() === "") return;
    addHabit(name);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit} className="habit-form">
      <label htmlFor="habit-input" className="habit-label">Escribe un Habito</label>
      <input
        className="habit-input"
        id="habit-input"
        type="text"
        placeholder="Escribe aqui..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button type="submit" className="habit-btn">Agregar</button>
    </form>
  );

}

export default HabitForm;