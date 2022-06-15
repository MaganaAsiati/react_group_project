import { useSelector } from 'react-redux';
import Table from './missions_components/Table';
import './Missions.css';

const Missions = () => {
  const data = useSelector((state) => state.missionsReducer);

  return (
    <div className="missions">
      <Table missionData={data} />
    </div>
  );
};

export default Missions;
