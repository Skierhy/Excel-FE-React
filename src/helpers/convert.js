import { useState } from 'react';
import * as xlsx from 'xlsx';

export const convert = () => {
	const [Update, setUpdate] = useState([]);
	const convertirJSON = (e) => {
		e.preventDefault();
		if (e.target.files) {
			const reader = new FileReader();
			reader.onload = (e) => {
				const data = e.target.result;
				const workbook = xlsx.read(data, { type: 'array' });
				const sheetName = workbook.SheetNames[0];
				const worksheet = workbook.Sheets[sheetName];
				const json = xlsx.utils.sheet_to_json(worksheet);
				setUpdate({ Tabla: json });
			};
			reader.readAsArrayBuffer(e.target.files[0]);
		}
	};

	return { convertirJSON, Update };
};
