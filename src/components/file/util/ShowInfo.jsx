import PropTypes from 'prop-types';
import { Table } from '../../table/Table';

export const ShowInfo = ({ getBody = {}, ExcelJson }) => {
	return (
		<>
			{/* mostrar id */}
			{getBody.length !== 0 && (
				<h1 className='text-center mt-5'>
					Tu id de tu tabla es: <strong>{getBody._id}</strong>
				</h1>
			)}
			{/* mostrar tabla cuando se envía */}
			{ExcelJson.length > 0 && <Table ExcelJson={ExcelJson} />}
		</>
	);
};

ShowInfo.propTypes = {
	getBody: PropTypes.object.isRequired,
	ExcelJson: PropTypes.array.isRequired,
};
