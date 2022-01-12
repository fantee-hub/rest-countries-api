import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppContext } from "./ThemeContext";

const Country = ({ id, name, population, capital, region, image }) => {
  return (
    <>
      <Link href={`/details/${name.toLowerCase()}`}>
        <Cards>
          <img src={image} alt={name} />
          <div className="card-content">
            <h3>{name}</h3>
            <span>
              <h4>Region:</h4> {region}
            </span>
            <span>
              <h4>Population:</h4> {population}
            </span>
            <span>
              <h4>Capital:</h4> {capital}
            </span>
          </div>
        </Cards>
      </Link>
    </>
  );
};

const Cards = styled.div`
  width: 18rem;
  background: ${(props) => props.theme.navColor};
  color: ${(props) => props.theme.fontColor};
  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease;
  .card-content {
    padding: 1rem;
    line-height: 2;
    h3 {
      font-weight: 800;
    }
    span {
      display: flex;
      align-items: center;
      h4 {
        padding-right: 0.2rem;
        font-weight: 600;
      }
    }
  }
`;
export default Country;
