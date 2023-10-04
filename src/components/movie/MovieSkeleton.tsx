import { Separator } from "@/components/ui/separator";

const MovieSkeleton = () => {
  const movieSubHead = Array(3).fill(null);
  const movieDetailArray = Array(8).fill(null);
  const ratingsArray = Array(4).fill(null);
  const castArray = Array(3).fill(null);

  return (
    <section className="flex flex-col gap-5 text-left">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="space-y-2">
          <h1 className="w-full h-10 text-4xl font-medium bg-gray-300 rounded-md animate-pulse" />
          <div className="flex flex-wrap gap-2">
            {movieSubHead.map((_, index) => (
              <p
                key={index}
                className="w-20 h-5 bg-gray-300 rounded-md animate-pulse"
              />
            ))}
          </div>

          <div className="flex gap-5">
            <div className="flex items-center gap-2" title="Year">
              <p className="w-24 h-6 bg-gray-300 rounded-md animate-pulse" />
            </div>
            <div className="flex items-center gap-2" title="Runtime">
              <p className="w-24 h-6 bg-gray-300 rounded-md animate-pulse" />
            </div>
          </div>
        </div>

        <div className="space-y-2 rounded-xl h-max">
          <h1 className="w-24 bg-gray-300 rounded-md h-7 animate-pulse" />
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {ratingsArray.map((_, index) => (
              <li
                className="p-2 bg-gray-200 rounded-lg h-16 lg:aspect-[3/2] lg:h-max"
                key={index}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="bg-gray-300 aspect-[2/3] max-w-xs w-full rounded-md animate-pulse" />
          <ul className="grid grid-cols-2 lg:grid-cols-1 h-max w-full lg:max-w-[240px] gap-3">
            {movieDetailArray.map((_, index) => (
              <li key={index} className="space-y-1">
                <h1 className="w-16 h-6 bg-gray-300 rounded-md animate-pulse" />
                <p className="w-full h-5 bg-gray-300 rounded-md lg:w-28 animate-pulse" />
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <p className="w-full bg-gray-300 rounded-lg h-52 max-h-96 md:h-full animate-pulse" />
          <Separator />
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {castArray.map((_, index) => (
              <li className="space-y-1" key={index}>
                <h1 className="w-16 h-6 bg-gray-300 rounded-md animate-pulse" />
                <p className="w-full h-5 bg-gray-300 rounded-md animate-pulse" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default MovieSkeleton;
