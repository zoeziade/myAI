"use client";
 
 import { useState } from "react";
 import { Citation } from "@/types";
 import {
   Tooltip,
   TooltipContent,
   TooltipTrigger,
 } from "@radix-ui/react-tooltip";
 import Link from "next/link";
 import { EMPTY_CITATION_MESSAGE } from "@/configuration/ui";
 
 export function CitationCircle({
   number,
   citation,
 }: {
   number: number;
   citation: Citation;
 }) {
   const [open, setOpen] = useState(false);
 
   const isValidUrl = (url: string) => {
     try {
       new URL(url);
       return true;
     } catch {
       return false;
     }
   };
   const hasSourceUrl = isValidUrl(citation.source_url);
   const hasSourceDescription = citation.source_description.trim() !== "";
 
   return (
     <Tooltip open={open} onOpenChange={setOpen}>
       <TooltipTrigger>
         <div
           className="bg-blue-200 rounded-full px-2 py-0.5 hover:cursor-pointer hover:scale-105 inline-block"
           onClick={() => setOpen(true)}
         >
           <span>{number}</span>
         </div>
       </TooltipTrigger>
       <TooltipContent>
         <div className="bg-white p-2 rounded-md shadow-sm flex flex-col justify-center border-[1px] border-gray-200">
           <p>
             {hasSourceUrl && (
               <Link
                 href={citation.source_url}
                 target="_blank"
                 className="text-blue-500 hover:underline text-sm"
               >
                 {citation.source_description}
               </Link>
             )}
             {!hasSourceUrl && citation.source_description}
             {!hasSourceUrl && !hasSourceDescription && EMPTY_CITATION_MESSAGE}
           </p>
         </div>
       </TooltipContent>
     </Tooltip>
   );
 }
