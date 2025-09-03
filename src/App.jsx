import { useState } from "react";
import General from "./components/General";
import Education from "./components/Education";
import Work from "./components/Work";
import CVPreview from "./components/CVPreview";
import "./App.css";

function App() {
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
		},
	]);

	return (
		<div className="app-container">
			<div className="input-section">
				<h1>CV Builder</h1>
				<General generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
				<Education
					educationInfo={educationInfo}
					setEducationInfo={setEducationInfo}
				/>
				<Work workInfo={workInfo} setWorkInfo={setWorkInfo} />
			</div>
			<div className="preview-section">
				<CVPreview
					generalInfo={generalInfo}
					educationInfo={educationInfo}
					workInfo={workInfo}
				/>
			</div>
		</div>
	);
}

export default App;
