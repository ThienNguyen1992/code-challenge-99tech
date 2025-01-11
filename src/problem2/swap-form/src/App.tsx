import "flowbite";
import InfoCard from "./components/InfoCard";
import ResultCard from "./components/ResultCard";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-teal-900 gap-10">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-[#F3EB78] via-purple-600 to-[#AF4261] bg-clip-text text-transparent">
        Swap Form
      </h1>
      <InfoCard />
      <ResultCard />
    </div>
  );
}

export default App;
