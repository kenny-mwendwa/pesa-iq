"use client";

import CurrentBalance from "@/components/CurrentBalanceCard";
import TotalIncomeCard from "@/components/income/TotalIncomeCard";
import TotalExpenseCard from "@/components/expense/TotalExpenseCard";
import IncomeChart from "@/components/charts/IncomeChart";

export default function Analytics() {
  return (
    <>
      <div className="container mx-auto mt-4 px-12 pb-5 pt-12">
        <div className="text-2xl font-bold tracking-tight">Analytics</div>

        <div className="flex space-x-6 pt-3">
          <CurrentBalance />
          <TotalIncomeCard />
          <TotalExpenseCard />
        </div>
        <div className="pt-3">
          <div className="text-xl font-bold tracking-tight">Income</div>
          <IncomeChart />
        </div>
      </div>
    </>
  );
}
