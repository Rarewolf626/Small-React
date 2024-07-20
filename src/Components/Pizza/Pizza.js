function Pizza(props) {
    return (
        <div>
            {props.pizza.name}
            <img src={props.pizza.photoName}/>
        </div>
    );
}

export default Pizza;
