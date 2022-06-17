import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../../Redux/missions/missions';
import Table from './missions_components/Table';
import './Missions.css';

const Missions = () => {
  const data = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();
  // Call dispatch fetch only once on mount only if data is empty
  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchMissions());
    }
  }, []);

  return (
    <div className="missions">
      <Table missionData={data} />
    </div>
  );
};

export default Missions;
