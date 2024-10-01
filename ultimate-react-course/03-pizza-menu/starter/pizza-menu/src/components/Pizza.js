function Pizza(props) {
  return (
    <div>
      <img src={props.pizza.photoName} alt={props.pizza.name}></img>
      <h3>{props.pizza.name}</h3>
      <p>{props.pizza.ingredients}</p>
    </div>
  );
}

export default Pizza;
