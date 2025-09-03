function Work({ workInfo, setWorkInfo }) {
	const handleInputChange = (id, field, value) => {
		setWorkInfo((prev) =>
			prev.map((work) => (work.id === id ? { ...work, [field]: value } : work))
		);
	};

	const addWork = () => {
		const newId = Math.max(...workInfo.map((work) => work.id)) + 1;
		setWorkInfo((prev) => [
			...prev,
			{
				id: newId,
				position: "",
				company: "",
				city: "",
				startDate: "",
				endDate: "",
			},
		]);
	};

	const removeWork = (id) => {
		if (workInfo.length > 1) {
			setWorkInfo((prev) => prev.filter((work) => work.id !== id));
		}
	};

	return (
		<div className="form-section">
			<div className="section-header">
				<h2>Work Experience</h2>
				<button className="add-btn" onClick={addWork}>
					+ Add Experience
				</button>
			</div>
			{workInfo.map((work, index) => (
				<div key={work.id} className="entry-container">
					{workInfo.length > 1 && (
						<div className="entry-header">
							<span className="entry-number">Experience {index + 1}</span>
							<button
								className="remove-btn"
								onClick={() => removeWork(work.id)}
							>
								Remove
							</button>
						</div>
					)}
					<div className="form-grid">
						<input
							type="text"
							value={work?.position || ""}
							onChange={(e) =>
								handleInputChange(work.id, "position", e.target.value)
							}
							placeholder="Job Title/Position"
						/>
						<input
							type="text"
							value={work?.company || ""}
							onChange={(e) =>
								handleInputChange(work.id, "company", e.target.value)
							}
							placeholder="Company"
						/>
						<input
							type="text"
							value={work?.city || ""}
							onChange={(e) =>
								handleInputChange(work.id, "city", e.target.value)
							}
							placeholder="City"
						/>
						<input
							type="text"
							value={work?.startDate || ""}
							onChange={(e) =>
								handleInputChange(work.id, "startDate", e.target.value)
							}
							placeholder="Start Date"
						/>
						<input
							type="text"
							value={work?.endDate || ""}
							onChange={(e) =>
								handleInputChange(work.id, "endDate", e.target.value)
							}
							placeholder="End Date (or 'Present')"
						/>
					</div>
				</div>
			))}
		</div>
	);
}

export default Work;
