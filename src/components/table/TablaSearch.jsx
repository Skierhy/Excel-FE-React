import PropTypes from 'prop-types';

export const TablaSearch = ({ ExcelJson = {} }) => {
	return (
		<>
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
					{ExcelJson.map((item) =>
						item.Tabla.map((item, index) => (
							<tr key={index}>
								<td>{item['User ID']}</td>
								<td>{item['User Name']}</td>
								<td>{item.Date}</td>
								<td>{item['Punch In']}</td>
								<td>{item['Punch Out']}</td>
							</tr>
						))
					)}
				</tbody>
			</table>
		</>
	);
};
// validar props
TablaSearch.propTypes = {
	ExcelJson: PropTypes.array.isRequired,
};
