import * as React from 'react'

import { cn } from '@/lib/utils'

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-10 w-full rounded-md border border-yellow-600 px-3 py-2 text-sm text-neutral-200 file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-yellow-700 bg-neutral-900 placeholder:text-neutral-500',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

Input.displayName = 'Input'

export { Input }