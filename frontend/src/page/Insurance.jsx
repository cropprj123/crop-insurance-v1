/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState, useEffect } from "react";
const truncateText = (text, limit) => {
  if (!text) return ""; // Handle cases where text might be undefined
  return text.length > limit ? text.slice(0, limit) + "..." : text;
};

const Insurance = () => {
  const [insurances, setInsurances] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(function () {
    async function getInsurances() {
      try {
        setIsLoading(true);
        setError("");
        const response = await axios.get(
          `http://127.0.0.1:3000/api/v1/insurance`
        );
        console.log("response ", response.data.data.policies); // Handle the response as needed

        if (response.status !== 200)
          throw new Error("Something went wrong with fetchintg crops");

        const cropsData = response.data.data.policies;
        if (cropsData.length === 0) {
          throw new Error("No crops found");
        }
        setInsurances(cropsData);

        setIsLoading(false);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    getInsurances();
  }, []);
  return (
    <>
      <div className=" mx-auto max-w-screen-xl p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-400 mb-4">
            Crop Insurance Plans
          </h1>
          <hr className="border-t-4 border-blue-600  mx-auto " />
        </div>
        {/* Insurance container */}
        <div className="flex flex-col gap-6 p-4">
          {/* Example Card 1 */}
          {insurances?.map((insurance) => (
            <div
              key={insurance._id}
              className="bg-white border border-gray-300 rounded-lg shadow-md p-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                <div className="p-5 ">
                  <h2 className="text-2xl font-semibold text-green-500 mb-4">
                    {insurance.policy_name}
                  </h2>
                  <p className="text-gray-500">
                    {/* Comprehensive coverage for all crop types, with premium
                    support. Comprehensive coverage for all crop types, with
                    premium support. Comprehensive coverage for all crop types,
                    with premium support. Comprehensive coverage for all crop
                    types, with premium support. */}
                    {/*  {insurance.terms_conditions} */}
                    {truncateText(insurance.terms_conditions, 300)}
                  </p>
                </div>

                <div className="p-5">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Key Deatils
                  </h2>
                  <ul className="order-1">
                    <li className="mb-2">
                      <span className="text-gray-500">crop_type : </span>
                      <span className="text-black-500">
                        {insurance.coverage_details.crop_type}
                      </span>
                    </li>
                    <li className="mb-2">
                      <span className="text-gray-500">max_coverage : </span>
                      <span className="text-black-500">
                        {insurance.coverage_details.max_coverage}
                      </span>
                    </li>
                    <li className=" mb-2">
                      <span className="text-gray-500">duration_months : </span>
                      <span className="text-black-500">
                        {insurance.coverage_details.duration_months}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    key Benefits
                  </h2>
                  <ul className="order-1">
                    <li className="text-gray-600 mb-2">
                      {" "}
                      <span className="text-gray-500">premium : </span>
                      <span className="text-black-500">
                        {insurance.premium}
                      </span>
                    </li>
                    <li className="text-gray-600 mb-2">
                      {" "}
                      <span className="text-gray-500">agent_visit_fee : </span>
                      <span className="text-black-500">
                        {insurance.agent_visit_fee}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-end mt-4 gap-4">
                <div className="text-gray-600  font-bold p-2">
                  Created at :{" "}
                  {new Date(insurance.createdAt).toLocaleDateString("en-GB")}
                </div>

                <span
                  className={`px-3 py-1 text-lg font-semibold rounded ${
                    insurance.active
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {insurance.active ? "Active" : "Inactive"}
                </span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Buy Now
                </button>
                <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Insurance;
