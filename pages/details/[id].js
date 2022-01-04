import Nav from "../../components/Nav";
import Link from "next/link";
import styled from "styled-components";

export default function Detail({ country }) {
  console.log(country);
  return (
    <>
      <Nav />
      <ButtonHome>
        <Link href="/">
          <button>Back</button>
        </Link>
      </ButtonHome>
      <div>
        {country.name.common}
        {/* <br />
      {postData.region}
      <br />
      {postData.population}
      <br /> */}
      </div>
    </>
  );
}
const ButtonHome = styled.div`
  margin: 3rem;
  button {
    padding: 0.7rem 2.5rem;
    display: block;
    cursor: pointer;
    background: transparent;
    color: hsl(0, 0, 0);
    border: none;
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.4);
  }
`;

export async function getStaticProps({ params }) {
  const results = await fetch(
    `https://restcountries.com/v3.1/name/${params.id}`
  ).then((r) => r.json());
  return {
    props: {
      country: results[0],
    },
  };
}

export async function getStaticPaths() {
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
