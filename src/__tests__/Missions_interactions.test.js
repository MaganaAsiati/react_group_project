import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import store from '../Redux/configureStore';
import TableRow from '../components/Missions/missions_components/TableRow';

const row1Data = {
  mission_id: '9D1B7E0',
  mission_name: 'Thaicom',
  description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
  reserved: false,
};

beforeEach(() => render(
  <Provider store={store}>
    <table>
      <tbody>
        <TableRow
          key={row1Data.mission_id}
          missionId={row1Data.mission_id}
          missionName={row1Data.mission_name}
          missionDescription={row1Data.description}
          missionReserved={row1Data.reserved || false}
        />
      </tbody>
    </table>
  </Provider>,
));

describe('User interaction test for "Join Mission" button', () => {
  it('When "Join Mission" button is clicked, status has to be updated to "Active Member"', () => {
    // Click Join Mission
    userEvent.click(screen.getByRole('button', { name: /join mission/i }));
    // Update reserved value
    row1Data.reserved = true;
    // Re-render
    render(
      <Provider store={store}>
        <table>
          <tbody>
            <TableRow
              key={row1Data.mission_id}
              missionId={row1Data.mission_id}
              missionName={row1Data.mission_name}
              missionDescription={row1Data.description}
              missionReserved={row1Data.reserved || false}
            />
          </tbody>
        </table>
      </Provider>,
    );
    // Expect status to be updated to active member
    expect(screen.getByText(/active member/i)).toBeInTheDocument();
  });

  it('When "Leave Mission" button is clicked, status has to be updated to "Not a Member"', () => {
    // Click Join Mission
    userEvent.click(screen.getByRole('button', { name: /leave mission/i }));
    // Update reserved value
    row1Data.reserved = false;
    // Re-render
    render(
      <Provider store={store}>
        <table>
          <tbody>
            <TableRow
              key={row1Data.mission_id}
              missionId={row1Data.mission_id}
              missionName={row1Data.mission_name}
              missionDescription={row1Data.description}
              missionReserved={row1Data.reserved || false}
            />
          </tbody>
        </table>
      </Provider>,
    );
    // Expect status to be updated to active member
    expect(screen.getByText(/not a member/i)).toBeInTheDocument();
  });
});
