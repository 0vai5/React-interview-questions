// solution1= manipulating the users coming from the api response
// import React, { useEffect, useState } from "react";

// const Page = () => {
//   const [Users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((json) => {
//         setUsers(json);
//       });
//   }, []);

//   return (
//     <>
//       <h1 className="font-extrabold text-4xl  text-center">Users</h1>
//       <div className="flex justify-center gap-10 flex-wrap">
//         {Users.map((user) => (
//           <div key={user.id} className="text-center">
//             <div className="w-64 h-auto bg-slate-400 font-semibold mt-5">
//               <p>
//                 <span className="text-zinc-200 font-bold text-xl mt-0">
//                   Name: <br />
//                 </span>
//                 {user.name}
//               </p>
//               <p>
//                 <span className="text-zinc-200 font-bold text-xl mt-0">
//                   UserName: <br />
//                 </span>
//                 {user.username}
//               </p>
//               <p>
//                 <span className="text-zinc-200 font-bold text-xl mt-0">
//                   Email: <br />
//                 </span>
//                 {user.email}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Page;


//solution 2: selecting if the dropdown of countries is selected and we should manipulate the cities in the countries object
"use client";
import React, { useState } from "react";

const Page = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const countries = [
    {
      name: "Pakistan",
      cities: ["Islamabad", "Karachi", "Lahore"],
    },
    {
      name: "India",
      cities: ["Delhi", "Hyderabad", "Kolkata"],
    },
    {
      name: "Bangladesh",
      cities: ["Dhaka", "Chittagong", "Mirpur"],
    },
    {
      name: "United Arab Emirates",
      cities: ["SHarjah", "Abu Dhabi", "Dubai"],
    },
  ];

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  let citiesOptions;

  if (selectedCountry) {
    const selectedCountryObject = countries.find(
      (country) => country.name === selectedCountry
    );
    citiesOptions = selectedCountryObject ? selectedCountryObject.cities : [];
    
  } else {
    citiesOptions = [];
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-10">
        <h1 className="font-extrabold text-4xl">Countries and Cities</h1>
        <br />
        <select
          className="border-4 border-zinc-950 font-bold text-lg mb-5"
          onChange={handleCountryChange}
        >
          <option className=" bg-white text-black" value="">Select a country</option>
          {countries.map((country) => (
            <option className=" bg-white text-black" key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>

        
        
       
          
          <select className="border-4 border-zinc-950 font-bold text-lg">
          <option className=" bg-white text-black" value="">Select a city</option>
            {citiesOptions.map((city) => (
              <option className=" bg-white text-black" key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        
      </div>
    </>
  );
};

export default Page;
