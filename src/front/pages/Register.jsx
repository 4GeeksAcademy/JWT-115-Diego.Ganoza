import React, { useState } from "react";
import { registerUser } from "../serviceApi";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleOnchange = (e) => {
        const { name, value } = e.target
        setUser(prev => ({ ...prev, [name]: value }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        await registerUser(user, navigate)
    };

    return (
        <div style={styles.container}>
            <h2>Registro</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    value={user.email}
                    onChange={(e) => handleOnchange(e)}
                    required
                    style={styles.input}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={user.password}
                    onChange={(e) => handleOnchange(e)}
                    required
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>
                    Registrarse
                </button>
            </form>
        </div>
    );
}

const styles = {
    container: {
        width: "300px",
        margin: "50px auto",
        textAlign: "center",
        fontFamily: "sans-serif",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },
    input: {
        padding: "10px",
        fontSize: "16px",
    },
    button: {
        backgroundColor: "#007BFF",
        color: "white",
        border: "none",
        padding: "10px",
        cursor: "pointer",
    },
};

export default Register;