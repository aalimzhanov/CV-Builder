import { useState } from "react";
import General from "./components/General";
import Education from "./components/Education";
import Work from "./components/Work";
import CVPreview from "./components/CVPreview";
import "./App.css";

function App() {
	// Page navigation state
	const [currentPage, setCurrentPage] = useState("input"); // "input" or "preview"

	// State for General Information
	const [generalInfo, setGeneralInfo] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		address: "",
		linkedIn: "",
		gitHub: "",
	});

	// State for Education (array to support multiple entries)
	const [educationInfo, setEducationInfo] = useState([
		{
			id: 1,
			degree: "",
			major: "",
			school: "",
			graduationDate: "",
		},
	]);

	// State for Work Experience (array to support multiple entries)
	const [workInfo, setWorkInfo] = useState([
		{
			id: 1,
			position: "",
			company: "",
			city: "",
			startDate: "",
			endDate: "",
			descriptions: [""],
		},
	]);

	// Navigation functions
	const goToPreview = () => setCurrentPage("preview");
	const goToInput = () => setCurrentPage("input");

	return (
		<div className="app-container">
			{/* Navigation Header */}
			<nav className="nav-header">
				<div className="nav-content">
					<h1 className="nav-title">CV Builder</h1>
					<div className="nav-buttons">
						<button
							className={`nav-btn ${currentPage === "input" ? "active" : ""}`}
							onClick={goToInput}
						>
							📝 Edit CV
						</button>
						<button
							className={`nav-btn ${currentPage === "preview" ? "active" : ""}`}
							onClick={goToPreview}
						>
							👁️ Preview CV
						</button>
					</div>
				</div>
			</nav>

			{/* Input Page */}
			{currentPage === "input" && (
				<div className="page input-page">
					<div className="page-content">
						<div className="input-columns">
							<div className="input-col">
								<General
									generalInfo={generalInfo}
									setGeneralInfo={setGeneralInfo}
								/>
								<Education
									educationInfo={educationInfo}
									setEducationInfo={setEducationInfo}
								/>
							</div>
							<div className="input-col">
								<Work workInfo={workInfo} setWorkInfo={setWorkInfo} />
							</div>
						</div>
						<div className="page-actions">
							<button className="preview-btn" onClick={goToPreview}>
								Preview CV →
							</button>
						</div>
					</div>
				</div>
			)}

			{/* Preview Page */}
			{currentPage === "preview" && (
				<div className="page preview-page">
					<div className="page-content">
						<div className="preview-actions">
							<button className="back-btn" onClick={goToInput}>
								← Back to Edit
							</button>
							<button className="print-btn" onClick={() => window.print()}>
								🖨️ Print CV
							</button>
						</div>
						<CVPreview
							generalInfo={generalInfo}
							educationInfo={educationInfo}
							workInfo={workInfo}
						/>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
