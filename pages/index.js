import CardList from "@components/CardList";
import Filter from "@components/Filter";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const resDataCountries = await fetch(
      "https://restcountries.com/v3.1/region/asia"
    );
    const dataCountries = await resDataCountries.json();
    setData(dataCountries);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Filter />
      <CardList data={data} />
    </>
  );
}
