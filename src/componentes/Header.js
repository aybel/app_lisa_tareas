import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';

const Header = ({ texto, mostrarCompletadas, cambiarMostrarCompletadas }) => {

    const btnCompletadas = () => {
        cambiarMostrarCompletadas(!mostrarCompletadas);
    }

    return (
        <header className='header'>
            <h1 className='header__titulo'>
                {texto}
            </h1>
            {mostrarCompletadas ?
                <button
                    className="header__boton"
                    onClick={() => btnCompletadas()}
                >
                    No mostrar completadas
                    <FontAwesomeIcon icon={faEyeSlash} className="header__icono-boton" />
                </button>
                :
                <button
                    className="header__boton"
                    onClick={() => btnCompletadas()}
                >
                    Mostrar completadas
                    <FontAwesomeIcon icon={faEye} className="header__icono-boton" />
                </button>
            }

        </header>
    );
}

export default Header;