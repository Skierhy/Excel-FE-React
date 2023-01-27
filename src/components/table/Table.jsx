import PropTypes from 'prop-types';

export const Table = ({ ExcelJson }) => {
	const tableShow = { Tabla: ExcelJson };
	return (
		<>
			{/* mostrar tabla */}
			{/* User ID	User Name	Date	Punch In	Punch Out */}
			{/* con ExcelJson */}
			{/* tabla */}
			<table className='table table-striped table-hover table-bordered mt-5'>
				<thead>
					<tr>
						<th scope='col'>User ID</th>
						<th scope='col'>User Name</th>
						<th scope='col'>Date</th>
						<th scope='col'>Punch In</th>
						<th scope='col'>Punch Out</th>
					</tr>
				</thead>
				<tbody>
					{tableShow.Tabla.map((item, index) => (
						<tr key={index}>
							<td>{item['User ID']}</td>
							<td>{item['User Name']}</td>
							{/* convertir item.Date a horas */}
							<td>{item.Date}</td>
							<td>{item['Punch In']}</td>
							<td>{item['Punch Out']}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

// validar props
Table.propTypes = {
	ExcelJson: PropTypes.array.isRequired,
};
