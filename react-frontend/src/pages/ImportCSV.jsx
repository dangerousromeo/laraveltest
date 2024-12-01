import React from 'react';
import axios from '../axios';
import { useState } from 'react';
import ImportCSVTable from '../components/importCSV/importCSVDataTable';

function ImportCSV() {
	const [file, setFile] = useState(null);
	const [csvData, setCSVData] = useState([]);
	function handleChange(event) {
		setFile(event.target.files[0])
	}
	  
	function handleSubmit(event) {
		event.preventDefault();	
		const formData = new FormData();
		formData.append('csv_file', file);
		const config = {
			headers: {
			  'content-type': 'multipart/form-data',
			},
		};
		axios.post('/importcsvdata', formData, config).then((response) => {
			setCSVData(response.data);
		});
	}
	return (
		<>
			<div className="file-upload-container">		
				<form onSubmit={handleSubmit}>
					<input  accept=".csv" onChange={handleChange} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>
					<div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
						<button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
							Upload File
						</button>
					</div>
				</form>
			</div>
			{(typeof csvData.csv_data != 'undefined') && <ImportCSVTable data={csvData} />}
		</>
	);
}

export default ImportCSV