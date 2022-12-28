import Label from "@components/Label";
import { Icon } from "@iconify/react";
import { useInitialDataStore } from "@store/storeInitialData";
import Link from "next/link";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(`https://restcountries.com/v2/alpha/${id}`);
  const country = await res.json();

  if (country.status == "404" || country.status == "400") {
    return {
      notFound: true,
    };
  }

  return { props: { country } };
}

const Detail = ({ country }) => {
  const router = useRouter();

  const { initialData } = useInitialDataStore();
  const findCountryName = (cca3) => {
    if (initialData.length > 0) {
      const { name } = initialData.find((country) => country.cca3 === cca3);
      const { common } = name;
      return common;
    } else {
      return "";
    }
  };

  return (
    <div className="container mx-auto px-3 xl:px-[72px]">
      <Link onClick={() => router.back()} href="#">
        <button className="btn btn-sm gap-2 text-sm normal-case px-6 rounded-md text-primary-content bg-secondary hover:!bg-secondary border-none shadow-custom my-6 md:my-12">
          <Icon icon="gg:arrow-left" className="h-5 w-5" />
          Back
        </button>
      </Link>
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-8">
        <div>
          <img
            src={country.flags.svg}
            alt={country.name}
            className="w-full aspect-[4/2.5] object-cover shadow-custom"
          />
        </div>
        <div>
          <h3 className="font-extrabold text-2xl mb-4">{country.name}</h3>
          <div className="grid md:grid-cols-2 text-sm gap-y-5 mb-8">
            <ul className="space-y-2">
              <li>
                <Label>Native Name: </Label>
                <span>{country.nativeName}</span>
              </li>
              <li>
                <Label>Population: </Label>
                <span>{country.population.toLocaleString()}</span>
              </li>
              <li>
                <Label>Region: </Label>
                <span>{country.region}</span>
              </li>
              <li>
                <Label>Sub Region: </Label>
                <span>{country.subregion}</span>
              </li>
              <li>
                <Label>Capital: </Label>
                <span>{country.capital}</span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <Label>Top Level Domain: </Label>
                <span>{country.topLevelDomain}</span>
              </li>
              <li>
                <Label>Currencies: </Label>
                <span>{country.currencies[0].name}</span>
              </li>
              <li>
                <Label>Languages: </Label>
                {country.languages.map((language, index, row) => {
                  return (
                    <span key={index}>
                      {language.name}
                      {index + 1 === row.length ? "" : ", "}
                    </span>
                  );
                })}
              </li>
            </ul>
          </div>
          <div>
            <Label className="whitespace-nowrap pr-2">Border Countries:</Label>
            {country.borders?.map((border, index) => {
              return (
                <Link href={`/detail/${border}`} key={index}>
                  <button className="mr-2 btn btn-accent btn-sm normal-case mt-3 rounded-sm text-primary-content bg-secondary hover:!bg-secondary border-none shadow-custom">
                    {findCountryName(border)}
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
