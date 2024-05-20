"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const FilterByCategory = () => {
  const [category, setCategory] = useState<string[]>([]);
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  const params = new URLSearchParams(searchParams);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, checked } = e.target;

    if (checked) {
      setCategory((prev) => [...prev, name]);
    } else {
      const filtered = category.filter((item) => item !== name);
      setCategory(filtered);
    }
  };

  useEffect(() => {
    const category = params.get("category");
    if (category) {
      const decodedCategory = decodeURI(category);
      const queryInPrice = decodedCategory.split("|");
      setCategory(queryInPrice);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (category.length > 0) {
      params.set("category", encodeURI(category.join("|")));
    } else {
      params.delete("category");
    }
    replace(`${pathName}?${params.toString()}`, { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);
  return (
    <div>
      <h3 className="font-bold text-lg">Categories / Brands</h3>
      <form
        action=""
        className="flex flex-col gap-2 mt-2 border border-[#E2E2E2] p-3"
      >
        <label htmlFor="soap">
          <input
            type="checkbox"
            checked={category.includes("soap")}
            name="soap"
            id="soap"
            onChange={handleChange}
          />
          Dish Soap
        </label>
        <label htmlFor="liquid">
          <input
            type="checkbox"
            checked={category.includes("liquid")}
            name="liquid"
            id="liquid"
            onChange={handleChange}
          />
          Dish Liquid
        </label>
        <label htmlFor="detergent">
          <input
            type="checkbox"
            checked={category.includes("detergent")}
            name="detergent"
            id="detergent"
            onChange={handleChange}
          />
          Dish Detergent
        </label>
        <label htmlFor="brush">
          <input
            type="checkbox"
            name="brush"
            checked={category.includes("brush")}
            id="brush"
            onChange={handleChange}
          />
          Dish Brushes
        </label>
        <label htmlFor="gloves">
          <input
            type="checkbox"
            checked={category.includes("gloves")}
            name="gloves"
            id="gloves"
            onChange={handleChange}
          />
          Dish Gloves
        </label>
        <label htmlFor="sponges">
          <input
            type="checkbox"
            checked={category.includes("sponges")}
            name="sponges"
            id="sponges"
            onChange={handleChange}
          />
          Dish Sponges
        </label>
      </form>
    </div>
  );
};

export default FilterByCategory;
