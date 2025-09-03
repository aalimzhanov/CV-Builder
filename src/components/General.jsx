import PropTypes from "prop-types";

function General({ generalInfo, setGeneralInfo }) {
	const handleInputChange = (field, value) => {
		setGeneralInfo((prev) => ({
			...prev,
			[field]: value,
		}));
	};

	return (
		<div className="form-section">
			<h2>General Information</h2>
			<div className="form-grid">
				<input
					type="text"
					value={generalInfo?.firstName || ""}
					onChange={(e) => handleInputChange("firstName", e.target.value)}
					placeholder="First Name"
				/>
				<input
					type="text"
					value={generalInfo?.lastName || ""}
					onChange={(e) => handleInputChange("lastName", e.target.value)}
					placeholder="Last Name"
				/>
				<input
					type="email"
					value={generalInfo?.email || ""}
					onChange={(e) => handleInputChange("email", e.target.value)}
					placeholder="Email"
				/>
				<input
					type="tel"
					value={generalInfo?.phone || ""}
					onChange={(e) => handleInputChange("phone", e.target.value)}
					placeholder="Phone"
				/>
				<input
					type="text"
					value={generalInfo?.address || ""}
					onChange={(e) => handleInputChange("address", e.target.value)}
					placeholder="Address"
					className="full-width"
				/>
				<input
					type="text"
					value={generalInfo?.linkedIn || ""}
					onChange={(e) => handleInputChange("linkedIn", e.target.value)}
					placeholder="LinkedIn"
				/>
				<input
					type="text"
					value={generalInfo?.gitHub || ""}
					onChange={(e) => handleInputChange("gitHub", e.target.value)}
					placeholder="GitHub"
				/>
			</div>
		</div>
	);
}

General.propTypes = {
	generalInfo: PropTypes.shape({
		firstName: PropTypes.string,
		lastName: PropTypes.string,
		email: PropTypes.string,
		phone: PropTypes.string,
		address: PropTypes.string,
		linkedIn: PropTypes.string,
		gitHub: PropTypes.string,
	}).isRequired,
	setGeneralInfo: PropTypes.func.isRequired,
};

export default General;
