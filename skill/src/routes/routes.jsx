import { BrowserRouter,  Routes, Route, Link  } from "react-router-dom";
import ExerciseOne from "../Views/ExerciseOne";
import ExerciseTwo from "../Views/ExerciseTwo";

const  RoutesCustomComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/exercise1" element={<ExerciseOne />} />
                <Route path="/exercise2" element={<ExerciseTwo />} />
            </Routes>
        </BrowserRouter>

    );
}

export default RoutesCustomComponent;
