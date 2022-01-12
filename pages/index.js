import Search from "../components/Search";
import { useDispatch, useSelector } from "react-redux";
import { countryAction } from "../store/actions/countryActions";
import { useEffect } from "react";
import Country from "../components/Country";
import Nav from "../components/Nav";
import { useState } from "react";
import preloader from "../public/preloader.gif";
import { lightTheme, darkTheme } from "../components/themes";
import { useAppContext } from "../components/ThemeContext";
import { v4 as uuidv4 } from "uuid";
import styled, { ThemeProvider } from "styled-components";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countryAction());
  }, [dispatch]);

  const { allCountries } = useSelector((state) => state.countries);

  const [selectItem, setSelectItem] = useState("");

  const { theme, loading, setLocalTheme } = useAppContext();

  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem("theme"));
    if (theme) setLocalTheme(theme);
  }, [theme]);

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Nav />
        <Search selectItem={selectItem} setSelectItem={setSelectItem} />
        {loading ? (
          <div>
            <img src={preloader} alt="preloader" />
          </div>
        ) : (
          ""
        )}
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
      </ThemeProvider>
    </>
  );
}

const HomePage = styled.div`
  padding: 2rem 3rem;
  background: ${(props) => props.theme.body};
  min-height: 100vh;
  .countries {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-items: center;
    grid-column-gap: 0.2rem;
    grid-row-gap: 5rem;
    padding: 0rem;
    img {
      height: 12rem;
      object-fit: cover;
    }
  }
  @media screen and (max-width: 765px) {
    padding: 1rem 0rem;
    .countries {
      grid-column-gap: 0rem;
      grid-row-gap: 3rem;
      justify-items: center;
    }
  }
`;
