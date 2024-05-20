import FilterByCategory from "./FilterByCategory";
import FilterByPriceRange from "./FilterByPriceRange";
import FilterByRatings from "./FilterByRatings";

const Filter = () => {
  return (
    <>
      <div className="lg:col-span-2 col-span-4 space-y-4 pl-2">
        <FilterByPriceRange />
        <FilterByCategory />
        <FilterByRatings />
      </div>
    </>
  );
};

export default Filter;
