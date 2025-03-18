import CountriesList from "./components/CountriesList";
import SearchCountry from "./components/SearchCountry";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-700 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">
        Explorar Países
      </h1>
      <SearchCountry />
      <CountriesList />
    </div>
  );
}
