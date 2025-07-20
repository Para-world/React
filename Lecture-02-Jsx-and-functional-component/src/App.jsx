import BioCard from "./BioCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center space-y-6">
      <h1 className="text-3xl font-bold text-purple-700">JSX and Functional Components</h1>
      <BioCard/>
    </div>
  );
}

export default App;