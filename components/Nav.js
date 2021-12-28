import styled from "styled-components";

const Nav = () => {
  return (
    <NavBar>
      <div className="nav-elements">
        <div className="nav-header">
          <h2>Where in the world?</h2>
        </div>
        <div className="theme">
          <span>Dark Mode</span>
        </div>
      </div>
    </NavBar>
  );
};

const NavBar = styled.nav`
  background: hsl(209, 23%, 22%);
  color: #ffffff;
  padding: 1.5rem 3rem;
  .nav-elements {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .theme {
      span {
        font-weight: 600;
      }
    }
  }
`;
export default Nav;
