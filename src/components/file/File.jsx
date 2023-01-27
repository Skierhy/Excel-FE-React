import { useConvert } from '../../hooks/useConvert';
import { Op } from '../opciones/Op.jsx';
import { HeadTi } from './util/HeadTi';
import { ShowInfo } from './util/ShowInfo';
import './File.css';

export const File = () => {
	const { ExcelJson, readUploadFile, getBody } = useConvert();

	return (
		<>
			<div className='box-sw container animate__animated animate__pulse'>
				<HeadTi />
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
				<ShowInfo getBody={getBody} ExcelJson={ExcelJson} />
			</div>

			{/* opciones */}
			<Op ExcelJson={ExcelJson} />
		</>
	);
};
