import React, { useState } from "react";
import "./App.css";
import { AiOutlineMail } from "react-icons/ai";
import { FiSun } from "react-icons/fi";
import { HiMoon } from "react-icons/hi";
import avatar from "./images/avatar.png";

const userPrefersDark = localStorage.darkMode
	? localStorage.darkMode === "true"
	: window.matchMedia &&
	  window.matchMedia("(prefers-color-scheme: dark)").matches;

function App() {
	const [darkMode, setDarkMode] = useState(userPrefersDark);

	const handleDarkModeToggle = (e) => {
		setDarkMode(e.target.checked);
		localStorage.setItem("darkMode", e.target.checked);
	};
	return (
		<div className={`app ${darkMode ? "dark-theme" : ""}`}>
			<header className="app__header">
				<h1 className="app__heading">
					<span className="app__logo">
						<AiOutlineMail />
					</span>
					<span> hi@sandrabullock.design</span>
				</h1>
				<nav className="app__nav">
					<ul className="app__nav-list">
						<li className="app__nav-item"> Works </li>
						<li className="app__nav-item"> Resume </li>
						<li className="app__nav-item"> Services </li>
						<li className="app__nav-item"> Contact </li>
					</ul>

					<label className="switch">
						<input
							type="checkbox"
							aria-label="toggle dark mode"
							defaultChecked={darkMode}
							onChange={handleDarkModeToggle}
						/>
						<span className="slider round"></span>
					</label>
				</nav>
			</header>
			<main className="app__body">
				<div className="avatar__cont">
					<img src={avatar} className="avatar__img" alt="Sandra Bullock" />
				</div>
				<h2 className="body__text body__text--greeting">Hi, I'm Sandra 🤘</h2>
				<h3 className="body__text body__text--heading">
					<span className="first-word"> Building </span> digital products,
					brands, and experience.
				</h3>
				<p className="body__text body__text--details">
					A <span className="body__text--highlight"> Product Designer</span> and
					<span className="body__text--highlight"> Visual Developer</span> in
					SF. I specialize in UI/UX Design, Responsive Web Design and Visual
					Development.
				</p>
				<button className="btn"> Connect with me</button>
			</main>
		</div>
	);
}

export default App;
