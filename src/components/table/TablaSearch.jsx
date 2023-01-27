import PropTypes from 'prop-types';
import { TableHead } from './head/TableHead';
import { TableBody } from './body/TableBody';

export const TablaSearch = ({ ExcelJson = {} }) => {
	return (
		<>
			<table className='table table-warning table-hover table-bordered mt-5'>
				<TableHead />
				<tbody>
					{ExcelJson.map((item) =>
						item.Tabla.map((item, index) => (
							<tr key={index}>
								<TableBody item={item} />
							</tr>
						))
					)}
				</tbody>
			</table>
		</>
	);
};

/* Una validación del tipo de datos que se pasa al componente. */
TablaSearch.propTypes = {
	ExcelJson: PropTypes.array.isRequired,
};
