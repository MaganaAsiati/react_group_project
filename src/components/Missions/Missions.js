import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from './missions_components/Table';
import { fetchMissions } from '../../Redux/missions/missions';
import './Missions.css';

const Missions = () => {
  const dispatch = useDispatch();
  // // Call dispatch fetch only once on mount
  useEffect(() => dispatch(fetchMissions()), []);
  const data = useSelector((state) => state.missionsReducer);

  return (
    <div className="missions">
      <Table missionData={data} />
    </div>
  );
};

export default Missions;
