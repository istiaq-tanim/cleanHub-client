"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const FilterByRatings = () => {
  const [query, setQuery] = useState<string[]>([]);
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const name = e.target.name;
    const checked = e.target.checked;
    if (checked) {
      setQuery((prev) => [...prev, name]);
    } else {
      const filtered = query.filter((item) => item !== name);
      setQuery(filtered);
    }
  };

  useEffect(() => {
    const rating = params.get("rating");
    if (rating) {
      const decodedRating = decodeURI(rating);
      const queryInRating = decodedRating.split("|");
      setQuery(queryInRating);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      params.set("rating", encodeURI(query.join("|")));
    } else {
      params.delete("rating");
    }
    replace(`${pathName}?${params.toString()}`, { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  return (
    <div>
      <h3 className="font-bold text-lg">Star Category</h3>
      <form
        action=""
        className="flex flex-col gap-2 mt-2 border border-[#E2E2E2] p-3"
      >
        <label htmlFor="fiveStar">
          <input
            type="checkbox"
            name="5"
            checked={query.includes("5")}
            id="fiveStar"
            onChange={handleChange}
          />
          5 Star
        </label>

        <label htmlFor="fourStar">
          <input
            type="checkbox"
            name="4"
            checked={query.includes("4")}
            id="fourStar"
            onChange={handleChange}
          />
          4 Star
        </label>

        <label htmlFor="threeStar">
          <input
            type="checkbox"
            name="3"
            checked={query.includes("3")}
            id="threeStar"
            onChange={handleChange}
          />
          3 Star
        </label>

        <label htmlFor="twoStar">
          <input
            type="checkbox"
            name="2"
            checked={query.includes("2")}
            id="twoStar"
            onChange={handleChange}
          />
          2 Star
        </label>

        <label htmlFor="oneStar">
          <input
            type="checkbox"
            name="1"
            checked={query.includes("1")}
            id="oneStar"
            onChange={handleChange}
          />
          1 Star
        </label>
      </form>
    </div>
  );
};

export default FilterByRatings;
