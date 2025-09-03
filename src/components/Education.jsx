function Education({ educationInfo, setEducationInfo }) {
	const handleInputChange = (id, field, value) => {
		setEducationInfo((prev) =>
			prev.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu))
		);
	};

	const addEducation = () => {
		const newId = Math.max(...educationInfo.map((edu) => edu.id)) + 1;
		setEducationInfo((prev) => [
			...prev,
			{
				id: newId,
				degree: "",
				major: "",
				school: "",
				graduationDate: "",
			},
		]);
	};

	const removeEducation = (id) => {
		if (educationInfo.length > 1) {
			setEducationInfo((prev) => prev.filter((edu) => edu.id !== id));
		}
	};

	return (
		<div className="form-section">
			<div className="section-header">
				<h2>Education</h2>
				<button className="add-btn" onClick={addEducation}>
					+ Add Education
				</button>
			</div>
			{educationInfo.map((education, index) => (
				<div key={education.id} className="entry-container">
					{educationInfo.length > 1 && (
						<div className="entry-header">
							<span className="entry-number">Education {index + 1}</span>
							<button
								className="remove-btn"
								onClick={() => removeEducation(education.id)}
							>
								Remove
							</button>
						</div>
					)}
					<div className="form-grid">
						<input
							type="text"
							value={education?.degree || ""}
							onChange={(e) =>
								handleInputChange(education.id, "degree", e.target.value)
							}
							placeholder="Degree (e.g., Bachelor's, Master's)"
						/>
						<input
							type="text"
							value={education?.major || ""}
							onChange={(e) =>
								handleInputChange(education.id, "major", e.target.value)
							}
							placeholder="Major/Field of Study"
						/>
						<input
							type="text"
							value={education?.school || ""}
							onChange={(e) =>
								handleInputChange(education.id, "school", e.target.value)
							}
							placeholder="School/University"
						/>
						<input
							type="text"
							value={education?.graduationDate || ""}
							onChange={(e) =>
								handleInputChange(
									education.id,
									"graduationDate",
									e.target.value
								)
							}
							placeholder="Graduation Date"
						/>
					</div>
				</div>
			))}
		</div>
	);
}

export default Education;
