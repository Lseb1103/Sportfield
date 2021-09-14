import {React} from 'react'

import '../styles/Profile.css'
import profile_photo from '../images/dragonball.png'

export const Profile = () => {




    return (
        <div className="profile">
            <div className="profile__photo">
                <img src={profile_photo}/>
            </div>
            <div className="profile__data">
                <p><strong>Nombre: </strong>Eduardo Perez</p>
                <p><strong>Usuario: </strong>eduardoperez</p>
                <p><strong>Correo: </strong>eduardo@perez.com</p>
                <p><strong>Lote: </strong>311</p>

            </div>
        </div>
    )
}
