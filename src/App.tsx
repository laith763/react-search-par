import "./App.css";
import SearchProvider from "./components/SearchPar/context/SearchDataProvider";
import SearchParContainer from "./containers/SearchPar/Container";

function App() {
  return (
    <div className="bg-white">
      <SearchProvider>
        <SearchParContainer />
      </SearchProvider>
    </div>
  );
}

export default App;
