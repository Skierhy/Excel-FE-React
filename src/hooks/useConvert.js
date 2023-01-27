import { useState } from 'react';
import * as xlsx from 'xlsx';

export const useConvert = () => {
	const [ExcelJson, setExcelJson] = useState([]);
	const [getBody, setBody] = useState([]);
	/**
	 * Lee el archivo, lo convierte en un búfer de matriz y luego convierte el búfer de matriz en un
	 * objeto JSON
	 */
	const readUploadFile = (e) => {
		e.preventDefault();
		if (e.target.files) {
			const reader = new FileReader();
			reader.onload = (e) => {
				const data = e.target.result;
				const workbook = xlsx.read(data, { type: 'array' });
				const sheetName = workbook.SheetNames[0];
				const worksheet = workbook.Sheets[sheetName];
				const json = xlsx.utils.sheet_to_json(worksheet);
				setExcelJson(json);
				enviarApi({ Tabla: json });
			};
			reader.readAsArrayBuffer(e.target.files[0]);
		}
	};

	const enviarApi = async (Table) => {
		try {
			const resp = await fetch('http://localhost:9000/api/tablas', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(Table),
			});
			const body = await resp.json();
			setBody(body);
		} catch (error) {
			console.log(error);
		}
	};
	return { ExcelJson, readUploadFile, getBody };
};