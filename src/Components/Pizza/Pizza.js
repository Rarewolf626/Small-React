function Pizza(props) {
    return (
        <div>
            {props.pizza.name} 
            <img src= {require(`../../../public/pizzas/${props.pizza.photoName}`)}/>
        </div>
    );
}

export default Pizza;
