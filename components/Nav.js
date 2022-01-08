import styled from "styled-components";
import Link from "next/link";

const Nav = () => {
  return (
    <NavBar>
      <div className="nav-elements">
        <div className="nav-header">
          <Link href="/">
            <h2>Where in the world?</h2>
          </Link>
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
    .nav-header {
      cursor: pointer;
    }
    .theme {
      span {
        font-weight: 600;
      }
    }
  }
  @media screen and (max-width: 765px) {
    padding: 1.5rem 1rem;
    .nav-elements {
      .nav-header {
        h2 {
          font-size: 1rem;
        }
      }
    }
  }
`;
export default Nav;
