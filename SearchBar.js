export default function SearchBar({ query, setQuery }) {
  return (
    <input
      type="text"
      placeholder="Search research papers..."
      className="p-2 border rounded w-full"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
