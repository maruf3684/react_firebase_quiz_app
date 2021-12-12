import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Button from "../button/Button";
import Form from "../form/Form";
import Textinput from "../textinput/Textinput";
import classes from "./loginform.module.css";
import { useState } from "react";
const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState("");
	const [error, setError] = useState("");


	const { login } = useAuth();
	const navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setError("");
			setLoading(true);
			await login(email, password);
			navigate("/", { replace: true });
		} catch (e) {
			console.log(e);
			setLoading(false);
			setError(e.message);
		}
	}

	return (
		<Form className={`${classes.login}`} onSubmit={handleSubmit}>
			<Textinput type="text" placeholder="Enter email" icon="alternate_email" value={email} onChange={(e) => setEmail(e.target.value)}
				required/>
			<Textinput type="password" placeholder="Enter password" icon="lock"value={password} onChange={(e) => setPassword(e.target.value)}
				required />

			<Button disabled={loading} type="submit">
				<span>Submit now</span>
			</Button>
			{error && <p className="error">{error}</p>}
			<div className="info">
				Don't have an account? <Link to="/Signup">Signup</Link> instead.
			</div>
		</Form>
	);
};

export default LoginForm;
