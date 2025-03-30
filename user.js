import { useState } from "react";

const papers = [
  {
    title: "Quantum Computing",
    link: "https://arxiv.org/pdf/quant-ph/9707021.pdf",
  },
  {
    title: "AI in Medicine",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7600542/",
  },
  {
    title: "Blockchain Security",
    link: "https://arxiv.org/pdf/1904.00274.pdf",
  },
  {
    title: "Neural Networks and Deep Learning",
    link: "https://arxiv.org/pdf/1404.7828.pdf",
  },
  {
    title: "Cybersecurity Frameworks",
    link: "https://www.nist.gov/system/files/documents/cyberframework/cybersecurity-framework-021214.pdf",
  },
];

export default function UserPage() {
  const [query, setQuery] = useState("");

  const filteredPapers = query
    ? papers.filter((paper) =>
        paper.title.toLowerCase().includes(query.toLowerCase())
      )
    : papers;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
        📚 Research Papers
      </h1>

      <input
        type="text"
        placeholder="🔍 Search for papers..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full max-w-lg p-3 text-lg border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />

      <div className="mt-6 w-full max-w-2xl grid gap-4">
        {filteredPapers.length > 0 ? (
          filteredPapers.map((paper, index) => (
            <a
              key={index}
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <h2 className="text-xl font-semibold text-gray-700">
                {paper.title}
              </h2>
              <p className="text-sm text-blue-500 mt-1">Click to view</p>
            </a>
          ))
        ) : (
          <p className="text-gray-500 text-lg">No papers found.</p>
        )}
      </div>
    </div>
  );
}
