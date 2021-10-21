import { useState } from "react";
import { useAction } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";

const PackagesList: React.FC = () => {
  const [name, setName] = useState("");

  const { data, loading, error } = useTypedSelector((state) => state.packages);
  const { searchRepositories } = useAction();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(name);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={name} />
        <button type="submit">{loading ? "Please wait..." : "Search"}</button>
      </form>
      {error && <h3>{error}</h3>}
      {data.map((name) => (
        <p key={name}>{name}</p>
      ))}
    </>
  );
};

export default PackagesList;
