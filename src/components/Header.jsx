import { StarPlus } from "lucide-react";

const Header = () => {
  return (
    <div className="mx-8 sm:mx-16 xl:mx-24 relative">
      <div className="text-center mt-20 mb-8">
        <div
          className="inline-flex items-center justify-center gap-2 px-6 py-1.5 mb-4 border 
        border-primary/40 bg-primary/10 rounded-full text-sm text-primary"
        >
          <p className="">New: AI feature incorporated!</p>
          <StarPlus size={15} className="text-primary fill-primary" />
        </div>
        <h1 className="text-3xl sm:text-6xl font-semibold sm:leading-16 text-secondary/90">
          Your own <span className="text-primary">blogging</span> <br />{" "}
          platform.
        </h1>
        <p className="my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-secondary/70">
          Share your thoughts, ideas, and stories with the world.
        </p>
        <form
          className="flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300
        bg-white rounded overflow-hidden"
        >
          <input
            type="text"
            placeholder="Search..."
            required
            className="w-full pl-4 outline-none"
          />
          <button
            className="bg-primary text-white px-6 py-2.5 m-1.5
          rounded hover:scale-105 transition-all cursor-pointer"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
