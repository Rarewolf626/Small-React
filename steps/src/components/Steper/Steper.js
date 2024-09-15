import { useState } from "react";

export function Steper(){
    const [activeStep, setActiveStep] = useState(2);
    let numbers = [...Array(4).keys()]

    function setStepper(direction){
        let newStep = direction + activeStep; 
        
        if(newStep === -1){
            setActiveStep(numbers.length-1);
            return
        }

        if(newStep === numbers.length){
            setActiveStep(numbers[0]);
            return
        }

        setActiveStep(newStep);
    }


    return(
        <div className="steps">

            <div className="numbers">
                {
                    numbers.map(number => (
                        <div key={number} className={"step-number " + (activeStep === number ? "active" :"")}>{number}</div>
                    ))
                }
            </div>

            <div className="message">
                Hello 😁
            </div>

            <div className="buttons">
                <button onClick={()=> setStepper(-1)}  className="action">
                    Back
                </button>
                
                <button onClick={()=> setStepper(1)} className="action">
                    Next
                </button>

            </div>
        </div>
    );

}