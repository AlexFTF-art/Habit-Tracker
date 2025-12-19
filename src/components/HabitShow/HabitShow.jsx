import "./HabitShow.css"

function HabitShow ({total, completada, pendiente}) {
  return(
    <div className="habit-show">
    <p>total: {total}</p>
    <p className="habit-completed">completados:{completada}</p>
    <p className="habit-pending">pendientes: {pendiente}</p>
    </div>
  );
}

export default HabitShow;