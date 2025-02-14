
import { DashboardCard } from "@/components/DashboardCard";
import { IncomeChart } from "@/components/IncomeChart";

const Index = () => {
  // Mock data for top earners
  const topEarners = [
    { name: "Sarah Johnson", earnings: "$8,750", rank: 1 },
    { name: "Michael Chen", earnings: "$8,200", rank: 2 },
    { name: "Alex Martinez", earnings: "$7,900", rank: 3 },
    { name: "Emma Davis", earnings: "$7,600", rank: 4 },
    { name: "James Wilson", earnings: "$7,400", rank: 5 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <header className="mb-8">
          <div className="mb-2">
            <p className="text-sm font-medium text-primary">Dashboard</p>
            <h1 className="text-3xl font-bold tracking-tight">Income Overview</h1>
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          <DashboardCard
            title="Total Earnings"
            value="$28,000"
            description="+20.1% from last month"
          />
          <DashboardCard
            title="Average Monthly"
            value="$4,666"
            description="Last 6 months"
          />
          <DashboardCard
            title="Submission Status"
            value="On Track"
            description="All submissions up to date"
          />
        </div>

        <div className="mt-8">
          <IncomeChart />
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <DashboardCard
            title="Team Ranking"
            value="#3"
            description="Top 5 Performers"
            className="h-[320px]"
          >
            <div className="mt-4 space-y-4">
              <div className="h-2 w-full rounded-full bg-gray-100">
                <div className="h-2 w-3/4 rounded-full bg-primary"></div>
              </div>
              <div className="space-y-2">
                {topEarners.map((earner) => (
                  <div
                    key={earner.rank}
                    className="flex items-center justify-between rounded-lg bg-gray-50 p-2 text-sm transition-colors hover:bg-gray-100"
                  >
                    <div className="flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                        {earner.rank}
                      </span>
                      <span className="font-medium">{earner.name}</span>
                    </div>
                    <span className="text-primary">{earner.earnings}</span>
                  </div>
                ))}
              </div>
            </div>
          </DashboardCard>
          
          <DashboardCard
            title="Next Submission"
            value="5 days"
            description="Due on April 30th"
            className="h-[320px]"
          >
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Progress</span>
                <span className="font-medium">80%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-100">
                <div className="h-2 w-4/5 rounded-full bg-primary"></div>
              </div>
            </div>
          </DashboardCard>
        </div>
      </div>
    </div>
  );
};

export default Index;
