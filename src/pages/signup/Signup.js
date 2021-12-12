import React from "react";
import Illustration from "../../components/illustration/Illustration";
import SignupForm from "../../components/signupForm/SingupForm";

const Signup = () => {
	return (
		<>
			<h1>Create an account</h1>
			<div className="column">
				<Illustration />
				<SignupForm />
			</div>
		</>
	);
};

export default Signup;
