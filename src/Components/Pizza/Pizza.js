import './pizza.css';

function Pizza(props) {
    return (
        <div className="single_pizza">
            <img className="pizza_img" src= {require(`../../../public/pizzas/${props.pizza.photoName}`)} alt={props.pizza.name}/>
            <div className="pizza_info">
                <div className="pizza_title">
                    {props.pizza.name}
                </div> 
                <div className="pizza_subtitle">
                    {props.pizza.ingredients}
                </div> 
                <div className="pizza_remaining">
                    {props.pizza.soldOut ? 'Sold Out' : props.pizza.price}
                </div> 
            </div>  
        </div>
    );
}

export default Pizza;
