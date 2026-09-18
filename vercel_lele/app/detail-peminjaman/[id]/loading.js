export default function LoadingDetailPeminjaman() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex justify-center">
      <div className="max-w-3xl w-full bg-white p-8 rounded-xl shadow-sm border border-gray-200 animate-pulse">
        <div className="h-4 w-24 bg-gray-300 rounded mb-6"></div>
        
        <div className="flex justify-between items-start border-b pb-6 mb-6">
          <div className="space-y-3">
            <div className="h-8 w-48 bg-gray-300 rounded"></div>
            <div className="h-4 w-32 bg-gray-300 rounded"></div>
          </div>
          <div className="h-6 w-32 bg-gray-300 rounded-full"></div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="h-4 w-20 bg-gray-300 rounded mb-2"></div>
            <div className="h-5 w-40 bg-gray-300 rounded"></div>
          </div>
          <div>
            <div className="h-4 w-20 bg-gray-300 rounded mb-2"></div>
            <div className="h-5 w-40 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}