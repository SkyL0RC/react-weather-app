import React from "react";

const City = ({ city }) => {
  if (!city) {
    return <div>Veri yükleniyor...</div>;
  }

  return (
    <div>
      <div>
        <h1 className="text-5xl">{city.main.temp}</h1>
        <h1 className="text-3xl">{city.name}</h1>
        <h1 className="text-2xl">{city.weather[0].main}</h1>
      </div>
    </div>
  );
};

export default City;
