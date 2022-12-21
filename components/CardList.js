const CardList = ({ data }) => {
  return (
    <div className="container mx-auto px-3 xl:px-[72px] sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 xl:gap-8 2xl:gap-12 mb-12 flex justify-center flex-wrap">
      {data.map((country) => {
        return (
          <div
            className="card card-compact rounded bg-secondary shadow-md w-4/5 sm:w-full"
            key={country.ccn3}
          >
            <figure>
              <img
                src={country.flags.svg}
                alt={country.name.common}
                className="w-full object-cover aspect-video"
              />
            </figure>
            <div className="card-body flex-none gap-0 !text-base !px-6 !py-7">
              <h3 className="text-lg font-bold pb-3">{country.name.common}</h3>
              <p className="font-semibold pb-1">
                Population:{" "}
                <span className="font-light">
                  {country.population.toLocaleString()}
                </span>
              </p>
              <p className="font-semibold pb-1">
                Region: <span className="font-light">{country.region}</span>
              </p>
              <p className="font-semibold pb-1">
                Capital: <span className="font-light">{country.capital}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
