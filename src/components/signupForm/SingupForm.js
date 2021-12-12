import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Button from "../button/Button";
import Checkbox from "../checkbox/Checkbox";
import Form from "../form/Form";
import Textinput from "../textinput/Textinput";
import classes from "./signupForm.module.css";


const SingupForm = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [agree, setAgree] = useState("");
	const [loading, setLoading] = useState("");
	const [error, setError] = useState("");

	const { signUp } = useAuth();
	const navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();
		//do password validation

		if (password !== confirmPassword) {
			return setError("Passwords don't match!");
		}

		try {
			setError("");
			setLoading(true);
			await signUp(email, password, username);
			navigate("/", { replace: true });
		} catch (e) {
			console.log(e);
			setLoading(false);
			setError(e.message);
		}
	}

	return (
		<Form className={`${classes.signup}`} onSubmit={handleSubmit}>
			<Textinput
				value={username}
				type="text"
				placeholder="Enter name"
				icon="person"
				onChange={(e) => setUsername(e.target.value)}
				required
			/>
			<Textinput
				value={email}
				type="text"
				placeholder="Enter email"
				icon="alternate_email"
				onChange={(e) => setEmail(e.target.value)}
				required
			/>
			<Textinput
				value={password}
				type="password"
				placeholder="Enter password"
				icon="lock"
				onChange={(e) => setPassword(e.target.value)}
				required
			/>
			<Textinput
				value={confirmPassword}
				type="password"
				placeholder="Confirm password"
				icon="lock_clock"
				onChange={(e) => setConfirmPassword(e.target.value)}
				required
			/>
			<Checkbox
				value={agree}
				type="checkbox"
				text="I agree to the Terms & Conditions"
				onChange={(e) => setAgree(e.target.value)}
				required
			/>
			<Button disabled={loading} type="submit">
				<span>Submit now</span>
			</Button>
			{error && <p className="error">{error}</p>}
			<div className="info">
				Already have an account? <Link to="/login">Login</Link> instead.
			</div>
		</Form>
	);
};

export default SingupForm;
