import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  User, 
  CreditCard, 
  ArrowLeftRight, 
  FileText, 
  Settings 
} from "lucide-react";

const navigation = [
  { name: "Dashboard", icon: LayoutDashboard, current: true },
  { name: "My Accounts", icon: User, current: false },
  { name: "My Cards", icon: CreditCard, current: false },
  { name: "Fund Transfer", icon: ArrowLeftRight, current: false },
  { name: "Bill Payment", icon: FileText, current: false },
  { name: "Settings", icon: Settings, current: false },
];

export function Sidebar() {
  return (
    <div className="fixed inset-y-0 left-0 z-50 w-[300px] bg-sidebar border-r border-gray-200">
      {/* Logo */}
      <div className="flex items-center px-4 py-6">
        <div className="flex items-center">
          <div className="w-12 h-10 bg-sidebar-foreground relative mr-3">
            <svg
              width="48"
              height="40"
              viewBox="0 0 48 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M20.7819 0.377441L46.4219 25.9137V39.6227H34.4566V30.8419L15.8339 12.2944H11.9654V39.6227H0V0.377441H20.7819ZM34.4566 13.9968V0.377441H46.4219V13.9968H34.4566Z"
                fill="#FCFCFD"
              />
            </svg>
          </div>
          <span className="text-sidebar-foreground font-manrope font-normal text-base">
            Banking
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-4 mt-8">
        <div className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href="#"
                className={cn(
                  "flex items-center px-3 py-3 rounded-l-md text-sm font-manrope font-bold transition-colors group",
                  item.current
                    ? "bg-primary-900 text-sidebar-foreground"
                    : "text-sidebar-foreground hover:bg-primary-900/20"
                )}
              >
                <Icon
                  className={cn(
                    "mr-3 h-6 w-6 flex-shrink-0",
                    item.current ? "text-sidebar-foreground" : "text-sidebar-foreground"
                  )}
                />
                {item.name}
              </a>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
