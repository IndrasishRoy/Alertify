import { FaArrowLeft, FaLinkedin, FaGithub } from "react-icons/fa";

const AboutTeam = ({ closeSection }) => {
  {/* Team data array */}
  const teamMembers = [
    {
      name: "Srijeet Das",
      role: "UI/UX Designer/Team Lead",
      description:
        "Srijeet focused on designing the user interface and ensuring the user experience is smooth and intuitive.",
      imgSrc: "/team/Srijeet.jpg",
      borderColor: "border-blue-400",
      linkedInUrl: "https://www.linkedin.com/in/srijeet-das-a61027244",
      githubUrl: "https://github.com/CodeBlasterJeet",
    },
    {
      name: "Indrasish Roy",
      role: "Front-End Developer",
      description:
        "Indrasish implemented the visual designs and interactive elements using Nextjs and TailwindCSS, ensuring responsiveness across devices.",
      imgSrc: "/team/Indrasish.png",
      borderColor: "border-red-400",
      linkedInUrl: "https://www.linkedin.com/in/indrasishroy",
      githubUrl: "https://github.com/IndrasishRoy",
    },
    {
      name: "Archisman Mukherjee",
      role: "Back-End Developer",
      description:
        "Archisman developed and maintained the server-side logic, working with databases and ensuring the app runs smoothly.",
      imgSrc: "/team/Archisman.jpg",
      borderColor: "border-green-400",
      linkedInUrl: "https://www.linkedin.com/in/archisman-mukherjee-b6630a276",
      githubUrl: "https://github.com/RONY-18",
    },
    {
      name: "Parna Chakraborty",
      role: "Content Writer/Video Editor",
      description:
        "Parna created the web content and video assets, ensuring that the project's communication is clear and engaging.",
      imgSrc: "/team/Parna.jpg",
      borderColor: "border-purple-400",
      linkedInUrl: "https://www.linkedin.com/in/parna-chakrabarti",
      githubUrl: "https://github.com/ItsParna",
    },
  ];

  return (
    <div className="relative p-6 mx-8 bg-white shadow-lg rounded-md">
      {/* Title */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Meet the Team</h1>
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-4 bg-white shadow-md rounded-lg ${member.borderColor} border-4`}
          >
            <img
              src={member.imgSrc}
              alt={`${member.name}'s picture`}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h2 className="text-xl font-bold">{member.name}</h2>
            <p className="text-sm font-bold text-gray-500">{member.role}</p>
            <p className="text-center font-bold text-gray-600 mt-2">
              {member.description}
            </p>

            {/* Social Icons Section */}
            <div className="flex mt-4 space-x-4">
              {/* LinkedIn Icon */}
              <a
                href={member.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                <FaLinkedin size={28} />
              </a>

              {/* GitHub Icon */}
              <a
                href={member.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-700"
              >
                <FaGithub size={28} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Close button at the top right with back button logo */}
      <button
        className="absolute top-4 right-6 w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition"
        onClick={closeSection}
      >
        <FaArrowLeft />
      </button>

      {/* Close button placed at the bottom of the content */}
      <div className="flex justify-center mt-8">
        <button
          className="w-32 h-10 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          onClick={closeSection}
        >
          Close
        </button>
      </div>

      {/* Alertify logo */}
      <div className="fixed inset-0 flex justify-center items-center pointer-events-none">
        <img
          src="/logo.png"
          alt="Alertify Logo"
          className="opacity-40"
          style={{ width: "200px", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default AboutTeam;