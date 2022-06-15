import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../../Redux/missions/missions';

const TableRow = ({
  missionId, missionName, missionDescription, missionReserved,
}) => {
  const dispatch = useDispatch();

  const handleJoin = () => {
    dispatch(joinMission(missionId));
  };

  const handleLeave = () => {
    dispatch(leaveMission(missionId));
  };

  return (
    <tr className="tr table-row-content">
      <td className="td table-mission-name">{missionName}</td>
      <td className="td">{missionDescription}</td>
      <td className="td table-mission-membership">
        {missionReserved
          ? <div className="status-badge member">ACTIVE MEMBER</div>
          : <div className="status-badge">NOT A MEMBER</div>}
      </td>
      <td className="td table-mission-join-leave">
        {missionReserved
          ? (
            <button
              type="button"
              onClick={handleLeave}
              className="join-mission-btn member"
            >
              LEAVE MISSION
            </button>
          )
          : (
            <button
              type="button"
              onClick={handleJoin}
              className="join-mission-btn"
            >
              JOIN MISSION
            </button>
          )}
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  missionId: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  missionDescription: PropTypes.string.isRequired,
  missionReserved: PropTypes.bool.isRequired,
};

export default TableRow;
