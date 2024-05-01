import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function LoadingMessages() {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex items-center w-full space-x-4">
        <Skeleton className="w-10 h-10 rounded-lg" />
        <div>
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <div className="flex items-center w-full space-x-4">
        <Skeleton className="w-10 h-10 rounded-lg" />
        <div>
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>{" "}
      <div className="flex items-center w-full space-x-4">
        <Skeleton className="w-10 h-10 rounded-lg" />
        <div>
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>{" "}
      <div className="flex items-center w-full space-x-4">
        <Skeleton className="w-10 h-10 rounded-lg" />
        <div>
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>{" "}
      <div className="flex items-center w-full space-x-4">
        <Skeleton className="w-10 h-10 rounded-lg" />
        <div>
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>{" "}
      <div className="flex items-center w-full space-x-4">
        <Skeleton className="w-10 h-10 rounded-lg" />
        <div>
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>{" "}
      <div className="flex items-center w-full space-x-4">
        <Skeleton className="w-10 h-10 rounded-lg" />
        <div>
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>{" "}
      <div className="flex items-center w-full space-x-4">
        <Skeleton className="w-10 h-10 rounded-lg" />
        <div>
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </div>
  );
}


export function GuestBookFormLoading() {
  return (
    <div className="w-full">
      <Skeleton className="h-10 rounded-lg w-full" />
    </div>
  );
}