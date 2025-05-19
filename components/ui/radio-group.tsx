"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & { className?: string }
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root className={cn("flex flex-col space-y-1.5", className)} {...props} ref={ref} />
))
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & { className?: string; children?: React.ReactNode }
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    className={cn(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
    ref={ref}
  >
    <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
      <span className="h-2 w-2 rounded-full bg-primary" />
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
))
RadioItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioItem }
