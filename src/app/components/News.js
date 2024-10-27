import { FaArrowLeft } from 'react-icons/fa';

const News = ({ closeSection }) => {
  return (
    <div className="flex flex-col items-center justify-between h-full p-6 m-6 bg-white shadow-lg rounded-md overflow-y-auto">
      <div>
        <h1 className="text-2xl font-bold">News Section</h1>
        <p>Here you can add your news content...</p>
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
        style={{ width: '200px', height: 'auto' }} // Adjusted the size
      />
    </div>
  );
};

export default News;