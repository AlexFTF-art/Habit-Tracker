import { useState } from "react";

function HabitForm({addHabit}) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name.trim() === "") return;

    addHabit(name);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="habit-input">Escribe una Habito</label>
      <input 
        id="habit-input"
        type="text"
        placeholder="Escribe aqui..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button type="submit">Agregar</button>
    </form>
  );

}

export default HabitForm;