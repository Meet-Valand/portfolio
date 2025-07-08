// const projects = [
//   {
//     title: "Baskin Robbins Franchise Info Website",
//     description:
//       "Franchise website for Baskin Robbins with franchise details and interactive UI.",
//     demo: "https://basskin-robbins-motera-nhidzyce1-meet-valands-projects.vercel.app/",
//     github: "https://github.com/Meet-Valand/BasskinRobbinsMotera",
//     tags: ["Frontend", "Responsive", "Business"],
//   },
//   {
//     title: "Restaurant Menu Website",
//     description:
//       "Interactive menu web app designed for a modern restaurant experience.",
//     demo: "https://menu-br-14s9-git-main-meet-valands-projects.vercel.app/",
//     github: "https://github.com/Meet-Valand/menu-br-",
//     tags: ["Frontend", "UI/UX", "Food"],
//   },
//   {
//     title: "Varniraj Kathiyawadi Restaurant Website",
//     description:
//       "Website and menu showcase for Varniraaj Kathiyawadi restaurant with vibrant visuals.",
//     demo: "https://vk1-seven.vercel.app/",
//     github: "https://github.com/Meet-Valand/vk1",
//     tags: ["Frontend", "Food", "Interactive"],
//   },
// ];

// export default function Projects() {
//   return (
//     <section className="py-20 px-6 bg-black">
//       {/* Section Title */}
//       <h2 className="text-5xl sm:text-6xl font-extrabold text-center text-white mb-16 tracking-wide">
//         Projects
//       </h2>

//       {/* Project Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="bg-gradient-to-br from-[#1F1A1A] to-[#181818] rounded-3xl p-6 shadow-[0_0_30px_#141414] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_#68EEC880] group cursor-pointer"
//           >
//             {/* Project Title */}
//             <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:underline transition-all duration-300">
//               {project.title}
//             </h3>

//             {/* Project Description */}
//             <p className="text-gray-300 mb-5 leading-relaxed">
//               {project.description}
//             </p>

//             {/* Tags */}
//             <div className="flex flex-wrap gap-2 mb-5">
//               {project.tags.map((tag, i) => (
//                 <span
//                   key={i}
//                   className="text-xs bg-[#3d3737] border border-[#ffffff] text-[#f7fffd] px-3 py-1 rounded-full transition duration-300 group-hover:bg-white group-hover:text-black"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>

//             {/* Links */}
//             <div className="flex gap-4">
//               <a
//                 href={project.demo}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="px-4 py-2 rounded-full bg-[#ffffff] text-black font-semibold hover:bg-[#000000] hover:text-white transition-all"
//               >
//                 View Demo
//               </a>
//               <a
//                 href={project.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="px-4 py-2 rounded-full border border-[#ffffff] bg-white text-[#000000] font-semibold hover:bg-[#000000] hover:text-white transition-all"
//               >
//                 Source Code
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

const projects = [
  {
    title: "Baskin Robbins Franchise Info Website",
    description:
      "Franchise website for Baskin Robbins with franchise details and interactive UI.",
    demo: "https://basskin-robbins-motera-nhidzyce1-meet-valands-projects.vercel.app/",
    github: "https://github.com/Meet-Valand/BasskinRobbinsMotera",
    tags: ["Frontend", "Responsive", "Business"],
  },
  {
    title: "Restaurant Menu Website",
    description:
      "Interactive menu web app designed for a modern restaurant experience.",
    demo: "https://menu-br-14s9-git-main-meet-valands-projects.vercel.app/",
    github: "https://github.com/Meet-Valand/menu-br-",
    tags: ["Frontend", "UI/UX", "Food"],
  },
  {
    title: "Varniraj Kathiyawadi Restaurant Website",
    description:
      "Website and menu showcase for Varniraaj Kathiyawadi restaurant with vibrant visuals.",
    demo: "https://vk1-seven.vercel.app/",
    github: "https://github.com/Meet-Valand/vk1",
    tags: ["Frontend", "Food", "Interactive"],
  },
];

export default function Projects() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-12">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#1F1A1A] to-[#181818] rounded-3xl p-5 shadow-[0_0_20px_#141414] transition-transform duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_#68EEC850] group cursor-pointer"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:underline">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-[#3d3737] border border-white text-white px-2 py-1 rounded-full transition duration-300 group-hover:bg-white group-hover:text-black"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-full bg-white text-black font-semibold hover:bg-black hover:text-white hover:border hover:border-white transition"
              >
                View Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-full bg-transparent border border-white text-white font-semibold hover:bg-white hover:text-black transition"
              >
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
