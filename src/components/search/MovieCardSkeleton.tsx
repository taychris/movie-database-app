const MovieCardSkeleton = () => {
  const skeletonArray = Array(6).fill(null);
  
  return (
    <>
      {skeletonArray.map((_, index) => (
        <div
          key={index}
          className="relative overflow-hidden font-light text-left text-white bg-gray-400 animate-pulse aspect-[2/3] rounded-xl group"
        >
          <div className="absolute w-full bottom-0 left-0 z-[1] space-y-2 px-3 pb-2">
            <h1 className="w-full h-6 text-xl truncate bg-gray-300 rounded-lg animate-pulse" />
            <p className="w-20 h-6 text-xl truncate bg-gray-300 rounded-lg animate-pulse" />
          </div>
        </div>
      ))}
    </>
  );
};
export default MovieCardSkeleton;
