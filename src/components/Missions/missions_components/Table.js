import PropTypes from 'prop-types';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

const Table = ({ missionData }) => (
  <table className="table">
    <thead className="thead">
      <TableHeader />
    </thead>
    <tbody>
      {missionData.map((m) => (
        <TableRow
          key={m.mission_id}
          missionId={m.mission_id}
          missionName={m.mission_name}
          missionDescription={m.description}
          missionReserved={m.reserved || false}
        />
      ))}
    </tbody>
  </table>
);

Table.propTypes = {
  missionData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Table;
