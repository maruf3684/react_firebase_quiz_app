import React from "react";
import Nav from "../../components/nav/Nav";
import classes from "./layout.module.css";

const Layout = (props) => {
    const children=props.children;
	return (
		<>
			<Nav />
			<main className={classes.main}>
				<div className={classes.container}> {children} </div>
			</main>
		</>
	);
};

export default Layout;
