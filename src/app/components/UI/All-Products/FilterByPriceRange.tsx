"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const FilterByPriceRange = () => {
  const [price, setPrice] = useState<string[]>([]);
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  const params = new URLSearchParams(searchParams);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, checked } = e.target;
    if (checked) {
      setPrice((prev) => [...prev, name]);
    } else {
      const filtered = price.filter((item) => item !== name);
      setPrice(filtered);
    }
  };

  useEffect(() => {
    const price = params.get("price");
    if (price) {
      const decodedPrice = decodeURI(price);
      const queryInPrice = decodedPrice.split("|");
      setPrice(queryInPrice);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (price.length > 0) {
      params.set("price", encodeURI(price.join("|")));
    } else {
      params.delete("price");
    }
    replace(`${pathName}?${params.toString()}`, { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [price]);

  return (
    <div>
      <h3 className="font-bold text-lg text-[#2D2D2D]">Price Range</h3>
      <form
        action=""
        className="flex flex-col gap-2 mt-2 border border-[#E2E2E2] p-3"
      >
        <label htmlFor="range1">
          <input
            type="checkbox"
            name="0-10"
            checked={price.includes("0-10")}
            id="range1"
            onChange={handleChange}
          />
          $0 - $10
        </label>

        <label htmlFor="range2">
          <input
            type="checkbox"
            name="10-20"
            id="range2"
            checked={price.includes("10-20")}
            onChange={handleChange}
          />
          $10 - $20
        </label>

        <label htmlFor="range3">
          <input
            type="checkbox"
            name="20-30"
            checked={price.includes("20-30")}
            id="range3"
            onChange={handleChange}
          />
          $20 - $30
        </label>

        <label htmlFor="range3">
          <input
            type="checkbox"
            name="30-40"
            checked={price.includes("30-40")}
            id="range3"
            onChange={handleChange}
          />
          $30 - $40
        </label>

        <label htmlFor="range4">
          <input
            type="checkbox"
            name="40-50"
            checked={price.includes("40-50")}
            id="range4"
            onChange={handleChange}
          />
          $40 - $50
        </label>

        <label htmlFor="range5">
          <input
            type="checkbox"
            name="50-10000000"
            checked={price.includes("50-10000000")}
            id="range5"
            onChange={handleChange}
          />
          $50+
        </label>
      </form>
    </div>
  );
};

export default FilterByPriceRange;
