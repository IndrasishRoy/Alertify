import { FaArrowLeft } from "react-icons/fa";

const Helpline = ({ closeSection }) => {
  return (
    <div className="flex flex-col items-center justify-between h-full p-6 m-6 bg-white shadow-lg rounded-md overflow-y-auto">
      <div className="flex flex-col gap-14 items-center justify-between">
        <h1 className="text-4xl font-bold">Helpline Section</h1>
        <div className="flex flex-col gap-8">
          <p>
            <b>NATIONAL EMERGENCY NUMBER</b> - 112
          </p>
          <p>
            <b>POLICE</b> - 112 / 100
          </p>
          <p>
            <b>FIRE</b> - 101
          </p>
          <p>
            <b>AMBULANCE</b> - 102
          </p>
          <p>
            <b>Disaster Management Services</b> - 108
          </p>
          <p>
            <b>
              EARTHQUAKE / FLOOD / DISASTER ( N.D.R.F Headquaters )<br /> NDRF
              HELPLINE NO
            </b>{" "}
            - 011-24363260 , 9711077372
          </p>
        </div>
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

      {/* Alertify logo with increased size and 40% opacity */}
      <img
        src="/logo.png"
        alt="Alertify Logo"
        className="absolute inset-0 mx-auto my-auto opacity-40"
        style={{ width: "200px", height: "auto" }}
      />
    </div>
  );
};

export default Helpline;