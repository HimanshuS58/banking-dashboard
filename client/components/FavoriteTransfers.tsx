const favoriteUsers = [
  {
    id: 1,
    name: "Kathryn Murphy",
    avatar: "KM",
    bgColor: "bg-purple-500",
  },
  {
    id: 2,
    name: "Wade Warren", 
    avatar: "WW",
    bgColor: "bg-blue-500",
  },
];

export function FavoriteTransfers() {
  return (
    <div className="bg-white rounded-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-manrope font-bold text-gray-900">
          Favourite Transfers
        </h2>
        <button className="text-sm font-manrope text-gray-800 hover:text-gray-900">
          See All
        </button>
      </div>

      {/* User List */}
      <div className="space-y-4">
        {favoriteUsers.map((user) => (
          <div 
            key={user.id}
            className="flex items-center p-5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
          >
            {/* Avatar */}
            <div className={`w-10 h-10 ${user.bgColor} rounded-full flex items-center justify-center mr-4`}>
              <span className="text-white font-medium text-sm">
                {user.avatar}
              </span>
            </div>
            
            {/* Name */}
            <span className="text-base font-manrope font-bold text-gray-800">
              {user.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
