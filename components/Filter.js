import { Icon } from "@iconify/react";

const Filter = () => {
  return (
    <div className="container mx-auto px-3 xl:px-[72px] py-6 md:py-12 flex justify-between flex-wrap gap-6">
      <div className="flex items-center h-12 bg-secondary px-5 py-3 rounded shadow-md w-full md:w-5/12 lg:w-4/12">
        <label htmlFor="search" className="mr-4">
          <Icon icon="material-symbols:search-rounded" className="text-2xl" />
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search for a country..."
          className="focus-visible:outline-none w-full bg-secondary"
          autoComplete="off"
        />
      </div>
      <select className="select w-7/12 md:w-3/12 lg:w-2/12 focus:outline-none focus-visible:outline-none shadow-md rounded bg-secondary font-light">
        <option value="">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
