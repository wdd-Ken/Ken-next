import { cn } from "@/lib/utils"

interface DialogsProps {
  open: boolean
  children: string
  method: (open: boolean) => void
}

export const Dialogs = ({ 
  open,
  children,
  method
}: DialogsProps) => {

  return (
    <>
      { open && <div className={cn(
        'p-5',
        'w-2xl',
        'h-96',
        'shadow-2xl',
        'rounded-3xl',
        'absolute',
        'bg-violet-300',
        'text-stone-50'
      )}>
        {children}
        <div className={cn(
          'p-0.5',
          'w-6',
          'rounded-xs',
          'flex',
          'justify-center',
          'items-center',
          'bg-violet-100',
          'text-stone-950',
          'cursor-pointer',
          'absolute',
          'top-2',
          'right-2'
        )}
          onClick={() => {method(false)}}
        >x</div>
      </div>
      }
    </>
  )
}