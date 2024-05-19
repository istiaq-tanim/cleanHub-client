import FilterByCategory from "./FilterByCategory";
import FilterByPriceRange from "./FilterByPriceRange";
import FilterByRatings from "./FilterByRatings";

const Filter = () => {
  return (
    <>
      <div className="col-span-2 space-y-4">
        <FilterByPriceRange />
        <FilterByCategory />
        <FilterByRatings />
      </div>
    </>
  );
};

export default Filter;
