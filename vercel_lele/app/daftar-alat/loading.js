export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Katalog Alat</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col animate-pulse">
              <div className="h-48 bg-gray-300 w-full"></div>
              <div className="p-5 flex flex-col grow">
                <div className="h-6 w-24 bg-gray-300 rounded-full mb-3"></div>
                <div className="h-6 w-3/4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 w-1/2 bg-gray-300 rounded mb-6"></div>
                <div className="h-10 bg-gray-300 rounded-lg mt-auto"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}