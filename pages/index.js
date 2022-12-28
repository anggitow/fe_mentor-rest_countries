import CardList from "@components/CardList";
import Filter from "@components/Filter";
import { useDataStore } from "@store/storeData";
import { useEffect } from "react";

export default function Home() {
  const { data, setData } = useDataStore();

  const fetchData = async () => {
    const resDataCountries = await fetch(
      "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital,cca3"
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
      <CardList />
    </>
  );
}
