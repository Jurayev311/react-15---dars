import React from 'react'
import { useGetCarQuery } from '../../redux/api/car.api';


const Cars = () => {
  const {data, error, isLoading} = useGetCarQuery()
  console.log(data);
  

  return (
    <div>
      {
        data?.map((car) => (
          <div key={car.id}>
            <h2>{car.name}</h2>
          </div>
        ))
      }
    </div>
  )
}

export default Cars