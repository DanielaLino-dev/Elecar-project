export default function StartButton() {
  return (
    <div className="flex items-center justify-center min-h-scree w-fit">
      <button className="relative text-white text-lg font-semibold px-5 py-8 rounded-full  border-2 border-green-400 shadow-[0_0_20px_5px_rgba(34,197,94,0.7)] hover:scale-105 transition-transform duration-300">
        <p>START</p>
        <span className="absolute inset-0 rounded-full border border-green-400 animate-ping opacity-15"></span>
      </button>
    </div>
  );
}
