import React from "react";
import {MaskContainer} from "../ui/maskeffect"

export function Texthover() {
  return (
    <div className="flex h-[40rem] w-full items-center justify-center overflow-hidden bg-gray-100 dark:bg-gray-900">
      <MaskContainer
        revealText={
          <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-slate-800 dark:text-white">
            The first rule of MRR Club is you do not talk about MRR Club. The
            second rule of MRR Club is you DO NOT talk about MRR Club.
          </p>
        }
        className="h-[40rem] w-full rounded-md border border-gray-300 bg-white dark:bg-black text-white dark:text-black"
      >
        Discover the power of{" "}
        <span className="text-blue-500">Tailwind CSS v4</span> with native CSS
        variables and container queries with{" "}
        <span className="text-blue-500">advanced animations</span>.
      </MaskContainer>
    </div>
  );
}
