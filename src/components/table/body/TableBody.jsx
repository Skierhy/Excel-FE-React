import PropTypes from 'prop-types';

export const TableBody = ({ item = {} }) => {
	return (
		<>
			<td>{item['User ID']}</td>
			<td>{item['User Name']}</td>
			<td>{item.Date}</td>
			<td>{item['Punch In']}</td>
			<td>{item['Punch Out']}</td>
		</>
	);
};

TableBody.propTypes = {
	item: PropTypes.object.isRequired,
};
