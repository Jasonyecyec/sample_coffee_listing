import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BGCafe from "./assets/bg-cafe.jpg";
import { useQuery } from "@tanstack/react-query";
import Coffee from "./components/Coffee";

const fetchCoffee = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

function App() {
  const { isPending, isError, data } = useQuery({
    queryKey: ["coffees"],
    queryFn: fetchCoffee,
  });

  const [all, setAll] = useState(false);
  const [filter, setFilter] = useState("available");

  return (
    <main className="min-h-screen bg-secondColor relative flex items-center justify-center py-[12rem]">
      <div>
        <img src={BGCafe} alt="bg-cage" className="absolute top-0 right-0" />
      </div>

      <section className="w-[80%] bg-firstColor z-30 rounded-xl p-20 px-32  flex flex-col items-center">
        <div className="text-center w-[30rem] space-y-4">
          <h1 className="text-white font-bold  text-[2rem] ">Our Collection</h1>
          <p className="text-thirdColor font-medium">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>

          <div className="space-x-5">
            <button
              onClick={() => {
                setAll(!all);
                setFilter("all");
              }}
              className={`${
                filter === "all" ? "bg-thirdColor" : "hover:bg-secondColor"
              } font-medium rounded-lg text-white px-5 py-2 ease-in-out duration-300 `}
            >
              All Products
            </button>

            <button
              onClick={() => {
                setAll(!all);
                setFilter("available");
              }}
              className={`${
                filter === "available"
                  ? "bg-thirdColor"
                  : "hover:bg-secondColor"
              } font-medium rounded-lg text-white px-5 py-2 ease-in-out duration-300 `}
            >
              Available
            </button>
          </div>
        </div>

        {/*  */}
        <div className="w-full grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10  place-items-center mt-10	">
          {" "}
          {isPending && <p className="text-[10rem]">Loading</p>}{" "}
          {data &&
            data.map(
              (coffee) =>
                (all || (!all && coffee.available)) && (
                  <Coffee data={coffee} key={coffee.id} />
                )
            )}
        </div>
      </section>
    </main>
  );
}

export default App;
