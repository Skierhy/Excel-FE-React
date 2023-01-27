import PropTypes from 'prop-types';
import { TableHead } from './head/TableHead';
import { TableBody } from './body/TableBody';

export const Table = ({ ExcelJson }) => {
	const tableShow = { Tabla: ExcelJson };

	return (
		<>
			<table className='table table-success table-hover table-bordered mt-5 mt-5'>
				<TableHead />
				<tbody>
					{tableShow.Tabla.map((item, index) => (
						<tr key={index}>
							<TableBody item={item} />
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

/* Un verificador de tipo prop. Es una forma de verificar si los datos son una matriz. */
Table.propTypes = {
	ExcelJson: PropTypes.array.isRequired,
};
