import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import PackagesList from "./components/PackagesList";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search Packages</h1>
        <PackagesList />
      </div>
    </Provider>
  );
};

export default App;
