import React from 'react'
import './Navig.css';

const Navig = ({profils}) => {
    const profilsList = profils.length ? 
    (
        profils.map(profil => {
            return (
                <div className="names" key={profil.id}>
                    <p>
                        {profil.firstname}
                    </p>
                </div>
            )
        })
    ) : 
    (
        <p className="center"> Il n'y a aucun profil dans la liste </p>
    )
    return(
        <div className="navigation">
            {profilsList}
        </div>
    )
}

export default Navig