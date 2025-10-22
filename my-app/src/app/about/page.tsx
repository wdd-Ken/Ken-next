'use client'

import { Dialogs } from "@/components/dialogs";
import { cn } from "@/lib/utils";
import { useState } from "react";

// 輸出元件需要大寫
export default function About() {

  const [open, setOpen]= useState(false)

  return (
    <div className={cn(
      'flex',
      'justify-center',
      'items-center',
      'h-screen',
      'w-screen',
    )}>
      <div className={cn(
          'cursor-pointer',
          'bg-blue-400',
          'text-amber-50',
          'p-2',
          'rounded-xl',
        )}
        onClick={() => setOpen(true)}
      >
        <p>Click me !</p>
      </div>
      <Dialogs 
        // open={open} 
        // onOpenChange={setOpen}
        defaultOpen
      >
        content
      </Dialogs>
    </div>
  ) 
}