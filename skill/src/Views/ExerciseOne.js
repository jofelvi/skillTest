import React, {useEffect} from 'react';
import MultiSlider from "../components/multiSlider/multiSlider";
import {getValueRangeSlider} from "../store/Utils/Actions";
import {useDispatch, useSelector} from "react-redux";

const ExerciseOne = () => {

    const dispatch = useDispatch();

    const { multiRangeSlider } = useSelector(state => state.utils);

    useEffect(()=>{
        callApiValueSlide()
    }, [multiRangeSlider.min])

    const callApiValueSlide =async ()=>{
       await dispatch(getValueRangeSlider())
    }

    return (
        <div>
            <label>
                ejercicio Uno
            </label>

            <MultiSlider
                min={multiRangeSlider.min || 0.99}
                max={multiRangeSlider.max || 100}
                onChange={({ min, max }) => console.log(`Minimo = ${min}, Maximo = ${max}`)}
                disabled={false}
                symbol={multiRangeSlider.symbol || "€"}
            />
        </div>
    )
}
export default ExerciseOne;
