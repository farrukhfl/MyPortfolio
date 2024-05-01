import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React, { Suspense } from "react";
import { Form } from "../components/Form";
import prisma from "../lib/db";
import LoadingMessages, { GuestBookFormLoading } from "../components/LoadingState";

async function getGuestBookEntry() {
  const data = await prisma.guestbookEntry.findMany({
    select: {
      User: {
        select: {
          firstname: true,
          profileImage: true,
        },
      },
      message: true,
      id: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 30,
  });

  return data;
}

export default function GuestBookPage() {
  return (
    <section className="max-w-7xl w-full px-4 md:px-8 mx-auto">
      <h1 className="text-4xl font-semibold lg:text-5xl pt-5">Guestbook</h1>
      <p className="leading-7 mt-2 text-muted-foreground">Sign my Guestbook</p>
      <Card className="mt-10">
        <CardHeader className="flex flex-col w-full">
          <Label className="mb-2">Message</Label>
          <Suspense fallback={<GuestBookFormLoading />}>
            <GuestbookForm />
          </Suspense>
          <ul className="pt-7 flex flex-col gap-y-5">
            <Suspense fallback={<LoadingMessages />}>
              <GuestbookEntry />
            </Suspense>
          </ul>
        </CardHeader>
      </Card>
    </section>
  );
}

async function GuestbookEntry() {
  const data = await getGuestBookEntry();
  if (data.length === 0) {
    return null;
  }
  return data.map((item) => (
    <li key={item.id}>
      <div className="flex items-center">
        <img
          src={item.User?.profileImage as string}
          className="w-10 h-10 rounded-lg"
          alt="User image"
        />
        <p className="pl-3 break-words text-muted-foreground">
          {item.User?.firstname}{" "}
          <span className="text-foreground">{item.message}</span>
        </p>
      </div>
    </li>
  ));
}

async function GuestbookForm() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (user) {
    return <Form />;
  }
  return (
    <div className="flex justify-between gap-4 flex-col md:flex-row">
      <Input type="text" placeholder="Your message" />
      <RegisterLink>
        <Button className="w-full">Sign for Free</Button>
      </RegisterLink>
    </div>
  );
}
