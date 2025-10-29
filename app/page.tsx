export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8">
      <h1 className="text-5xl font-bold mb-4">Singulon</h1>
      <p className="text-xl text-gray-400 max-w-xl text-center">
        Building next-generation AI & XR solutions redefining human-machine synergy.
      </p>
      <a
        href="mailto:singulon.ai@gmail.com"
        className="mt-8 bg-white text-black px-6 py-3 rounded-lg font-semibold"
      >
        Get in Touch
      </a>
    </main>
  );
}
