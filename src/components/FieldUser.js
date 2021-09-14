import {React} from 'react'

import '../styles/FieldUser.css'
import { GreenButton } from './GreenButton'
import {useHistory } from "react-router-dom";

export const FieldUser = () => {

    const history = useHistory();
    const handleCourses =  () => {
        history.push("/agendar-canchas");
    };

    return (
        <div className="field">
            <div className="field__title">CANCHAS</div>
            <div className="field__table"></div>
            <div className="field__button">
                <GreenButton button_name="Agendar cancha" button_func={handleCourses}/>
            </div>
        </div>
    )
}
