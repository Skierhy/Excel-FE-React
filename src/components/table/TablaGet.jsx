import PropTypes from 'prop-types';

export const TablaGet = ({ ExcelJson }) => {
	return (
		<>
			<div></div>
			{/* mostrar tabla */}
			{/* User ID	User Name	Date	Punch In	Punch Out */}
			{/* con ExcelJson */}
			{/* tabla */}
			{ExcelJson.map((item, index) => (
				<div key={item._id}>
					<h1 className='text-center mt-5'>Mi id es : {item._id}</h1>
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
						{item.Tabla.map((item, index) => (
							<tbody key={index}>
								<tr>
									<td>{item['User ID']}</td>
									<td>{item['User Name']}</td>
									{/* convertir item.Date a horas */}
									<td>{item.Date}</td>
									<td>{item['Punch In']}</td>
									<td>{item['Punch Out']}</td>
								</tr>
							</tbody>
						))}
					</table>
				</div>
			))}
		</>
	);
};

// validar props
TablaGet.propTypes = {
	ExcelJson: PropTypes.array.isRequired,
};
