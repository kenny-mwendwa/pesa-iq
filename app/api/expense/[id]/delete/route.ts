import prisma from "@/prisma/db";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  try {
    // Delete expense
    const deletedExpense = await prisma.expense.delete({
      where: {
        id: id,
      },
    });

    // Return success message
    if (deletedExpense) {
      return NextResponse.json(
        { message: "Expense deleted successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Failed to delete expense" },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Server error, try again later" },
      { status: 500 }
    );
  }
}