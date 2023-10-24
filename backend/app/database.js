import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export const connect = async function () {
  await prisma.$connect();
  console.log("Datablase connected");
};
export const disconnected = async function () {
  await prisma.$disconnect();
  console.log("Database disconnected");
};
