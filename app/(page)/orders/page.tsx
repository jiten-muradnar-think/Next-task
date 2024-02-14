"use client";
import axios from "axios";
import React from "react";

const fetchData = async () => {
  const userList = await axios.get("http://localhost:8000/users");
  return userList;
};

const OrderList = async () => {
  const orderList: any = await fetchData();

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-4">Orders List</h1>

      <div className="mt-10 shadow-lg sm:rounded-xl">
        <table className="w-full text-lg text-left mb-6">
          <thead className="text-lg text-gray-700 uppercase bg-gray-200 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                EmailId
              </th>
              <th scope="col" className="px-6 py-3">
                PhoneNumber
              </th>

              <th scope="col" className="px-6 py-3">
                City
              </th>
              <th scope="col" className="px-6 py-3">
                DOB
              </th>
            </tr>
          </thead>
          <tbody>
            {orderList?.data?.map((item: any) => (
              <tr className="odd:bg-white  even:bg-gray-100  border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item?.name}
                </th>
                <td className="px-6 py-4">{item?.email}</td>
                <td className="px-6 py-4">{item?.phoneNumber}</td>
                <td className="px-6 py-4">{item?.city}</td>
                <td className="px-6 py-4">{item?.dob}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
