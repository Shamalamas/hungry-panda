import React from "react";


const resources = [
  {
    title: "Harvard Business Review",
    description: "Insights and best practices for management, strategy, and leadership.",
    link: "https://hbr.org/",
    type: "Business Strategy",
  },
  {
    title: "Nielsen Norman Group",
    description: "World-leading research and expert guidance on user experience (UX) design.",
    link: "https://www.nngroup.com/",
    type: "Design & UX",
  },
  {
    title: "Khan Academy",
    description: "Free courses and educational resources covering math, science, economics, and arts.",
    link: "https://www.khanacademy.org/",
    type: "General Education",
  },
  {
    title: "Coursera",
    description: "Online courses and specializations from top universities and companies worldwide.",
    link: "https://www.coursera.org/",
    type: "Professional Courses",
  },
  {
    title: "The Economist",
    description: "Global analysis of politics, current affairs, business, and finance.",
    link: "https://www.economist.com/",
    type: "Current Affairs",
  },
  {
    title: "NASA Image and Video Library",
    description: "High-resolution media resources covering space exploration and scientific discovery.",
    link: "https://images.nasa.gov/",
    type: "Science & Research",
  },
];


const ResourcesPage = () => {
  return (
   
    <div className="min-h-screen bg-black text-white pt-6 pb-16 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-6xl mx-auto">
        
        
        <header className="text-center mb-12">
          <h1
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2"
            
            style={{ textShadow: "0 0 18px rgba(99,102,241,0.85)" }} 
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-violet-400">
              Resources
            </span>
          </h1>
          <p className="text-sm sm:text-base text-indigo-200/60">
            Curated list of guides, tutorials, and tools for building the future across all disciplines.
          </p>
        </header>

        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((res, index) => (
            <div
              key={res.title} 
              className="relative rounded-2xl p-6 transition transform hover:scale-[1.03] duration-300
                         bg-gradient-to-b from-black/60 to-neutral-900/70 border border-indigo-800/30"
              style={{
                
                boxShadow: "0 6px 30px rgba(2,6,23,0.6), 0 0 18px rgba(99,102,241,0.06)",
                backdropFilter: "blur(6px)",
              }}
            >
              
              
              <div
                aria-hidden
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  
                  boxShadow: "inset 0 0 0 1px rgba(99,102,241,0.06), 0 0 18px rgba(79,70,229,0.06)",
                }}
              />

              
              <div className="mb-3">
                <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-indigo-900/40 text-indigo-300 border border-indigo-700/50">
                  {res.type}
                </span>
              </div>
              
              <h2 className="text-xl font-semibold mb-2">{res.title}</h2>
              <p className="text-indigo-100/80 text-sm mb-4">{res.description}</p>
              
              <a
                href={res.link}
                target="_blank"
                rel="noopener noreferrer"

                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-indigo-500/40 text-indigo-50 text-sm transition transform hover:-translate-y-0.5"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(86,61,255,0.12), rgba(59,130,246,0.06))",
                  boxShadow: "0 6px 20px rgba(79,70,229,0.12), 0 0 18px rgba(99,102,241,0.14)",
                }}
              >
                
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
                Go to Resource
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;