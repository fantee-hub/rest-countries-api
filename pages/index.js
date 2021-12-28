import Head from "next/head";
import { useDispatch } from "react-redux";
import { countryAction } from "../store/actions/countryActions";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countryAction());
  }, [dispatch]);

  return (
    <div className="container">
      <Head>
        <title>Rest Countries</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Rest Countries Api</h1>
      </main>
    </div>
  );
}
