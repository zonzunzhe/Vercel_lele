export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0 mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Katalog Alat</h1>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col animate-pulse">
              <div className="h-40 sm:h-48 bg-gray-200 w-full"></div>
              <div className="p-4 sm:p-5 flex flex-col grow">
                <div className="h-4 sm:h-5 w-1/3 bg-emerald-100 rounded-full mb-3"></div>
                <div className="h-5 sm:h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-3 sm:h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="mt-auto flex flex-col sm:flex-row gap-2">
                  <div className="h-9 sm:h-10 w-full bg-gray-200 rounded-lg"></div>
                  <div className="h-9 sm:h-10 w-full bg-gray-200 rounded-lg"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}