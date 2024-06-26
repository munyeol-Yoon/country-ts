import CountryList from "./components/CountryList.tsx";

function App() {
  return (
    <main className="flex justify-center items-center min-w-[320px] min-h-[100vh] bg-gray-200">
      <div className="container p-6 mx-auto">
        <CountryList />
      </div>
    </main>
  );
}

export default App;
