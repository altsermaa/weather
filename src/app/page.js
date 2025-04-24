import { OuterBox } from "./_components/OuterBox";

const HomePage = async () => {
  const countryJSON = await fetch(
    "https://countriesnow.space/api/v0.1/countries"
  );

  const countries = await countryJSON.json();

  const fixedData = countries.data.map((el) => {
    return el.cities.map((city) => {
      return { cityName: city, countryName: el.country };
    });
  });

  return (
    <div>
      <OuterBox fixedData={fixedData}/>
    </div>
  );
};

export default HomePage;
