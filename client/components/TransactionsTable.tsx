import { MoreHorizontal } from "lucide-react";

const transactions = [
  {
    id: 1,
    name: "Jenny Wilson",
    avatar: "JW",
    bgColor: "bg-pink-500",
    transactionId: "2425666",
    status: "Complete",
    amount: "+$455.00",
    date: "20 Dec 22",
  },
  {
    id: 2,
    name: "Robert Fox",
    avatar: "RF", 
    bgColor: "bg-orange-500",
    transactionId: "2425666",
    status: "Complete",
    amount: "+$455.00",
    date: "20 Dec 22",
  },
  {
    id: 3,
    name: "Jacob Jones",
    avatar: "JJ",
    bgColor: "bg-green-500", 
    transactionId: "2425666",
    status: "Complete",
    amount: "+$455.00",
    date: "20 Dec 22",
  },
];

export function TransactionsTable() {
  return (
    <div className="bg-white rounded-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-manrope font-bold text-black">
          Transaction
        </h2>
        <button>
          <MoreHorizontal className="h-6 w-6 text-gray-800" />
        </button>
      </div>

      {/* Table */}
      <div className="overflow-hidden">
        {/* Table Header */}
        <div className="border border-gray-200 rounded-lg p-3 mb-5">
          <div className="grid grid-cols-5 gap-4 px-5">
            <div className="text-base font-manrope font-bold text-gray-800">
              Name
            </div>
            <div className="text-base font-manrope font-bold text-gray-800">
              ID
            </div>
            <div className="text-base font-manrope font-bold text-gray-800">
              Status
            </div>
            <div className="text-base font-manrope font-bold text-gray-800">
              Amount
            </div>
            <div className="text-base font-manrope font-bold text-gray-800 text-right">
              Date
            </div>
          </div>
        </div>

        {/* Table Rows */}
        <div className="space-y-5">
          {transactions.map((transaction) => (
            <div 
              key={transaction.id}
              className="border border-gray-200 rounded-lg p-3"
            >
              <div className="grid grid-cols-5 gap-4 items-center px-5">
                {/* Name with Avatar */}
                <div className="flex items-center">
                  <div className={`w-8 h-8 ${transaction.bgColor} rounded-full flex items-center justify-center mr-4 border-2 border-white`}>
                    <span className="text-white font-medium text-xs">
                      {transaction.avatar}
                    </span>
                  </div>
                  <span className="text-base font-manrope font-bold text-gray-800">
                    {transaction.name}
                  </span>
                </div>

                {/* Transaction ID */}
                <div className="text-base font-manrope font-bold text-gray-800">
                  {transaction.transactionId}
                </div>

                {/* Status Badge */}
                <div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-inter text-success-700 bg-success-50">
                    {transaction.status}
                  </span>
                </div>

                {/* Amount */}
                <div className="text-base font-manrope font-bold text-gray-800">
                  {transaction.amount}
                </div>

                {/* Date */}
                <div className="text-base font-manrope font-bold text-gray-800 text-right">
                  {transaction.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
