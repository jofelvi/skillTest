import React from 'react';
import MultiSlider from "../components/multiSlider/multiSlider";

const ExerciseTwo = () => {

    return (
        <div>
            <label>
                ejercicio Dos
            </label>

            <MultiSlider
                min={1}
                max={10000}
                onChange={({ min, max }) => console.log(`Minimo = ${min}, Maximo = ${max}`)}
                disabled={false}
                symbol={"€"}
            />
        </div>
    )
}
export default ExerciseTwo;
