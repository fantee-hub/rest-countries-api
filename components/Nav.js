import styled from "styled-components";
import Link from "next/link";
import { useAppContext } from "../components/ThemeContext";

const Nav = () => {
  const { toggleTheme } = useAppContext();

  return (
    <NavBar>
      <div className="nav-elements">
        <div className="nav-header">
          <Link href="/">
            <h2>Where in the world? </h2>
          </Link>
        </div>
        <div onClick={() => toggleTheme()} className="theme">
          <span>Dark Mode</span>
        </div>
      </div>
    </NavBar>
  );
};

const NavBar = styled.nav`
  background-color: ${(props) => props.theme.navColor};
  color: ${(props) => props.theme.fontColor};
  position: relative;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
  padding: 1.5rem 3rem;
  transition: all 0.2s ease;

  .nav-elements {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nav-header {
      cursor: pointer;
    }
    .theme {
      cursor: pointer;
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
