const HomeView = () => {
  return (
    <div className="p-6 min-h-screen bg-cover bg-center">
      <h1 className="text-3xl font-semibold text-center text-gray-600 flex justify-center mb-5">
        Welcome to the Dashboard
      </h1>

      <div className="flex items-center justify-center mb-10">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/bH8zxnUeZLg?autoplay=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="ml-40 text-gray-700 bg-gradient-to-r from-red-100 to-blue-300 p-10 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Basic Add-ins</h3>
          <ul className="list-disc list-inside">
            <li>Chocolate🍫</li>
            <li>Strawberry🍓</li>
            <li>Caramel🧉</li>
            <li>Vanilla🥫</li>
            <li>Mint🧂</li>
            <li>Peanut Butter🧀</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
