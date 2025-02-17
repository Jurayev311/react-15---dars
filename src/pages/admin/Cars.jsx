import React from "react";
import { useDeleteCarMutation, useGetCarQuery } from "../../redux/api/car.api";

const Cars = () => {
  const { data, error, isLoading } = useGetCarQuery();
  const [deleteCar] = useDeleteCarMutation()

  if (isLoading) return <p className="text-center text-blue-500">Yuklanmoqda...</p>;
  if (error) return <p className="text-center text-red-500">Xatolik yuz berdi!</p>;

  const handleDeleteCar = id => {
    console.log(id);
    deleteCar(id)
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
        {data?.map((car) => (
          <div
            key={car.id}
            className="flex flex-col gap-3"
          >
            <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition min-h-[300px]">
              <img src={car.image} alt={car.name} className="w-full h-40 object-cover rounded-md" />
              <div className="mt-3 flex flex-col gap-1">
                <h2 className="text-lg font-bold">{car.name}</h2>
                <p className="text-gray-600">Brend: {car.brand}</p>
                <p className="text-gray-600">Rang: {car.color}</p>
                <p className="text-gray-600">Yili: {car.year}</p>
                <div className="flex gap-2 mt-3">
                  <button onClick={() => handleDeleteCar(car.id)} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">Delete</button>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Update</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cars;
