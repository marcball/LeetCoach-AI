import React from "react";

export default function DSAPage() {
  // Data structure list with progress
  const dataStructures = [
    { name: "Arrays", description: "Great for beginners", progress: 70, difficulty: "Easy" },
    { name: "Linked Lists", description: "A bit more challenging", progress: 50, difficulty: "Easy" },
    { name: "Stacks", description: "Simple and useful", progress: 85, difficulty: "Medium" },
    { name: "Queues", description: "Easy to grasp", progress: 40, difficulty: "Medium" },
    { name: "Trees", description: "Intermediate complexity", progress: 30, difficulty: "Medium" },
    { name: "Graphs", description: "Advanced concepts", progress: 20, difficulty: "Hard" },
    { name: "Heaps", description: "Intermediate level", progress: 60, difficulty: "Hard" },
    { name: "Hash Tables", description: "Very practical", progress: 90, difficulty: "Hard" },
  ];

  return (
    <div className="w-screen bg-gray">
      {/* Fixed Header */}
        <h1 className="text-4xl font-bold p-6 text-center top-0 w-full">DSA Preparation</h1>


      {/* Fullscreen layout with two sections per row */}
      <div className="flex flex-col">
        {dataStructures.reduce((rows, ds, index) => {
          // Group items in pairs for two-column layout
          if (index % 2 === 0) {
            rows.push([ds]);
          } else {
            rows[rows.length - 1].push(ds);
          }
          return rows;
        }, []).map((row, rowIndex) => (
          <div key={rowIndex} className="w-screen min-h-screen flex flex-wrap justify-center items-center gap-6 p-6">
            {row.map((ds, index) => (
              <div
                key={index}
                className="w-full md:w-[45%] bg-white shadow-2xl rounded-xl p-12 flex flex-col justify-between"
              >
                {/* Difficulty Level */}
                <div className={`text-white text-lg font-bold px-4 py-2 rounded-md w-fit ${
                  ds.difficulty === "Easy" ? "bg-green-500" :
                  ds.difficulty === "Medium" ? "bg-yellow-500" :
                  "bg-red-500"
                }`}>
                {ds.difficulty}
                </div>

                {/* Title & Description */}
                <h3 className="text-5xl font-bold text-gray-800 mt-6">{ds.name}</h3>
                <p className="text-2xl text-gray-600 mt-4">{ds.description}</p>

                {/* Progress Bar */}
                <div className="mt-6 w-full">
                  <div className="bg-gray-300 h-6 rounded-full">
                    <div
                      className="bg-purple-600 h-6 rounded-full transition-all duration-500"
                      style={{ width: `${ds.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-xl text-gray-500 mt-2">
                    {ds.progress}% completed
                  </p>
                </div>

                {/* Placeholder for Problem List */}
                <div className="mt-8 bg-gray-200 p-10 rounded-lg min-h-[350px] flex items-center justify-center">
                  <p className="text-xl text-gray-700">Problem list goes here...</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
