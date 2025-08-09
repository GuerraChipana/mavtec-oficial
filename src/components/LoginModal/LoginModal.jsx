import React from "react";
import "./LoginModal.css";

const LoginModal = ({ closeLoginModal }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Login enviado");
    };

    return (
        <>
            <div className="login-comp-backdrop" onClick={closeLoginModal}></div>
            <div className="login-comp-modal">
                <div className="login-comp-content">
                    <button className="login-comp-close-button" onClick={closeLoginModal}>
                        &times;
                    </button>
                    <h2 className="login-comp-title">Iniciar Sesión</h2>
                    <form className="login-comp-form" onSubmit={handleSubmit}>
                        <div className="login-comp-group">
                            <label>Email</label>
                            <input type="email" required placeholder="tucorreo@ejemplo.com" />
                        </div>
                        <div className="login-comp-group">
                            <label>Contraseña</label>
                            <input type="password" required placeholder="••••••••" />
                        </div>
                        <button type="submit" className="login-comp-submit">
                            Ingresar
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LoginModal;
