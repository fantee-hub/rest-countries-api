import styled from "styled-components";
import Link from "next/link";

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
  max-width: 18rem;
  background: hsl(209, 23%, 22%);
  color: #ffffff;
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;
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
