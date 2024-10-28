import { FaArrowLeft } from "react-icons/fa";

const About = ({ closeSection }) => {
  return (
    <div className="flex flex-col items-center justify-between h-full p-6 px-80 m-6 bg-white shadow-lg rounded-md overflow-y-auto">
      <div className="flex flex-col items-center justify-between gap-14">
        <h1 className="text-4xl font-bold">About</h1>
        <p className="text-lg">
          <b>Alertify</b> is a Public Safety Alert System developed to deliver
          real-time, critical alerts to the public during emergencies.This
          system is created to address the urgent need for clear, rapid, and
          reliable information during natural disasters, enabling people to make
          informed, timely decisions that protect their safety and well-being.
          By receiving early warnings, users(Local people & tourists) can better
          prepare, avoid dangerous areas, and take precaution and protection.
          The Alertify thus plays an essential role in enhancing public safety,
          resilience, and disaster preparedness for individuals and communities
          alike.
        </p>
      </div>

      {/* Close button at the top right with back button logo */}
      <button
        className="absolute top-4 right-6 w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition"
        onClick={closeSection}
      >
        <FaArrowLeft />
      </button>

      {/* Close button at the bottom */}
      <button
        className="mt-4 w-32 h-10 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
        onClick={closeSection}
      >
        Close
      </button>

      {/* Alertify logo with 40% opacity */}
      <img
        src="/logo.png"
        alt="Alertify Logo"
        className="absolute inset-0 mx-auto my-auto opacity-40"
        style={{ width: "200px", height: "auto" }}
      />
    </div>
  );
};
export default About;
