import React from "react";
import Illustration from "../../components/illustration/Illustration";
import LoginForm from "../../components/loginForm/LoginForm";
const Login = () => {
	return (
		<>
			<h1>Login to your account</h1>
			<div className="column">
				<Illustration />
				<LoginForm />
			</div>
		</>
	);
};

export default Login;
