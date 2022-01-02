export default function Detail({ country }) {
  console.log(country);
  return (
    <div>
      {country.name.common}
      {/* <br />
      {postData.region}
      <br />
      {postData.population}
      <br /> */}
    </div>
  );
}

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
