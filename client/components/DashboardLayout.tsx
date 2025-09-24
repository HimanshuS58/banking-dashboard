import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { BalanceCard } from "./BalanceCard";
import { InsightsChart } from "./InsightsChart";
import { FavoriteTransfers } from "./FavoriteTransfers";
import { TransactionsTable } from "./TransactionsTable";

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="ml-[300px]">
        {/* Header */}
        <Header />
        
        {/* Dashboard Content */}
        <main className="p-8">
          {/* Top Section - Balance and Favorite Transfers */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Balance Card */}
            <div className="lg:col-span-1">
              <BalanceCard />
            </div>
            
            {/* Favorite Transfers */}
            <div className="lg:col-span-1">
              <FavoriteTransfers />
            </div>
          </div>

          {/* Middle Section - Insights Chart */}
          <div className="mb-8">
            <InsightsChart />
          </div>

          {/* Bottom Section - Transactions Table */}
          <div>
            <TransactionsTable />
          </div>
        </main>
      </div>
    </div>
  );
}
