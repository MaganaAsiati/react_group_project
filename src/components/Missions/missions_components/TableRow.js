import PropTypes from 'prop-types';

const TableRow = ({
  missionName, missionDescription, statusBadge, statusAction,
}) => {
  const handleAction = () => {
    // reducer missionId
  };

  return (
    <tr className="tr">
      <td className="td">{missionName}</td>
      <td className="td">{missionDescription}</td>
      <td className="td">
        <div>{statusBadge}</div>
      </td>
      <td className="td">
        <button
          type="button"
          onClick={handleAction}
        >
          {statusAction}
        </button>
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  missionName: PropTypes.string.isRequired,
  missionDescription: PropTypes.string.isRequired,
  statusBadge: PropTypes.string.isRequired,
  statusAction: PropTypes.string.isRequired,
};

export default TableRow;
