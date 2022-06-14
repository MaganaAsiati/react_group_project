import PropTypes from 'prop-types';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

const Table = ({ missionData }) => (
  <table className="table">
    <TableHeader />
    {missionData.map((m) => (
      <TableRow
        key={m.mission_id}
        missionId={m.mission_id}
        missionName={m.mission_name}
        missionDescription={m.description}
        statusBadge="NOT A MEMBER"
        statusAction="Join Mission"
      />
    ))}
  </table>
);

Table.propTypes = {
  missionData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Table;
