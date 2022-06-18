import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../Redux/configureStore';
import missionsApiData from '../__testData__/missionsApiData';
import Missions from '../components/Missions/Missions';
import Table from '../components/Missions/missions_components/Table';
import TableHeader from '../components/Missions/missions_components/TableHeader';
import TableRow from '../components/Missions/missions_components/TableRow';

const apiData = missionsApiData;

describe('Snapshot test for "Missions" page', () => {
  it('It should render an identical template', async () => {
    const missionsPage = renderer.create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    ).toJSON();
    expect(missionsPage).toMatchSnapshot();
  });
});

describe('Snapshot test for "Table" component', () => {
  it('It should render an identical template', () => {
    const missionsPage = renderer.create(
      <Provider store={store}>
        <Table missionData={apiData} />
      </Provider>,
    ).toJSON();
    expect(missionsPage).toMatchSnapshot();
  });
});

describe('Snapshot test for "TableHeader" component', () => {
  it('It should render an identical template', () => {
    const missionsPage = renderer.create(
      <Provider store={store}>
        <TableHeader />
      </Provider>,
    ).toJSON();
    expect(missionsPage).toMatchSnapshot();
  });
});

describe('Snapshot test for "TableRow" component', () => {
  it('It should render an identical template', () => {
    const missionsPage = renderer.create(
      <Provider store={store}>
        {apiData.map((m) => (
          <TableRow
            key={m.mission_id}
            missionId={m.mission_id}
            missionName={m.mission_name}
            missionDescription={m.description}
            missionReserved={m.reserved || false}
          />
        ))}
      </Provider>,
    ).toJSON();
    expect(missionsPage).toMatchSnapshot();
  });
});
