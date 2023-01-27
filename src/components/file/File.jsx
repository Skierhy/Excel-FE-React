import { useConvert } from '../../hooks/useConvert';
import { Op } from '../opciones/Op.jsx';
import { Table } from '../table/Table';

export const File = () => {
	const { ExcelJson, readUploadFile, getBody } = useConvert();

	return (
		<>
			<h1 className='text-center'>Guardado en la nueve de tus Excels</h1>
			<p className='fs-3'>
				Aplicación web la puede extraer los datos de los archivos excel
				y guardarlos en la base de datos.
			</p>
			<form>
				<div>
					<label htmlFor='file' className='form-label'>
						Ingrese su archivo excel aquí
					</label>
					<input
						className='form-control form-control-lg'
						type='file'
						name='upload'
						id='upload'
						onChange={readUploadFile}
					/>
				</div>
			</form>
			{/* mostrar id */}
			{getBody.length !== 0 && (
				<h1 className='text-center mt-5'>
					Tu id de tu tabla es: <strong>{getBody._id}</strong>
				</h1>
			)}
			{ExcelJson.length > 0 && <Table ExcelJson={ExcelJson} />}

			{/* opciones */}
			<Op ExcelJson={ExcelJson} />
		</>
	);
};
