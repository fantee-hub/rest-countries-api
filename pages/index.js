import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { countryAction } from "../store/actions/countryActions";
import { useEffect } from "react";
import Country from "../components/Country";
import Nav from "../components/Nav";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countryAction());
  }, [dispatch]);

  const { allCountries } = useSelector((state) => state.countries);

  return (
    <>
      <Nav />
      <HomePage>
        <div className="countries">
          {allCountries.map((country) => (
            <Country
              key={uuidv4()}
              id={uuidv4()}
              name={country.name.common}
              population={country.population}
              capital={country.capital}
              region={country.region}
              image={country.flags.svg}
            />
          ))}
        </div>
      </HomePage>
    </>
  );
}

const HomePage = styled.div`
  padding: 5rem 3rem;
  background: hsl(207, 26%, 17%);
  .countries {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 5rem;
    img {
      height: 12rem;
      object-fit: cover;
    }
  }
`;
