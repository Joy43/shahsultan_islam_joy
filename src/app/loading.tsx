

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="flex-shrink-0 px-4 text-4xl font-bold">
        <a href="#" className="flex space-x-2">
          <span className="px-2 bg-red-500 rounded-full animate-[ping_1.9s_linear_infinite]">S</span>
          <span className="px-2 bg-red-500 rounded-full animate-[ping_2s_linear_infinite]">S</span>
          <span className="px-2 bg-red-500 rounded-full animate-[ping_2.1s_linear_infinite]">J</span>
          <span className="px-2 bg-red-500 rounded-full animate-[ping_2.2s_linear_infinite]">O</span>
          <span className="px-2 bg-red-500 rounded-full animate-[ping_2.3s_linear_infinite]">Y</span>
        </a>
      </div>
    </div>
  );
};

export default LoadingPage;
