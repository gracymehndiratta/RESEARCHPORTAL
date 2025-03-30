import { useState } from "react";

const papers = [
  {
    title: "Quantum Computing",
    link: "https://arxiv.org/vc/quant-ph/papers/0511/0511061v1.pdf",
  },
  {
    title: "AI in Medicine",
    link: "https://www.sciencedirect.com/science/article/pii/S2095809919301535",
  },
  {
    title: "Blockchain Security",
    link: "https://www.sciencedirect.com/science/article/pii/S2096720922000070",
  },
  {
    title: "Sustainable Energy Research",
    link: "https://www.sciencedirect.com/science/article/pii/S2949753122000066",
  },
  {
    title: "Space Exploration and Technology",
    link: "https://ntrs.nasa.gov/api/citations/20210009988/downloads/NASA-TM-20210009988Final.pdf",
  },
];

export default function UserPage() {
  const [query, setQuery] = useState("");

  const filteredPapers = papers.filter((paper) =>
    paper.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800">Research Papers</h1>
      <p className="text-gray-600 mt-2">Search and download research papers</p>

      <input
        type="text"
        placeholder="Search papers..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mt-4 border p-3 rounded-lg w-full max-w-lg text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />

      <ul className="mt-6 w-full max-w-lg bg-white p-4 rounded-lg shadow-md divide-y divide-gray-200">
        {filteredPapers.length > 0 ? (
          filteredPapers.map((paper, index) => (
            <li key={index} className="py-3">
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-lg font-semibold"
              >
                {paper.title}
              </a>
            </li>
          ))
        ) : (
          <li className="text-gray-500 text-center py-3">No results found</li>
        )}
      </ul>
    </div>
  );
}
