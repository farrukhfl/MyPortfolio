'use server'
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { error } from "console";
import prisma from "./lib/db";
import { revalidatePath } from "next/cache";

export default async function postData(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    throw new Error("UnAuthorized");
  }

  const message = formData.get("message") as string;
  const data = await prisma.guestbookEntry.create({
    data: {
      userId: user.id,
      message: message,
    },
  });
  revalidatePath("/guestbook");
}
