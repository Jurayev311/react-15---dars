import React, { useRef } from "react";
import { useCreateCarMutation } from "../../redux/api/car.api";

const CreateCar = () => {
  
  const [ createCar, {isLoading, isSuccess, isError}] = useCreateCarMutation() // [] array qaytaradi

  const carName = useRef(null)
  const carBrand = useRef(null)
  const carColor = useRef(null)
  const carYear = useRef(null)
  const carImage = useRef(null)

  const handleCreateCar = e => {
    e.preventDefault()
    let newCar = {
      name: carName.current.value,
      color: carColor.current.value,
      brand: carBrand.current.value,
      year: carYear.current.value,
      image: carImage.current.value,
    }
    
    
    createCar(newCar)
      .unwrap()
      .then(() => {
        carName.current.value = ""
        carBrand.current.value = ""
        carColor.current.value = ""
        carYear.current.value = ""
        carImage.current.value = ""
      })
    
  }

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-6 mt-5 border border-gray-200 max-h-[490px]">
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-5">
        Yangi Mashina Qo‘shish
      </h2>
      <form onSubmit={handleCreateCar} className="flex flex-col gap-4">
        <input
          ref={carName}
          type="text"
          placeholder="Mashina nomi"
          required
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <input
          ref={carBrand}
          type="text"
          placeholder="Brend"
          required
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <input
          ref={carColor}
          type="text"
          placeholder="Rang"
          required
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <input
          ref={carYear}
          type="number"
          placeholder="Yil"
          required
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <input
          ref={carImage}
          type="url"
          placeholder="Rasm URL"
          required
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <button
          disabled = {isLoading}
          type="submit"
          required
          className="bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition font-semibold text-lg shadow-md disabled:opacity-50 cursor-pointer disabled:cursor-default"
        >
          {
            isLoading ? 'Loading' : "Qo'shish"
          }
        </button>
      </form>
    </div>
  );
};

export default CreateCar;
