import Nav from "../../components/Nav";
import Link from "next/link";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../components/themes";
import { useAppContext } from "../../components/ThemeContext";
import { useEffect } from "react";

export default function Detail({ country }) {
  const { theme, setLocalTheme } = useAppContext();
  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem("theme"));
    if (theme) setLocalTheme(theme);
  }, [theme]);

  const getCurrencies = () => {
    let data = country.currencies;
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        let value = data[key];
        return value.name;
      }
    }
  };
  const getNativeName = () => {
    let data = country.name.nativeName;
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        let value = data[key];
        return value.common;
      }
    }
  };

  const getLanguages = () => {
    let data = country.languages;
    let languages = [];

    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        let value = data[key];
        languages.push(value);
        languages.push(", ");
      }
    }
    return languages;
  };

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <DetailStyle>
          <Nav />
          <ButtonHome>
            <Link href="/">
              <button>Back</button>
            </Link>
          </ButtonHome>
          <DetailContent>
            <div className="flag">
              <img src={country.flags.png} alt={country.name.common} />
            </div>
            <div className="details">
              <div className="header">
                <h3>{country.name.common}</h3>
              </div>
              <div className="texts">
                <div className="row">
                  <p>
                    <span>Native Name:</span> {getNativeName()}
                  </p>

                  <p>
                    <span>Population:</span> {country.population}
                  </p>

                  <p>
                    <span>Region:</span> {country.region}
                  </p>

                  <p>
                    <span>Sub Region:</span> {country.subregion}
                  </p>

                  <p>
                    <span>Capital:</span> {country.capital}
                  </p>
                </div>
                <div className="row">
                  <p>
                    <span>Top Level Domain: </span>
                    {country.tld}
                  </p>

                  <p>
                    <span>Currencies: </span>
                    {getCurrencies()}
                  </p>

                  <p>
                    <span>Languages: </span>
                    {getLanguages()}
                  </p>
                </div>
              </div>
            </div>
          </DetailContent>
        </DetailStyle>
      </ThemeProvider>
    </>
  );
}
const DetailStyle = styled.div`
  background-color: ${(props) => props.theme.body};
`;
const DetailContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.fontColor};
  padding: 4rem 3rem;
  .flag {
    img {
      width: 30rem;
      height: 20rem;
    }
  }
  .details {
    .texts {
      display: flex;
      justify-content: space-between;

      .row {
        padding: 0 1.5rem 0 0;
        span {
          font-weight: 600;
        }
      }
    }
  }
  @media screen and (max-width: 765px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem 1rem;
    .flag {
      img {
        width: 100%;
      }
    }
    .details {
      padding: 2rem 0;
      .texts {
        display: flex;
        flex-direction: column;

        .row {
          padding: 1rem 0;
        }
      }
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    .flag {
      img {
        width: 30rem;
        height: 20rem;
      }
    }
    .details {
      padding: 1.5rem 0;
      
        display: flex;
        flex-direction: column;

        .row {
          padding: 1rem 0;
        }
      }
    }
  }
`;
const ButtonHome = styled.div`
  margin: 3rem;
  button {
    padding: 0.7rem 2.5rem;
    display: block;
    cursor: pointer;
    background: ${(props) => props.theme.navColor};
    color: ${(props) => props.theme.fontColor};
    border: none;
    border-radius: 0.3rem;
    box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.1);
  }
  @media screen and (max-width: 765px) {
    margin: 2rem 1rem;
  }
`;

export async function getServerSideProps({ params }) {
  const results = await fetch(
    `https://restcountries.com/v3.1/name/${params.id}`
  ).then((r) => r.json());
  return {
    props: {
      country: results[0] || null,
    },
  };
}

export async function getServerSidePaths() {
  const countries = await fetch(`https://restcountries.com/v3.1/all`).then(
    (r) => r.json()
  );

  return {
    paths: countries.map((country) => {
      const id = country.name.common.toLowerCase();
      return {
        params: {
          id,
        },
      };
    }),
    fallback: false,
  };
}
