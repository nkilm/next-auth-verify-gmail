export default function Home() {
  return (
    <>
      <form className="h-screen bg-[#000] flex justify-center items-center flex-col">
        <h1 className="text-2xl font-semibold text-transparent sm:text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Enter your Gmail
        </h1>

        <div className="flex flex-col items-center justify-center w-full gap-3 px-10 mt-7 text-white/80">
          <input
            type="mail"
            required
            className="w-full sm:max-w-md px-4 py-2 bg-[#222222] border-none rounded-md outline-none text-[#a1a1a1]"
          />
          <button
            className="py-2 rounded-md outline-none sm:py-2 focus:outline-none focus:ring-1 focus:ring-blue-400/25 bg-[#222] w-full sm:max-w-md cursor-pointer text-[#a1a1a1] hover:bg-[#2e2e2e] hover:text-[#fff] transition-colors duration-200 ease-in-out"
            type="submit"
          >
            Verify
          </button>
        </div>
      </form>
    </>
  );
}
