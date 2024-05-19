import Container from "../Container";

const Category = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[#3D3D3D] mt-20 text-3xl">Top Categories</h1>
        <p className="text-[#666666] max-w-[80ch] mt-5 mb-10 text-center">
          Discover a range of top products that ensure your dishes come out
          spotless and sanitized. Our selection includes a variety of
          formulations to suit different needs and preferences, from powerful
          tablets to eco-friendly gels and powders.
        </p>
      </div>

      <div className="grid grid-col-12 gap-4">
        <div className="col-span-12 cursor-pointer">
          <div
            style={{
              backgroundImage: `url('/tile1.jpg')`,
              width: "100%",
              height: "200px",
            }}
            className="bg-center flex flex-col-reverse justify-center items-center bg-cover bg-blend-multiply bg-gray-400 rounded-lg"
          >
            <div className="mb-5 w-10/12 max-w-7xl text-[#f4ecec] mx-auto">
              <h1 className="text-2xl lg:text-3xl text-[#f2f0f0]  font-serif">
                Dish Soap
              </h1>
              <p className="text-justify">
                {" "}
                Explore a variety of dish soaps designed to cut through grease{" "}
                <br />
                and leave your dishes sparkling clean.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-4  cursor-pointer">
          <div
            style={{
              backgroundImage: `url('/tile-6.png')`,
              width: "100%",
              height: "200px",
            }}
            className="bg-center flex flex-col-reverse justify-center items-center bg-fit 
            bg-blend-multiply bg-gray-400 rounded-lg"
          >
            <div className="mb-5 w-10/12 max-w-7xl text-[#f4ecec] mx-auto">
              <h1 className="text-2xl lg:text-3xl text-[#f2f0f0] font-serif">
                Dish Gloves
              </h1>
              <p className="text-justify">
                Discover a variety of dish gloves designed to protect your hands
                while you tackle dirty dishes.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-4  cursor-pointer">
          <div
            style={{
              backgroundImage: `url('/tile-5.jpg')`,
              width: "100%",
              height: "200px",
            }}
            className="bg-center flex flex-col-reverse justify-center items-center bg-cover
            bg-blend-multiply bg-gray-400 rounded-lg"
          >
            <div className="mb-5 w-10/12 max-w-7xl text-[#f4ecec] mx-auto">
              <h1 className="text-2xl lg:text-3xl text-[#f2f0f0] font-serif">
                Dish Brushes
              </h1>
              <p className="text-justify">
                Browse through different types of dish brushes perfect for
                scrubbing away stubborn food residues.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-4 cursor-pointer">
          <div
            style={{
              backgroundImage: `url('/tile-4.jpg')`,
              width: "100%",
              height: "200px",
            }}
            className="bg-center flex flex-col-reverse justify-center items-center bg-cover
            bg-blend-multiply bg-gray-400 rounded-lg"
          >
            <div className="mb-5 w-10/12 max-w-7xl text-[#f4ecec] mx-auto">
              <h1 className="text-2xl lg:text-3xl text-[#f2f0f0] font-serif">
                Dish Sponges
              </h1>
              <p className="text-justify">
                Find a variety of dish sponges suitable for gentle cleaning to
                tough scrubbing tasks.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-6 cursor-pointer">
          <div
            style={{
              backgroundImage: `url('/tile2.webp')`,
              width: "100%",
              height: "200px",
            }}
            className="bg-center flex flex-col-reverse justify-center items-center bg-cover bg-blend-multiply bg-gray-400 rounded-lg"
          >
            <div className="mb-5 w-10/12 max-w-7xl text-[#f4ecec] mx-auto">
              <h1 className="text-2xl lg:text-3xl text-[#f2f0f0] font-serif">
                Dishwasher Detergent
              </h1>
              <p className="text-justify">
                {" "}
                Discover a range of dishwasher detergents that ensure your
                dishes come out spotless and sanitized.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-6 cursor-pointer">
          <div
            style={{
              backgroundImage: `url('/tile3.webp')`,
              width: "100%",
              height: "200px",
            }}
            className="bg-center flex flex-col-reverse justify-center items-center bg-cover
            bg-blend-multiply bg-gray-400 rounded-lg"
          >
            <div className="mb-5 w-10/12 max-w-7xl text-[#f4ecec] mx-auto">
              <h1 className="text-2xl lg:text-3xl text-[#f2f0f0] font-serif">
                Dish Liquid
              </h1>
              <p className="text-justify">
                Get powerful dishwasher Liquid Soap that keep your machine
                running smoothly and prevent buildup.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Category;
