
import { DashboardCard } from "@/components/DashboardCard";
import { IncomeChart } from "@/components/IncomeChart";

const Index = () => {
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
            description="Top 10% of performers"
            className="h-[200px]"
          >
            <div className="mt-4">
              <div className="h-2 w-full rounded-full bg-gray-100">
                <div className="h-2 w-3/4 rounded-full bg-primary"></div>
              </div>
            </div>
          </DashboardCard>
          
          <DashboardCard
            title="Next Submission"
            value="5 days"
            description="Due on April 30th"
            className="h-[200px]"
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
