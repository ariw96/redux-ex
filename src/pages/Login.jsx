import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
function Login() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const { email, password } = formData;
	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};
	const onSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<>
			<section className="heading">
				<h2>
					<FaSignInAlt />
					Login
				</h2>
			</section>
			<section className="form">
				<form onSubmit={onSubmit}>
					<div className="form-group">
						<input
							type="email"
							className="form-control"
							id="email"
							name="email"
							value={email}
							placeholder="Enter your email"
							onChange
						/>
					</div>
					<div className="form-group">
						<input
							type="password"
							className="form-control"
							id="password"
							name="password"
							value={password}
							placeholder="Enter  password"
							onChange
						/>
					</div>

					<button type="submit" className="btn btn-block">
						Submit
					</button>
				</form>
			</section>
		</>
	);
}

export default Login;