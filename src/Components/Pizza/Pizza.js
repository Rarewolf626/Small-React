import { useState } from 'react';
import './pizza.css';
import SweetAlert2 from 'react-sweetalert2';

function Pizza(props) {
    const [swalProps, setSwalProps] = useState({});
    return (
        <div className="single_pizza" onClick={() => openSweetAlert(props.pizza.name, props.pizza.ingredients)}>
            <img className="pizza_img" src={require(`../../../public/pizzas/${props.pizza.photoName}`)} alt={props.pizza.name} />
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
            <SweetAlert2 {...swalProps} didClose={() => {
                setSwalProps({
                    ...swalProps,
                    show: false,
                });
            }} />
        </div>
    );

    function openSweetAlert(name, ingredients) {
        setSwalProps({
            show: true,
            title: name,
            text: ingredients,
        });
    }

}


export default Pizza;
