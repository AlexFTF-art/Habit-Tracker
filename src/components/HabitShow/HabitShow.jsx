function HabitShow ({total, completada, pendiente}) {
  return(
    <div>
    <p>total: {total}</p>
    <p>completados:{completada}</p>
    <p>pendientes: {pendiente}</p>
    </div>
  );
}


export default HabitShow;