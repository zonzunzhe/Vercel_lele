export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Riwayat Peminjaman</h1>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 border-b border-gray-100 last:border-0 animate-pulse gap-3 sm:gap-4">
              <div className="w-full sm:w-1/2">
                <div className="h-5 sm:h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-3 sm:h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 w-full sm:w-auto mt-2 sm:mt-0">
                <div className="h-6 sm:h-8 w-20 sm:w-24 bg-gray-200 rounded-full"></div>
                <div className="h-3 sm:h-4 w-16 sm:w-20 bg-gray-300 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}