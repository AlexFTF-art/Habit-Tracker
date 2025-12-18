// Objetivos:
// Mostrar nombre
// Mostrar estado (completado / pendiente)
// Botón eliminar

function HabitItem({habit, onToggle, onDelete}) {
  return (
    <li>
    <span 
      onClick={() => onToggle(habit.id)}
      style={{textDecoration: habit.completed ? "line-through" : "none", cursor: "pointer"}}>
        {habit.name}
    </span>

    <button onClick={() => onDelete(habit.id)}>X</button>

    </li>
    
  );
}

export default HabitItem;