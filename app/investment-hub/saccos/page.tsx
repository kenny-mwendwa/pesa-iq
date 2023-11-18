"use client";

import SaccoTable from "@/components/SaccoTable/Table";
import { SaccoTableColumns } from "@/components/SaccoTable/TableColumns";
import { saccos } from "@/lib/saccos";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Saccos() {
  const { data: session, status } = useSession();

  if (!session && status === "unauthenticated") {
    redirect("/signin");
  }
  return (
    <>
      <div className="container mx-auto mt-4 px-12 pb-5 pt-12">
        <div className="flex items-center justify-between space-y-2 pb-3">
          <div>
            <div className="text-2xl font-bold tracking-tight">
              Top 20 best performing Saccos in 2023
            </div>
            <p className="text-muted-foreground">
              Here&apos;s a list of best Saccos ranked by dividends on share
              capital!
            </p>
          </div>
        </div>
        {saccos && saccos.length > 0 ? (
          <SaccoTable data={saccos} columns={SaccoTableColumns} />
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </>
  );
}
