import PropTypes from 'prop-types';
import { TableBody } from './body/TableBody';
import { TableHead } from './head/TableHead';

export const TablaGet = ({ ExcelJson }) => {
	return (
		<>
			{ExcelJson.map((item) => (
				<div key={item._id}>
					<h1 className='text-center mt-5'>Mi id es : {item._id}</h1>
					<table className='table table-info table-hover table-bordered mt-5'>
						<TableHead />
						<tbody>
							{item.Tabla.map((item, index) => (
								<tr key={index}>
									<TableBody item={item} />
								</tr>
							))}
						</tbody>
					</table>
				</div>
			))}
		</>
	);
};

/* Un verificador de tipo prop. Es una forma de asegurarse de que los datos que está pasando a su
componente son los datos que espera. */
TablaGet.propTypes = {
	ExcelJson: PropTypes.array.isRequired,
};
