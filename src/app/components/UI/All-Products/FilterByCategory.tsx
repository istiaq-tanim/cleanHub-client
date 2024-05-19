const FilterByCategory = () => {
  return (
    <div>
      <h3 className="font-bold text-lg">Categories / Brands</h3>
      <form
        action=""
        className="flex flex-col gap-2 mt-2 border border-[#E2E2E2] p-3"
      >
        <div className="flex gap-1 items-center">
          <input type="checkbox" name="fiveStar" id="fiveStar" />
          <label htmlFor="fiveStar">Dish Soap</label>
        </div>

        <div className="flex gap-1 items-center">
          <input type="checkbox" name="fiveStar" id="fiveStar" />
          <label htmlFor="fiveStar">Dish Liquid</label>
        </div>
        <div className="flex gap-1 items-center">
          <input type="checkbox" name="fiveStar" id="fiveStar" />
          <label htmlFor="fiveStar">Dish Detergent</label>
        </div>
        <div className="flex gap-1 items-center">
          <input type="checkbox" name="fiveStar" id="fiveStar" />
          <label htmlFor="fiveStar">Dish Brushes</label>
        </div>
        <div className="flex gap-1 items-center">
          <input type="checkbox" name="fiveStar" id="fiveStar" />
          <label htmlFor="fiveStar">Dish Gloves</label>
        </div>
        <div className="flex gap-1 items-center">
          <input type="checkbox" name="fiveStar" id="fiveStar" />
          <label htmlFor="fiveStar">Dish Sponges</label>
        </div>
      </form>
    </div>
  );
};

export default FilterByCategory;
