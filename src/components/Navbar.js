import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <img src="../images/planet.png" alt="logo" />
    <h1>Space Traveler&apos;s Hub</h1>
    <ul>
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? 'active' : 'link')}
          to="/rockets"
          exact="true"
        >
          Rockets
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? 'active' : 'link')}
          to="/missions"
          exact="true"
        >
          Missions
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? 'active' : 'link')}
          to="/my-profile"
          exact="true"
        >
          My Profile
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
