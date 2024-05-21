import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
          <div>
            <h2 className="text-lg font-semibold mb-4">Navigation</h2>
            <ul>
              <li className="mb-2">
                <Link
                  href="/flash-sale"
                  className="text-gray-300 hover:text-white transition"
                >
                  Trending Products
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/category"
                  className="text-gray-300 hover:text-white transition"
                >
                  Categories/Brands
                </Link>
              </li>
              <li className="mb-2">
                <a
                  href="#about-us"
                  className="text-gray-300 hover:text-white transition"
                >
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#contact-us"
                  className="text-gray-300 hover:text-white transition"
                >
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#customer-care"
                  className="text-gray-300 hover:text-white transition"
                >
                  Customer Care
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-400">
              1234 Street Name, City, State, 12345
            </p>
            <p className="text-gray-400">Email: info@example.com</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.609 1.794-1.574 2.163-2.724-.949.555-2.005.959-3.127 1.184-.897-.959-2.178-1.56-3.594-1.56-2.72 0-4.924 2.203-4.924 4.917 0 .39.045.765.127 1.124-4.09-.205-7.72-2.164-10.148-5.144-.424.722-.666 1.561-.666 2.457 0 1.69.86 3.18 2.175 4.06-.798-.025-1.548-.245-2.2-.61v.061c0 2.362 1.675 4.334 3.897 4.776-.407.11-.836.171-1.278.171-.31 0-.615-.03-.916-.086.631 1.953 2.445 3.376 4.6 3.416-1.68 1.32-3.808 2.107-6.115 2.107-.397 0-.787-.023-1.175-.067 2.188 1.402 4.798 2.22 7.597 2.22 9.113 0 14.093-7.545 14.093-14.093 0-.215 0-.428-.015-.64.964-.695 1.8-1.562 2.46-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.04c-5.523 0-10 4.477-10 10 0 4.99 3.657 9.127 8.437 9.878v-7h-2.54v-2.878h2.54v-2.192c0-2.507 1.492-3.885 3.777-3.885 1.095 0 2.24.195 2.24.195v2.46h-1.263c-1.246 0-1.63.774-1.63 1.564v1.899h2.77l-.444 2.878h-2.326v7c4.78-.751 8.437-4.888 8.437-9.878 0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500">
          &copy; 2024 Clean Sweep. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
