// Objetivos:
// Mostrar nombre
// Mostrar estado (completado / pendiente)
// Botón eliminar

import "./HabitItem.css";

function HabitItem({ habit, onToggle, onDelete }) {
  return (
    <li className={`habit-item ${habit.completed ? "completed" : ""}`}
        onClick={() => onToggle(habit.id)}>
      <div
        className="habit-name"
      >
        
        {habit.name}
      </div>

      <div
        className="habit-delete-btn"
        onClick={(e) => {
          e.stopPropagation();
          onDelete(habit.id)
        }}
      >
        X
      </div>
    </li>
  );
}

export default HabitItem;