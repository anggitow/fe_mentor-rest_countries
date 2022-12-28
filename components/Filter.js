import { Icon } from "@iconify/react";
import { useDataStore } from "@store/storeData";
import { useFilterStore } from "@store/storeFilter";
import { useInitialDataStore } from "@store/storeInitialData";
import { getFilterOption } from "utils";

const Filter = () => {
  const filterOption = getFilterOption();

  const { search, setSearch, select, setSelect } = useFilterStore();

  const { initialData } = useInitialDataStore();
  const { setData } = useDataStore();

  const handleSearch = (e) => {
    const { value } = e.target;
    let filtered;

    if (select) {
      filtered = initialData.filter(
        (country) => country.region.toLowerCase() === select.toLowerCase()
      );
    } else {
      filtered = initialData;
    }

    filtered = filtered.filter((country) =>
      value
        ? country.name.common.toLowerCase().includes(value.toLowerCase())
        : initialData
    );

    setSearch(value);
    setData(filtered);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    let filtered;

    if (search) {
      // filtered = initialData.filter((country) =>
      //   country.name.common.toLowerCase().includes(search.toLowerCase())
      // );
      console.log(search.toLowerCase());
    } else {
      // filtered = initialData;
      console.log("no");
    }

    filtered = value
      ? initialData.filter(
          (country) => country.region.toLowerCase() === value.toLowerCase()
        )
      : initialData;
    setSelect(value);
    setData(filtered);
  };

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
          onChange={handleSearch}
          value={search}
        />
      </div>
      <select
        className="select w-7/12 md:w-3/12 lg:w-2/12 focus:outline-none focus-visible:outline-none shadow-md rounded bg-secondary font-light"
        value={select}
        onChange={handleChange}
      >
        {filterOption.map((filterOpt) => {
          return (
            <option key={filterOpt.id} value={filterOpt.value}>
              {filterOpt.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Filter;
