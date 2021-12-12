import React from "react";
import { Route, Routes ,Navigate} from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Layout from "./pages/layout/Layout";
import Login from "./pages/login/Login";
import Quiz from "./pages/quiz/Quiz";
import Result from "./pages/result/Result";
import Signup from "./pages/signup/Signup";
import {AuthProvider} from './contexts/AuthContext'
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";



const App = () => {
	return (
		<AuthProvider>
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>}/>
				<Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
				<Route path="/quiz/:id" element={<PrivateRoute><Quiz /></PrivateRoute>} />
				<Route path="/result/:id" element={<PrivateRoute><Result /></PrivateRoute>} />
				<Route path="/*" element={<Navigate to="/" />}/>
			</Routes>
		</Layout>
		</AuthProvider>
	);
};

export default App;
