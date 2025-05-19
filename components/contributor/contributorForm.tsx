"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContributionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      // Reset form or show success message
    }, 1500)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Submit New Contribution</CardTitle>
        <CardDescription>Log your contribution to the idan-devs repository for review and scoring.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Contribution Title</Label>
            <Input id="title" placeholder="Brief description of your contribution" required />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="type">Contribution Type</Label>
              <Select required>
                <SelectTrigger id="type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="feature">Feature Implementation</SelectItem>
                  <SelectItem value="bugfix">Bug Fix</SelectItem>
                  <SelectItem value="documentation">Documentation</SelectItem>
                  <SelectItem value="test">Test Coverage</SelectItem>
                  <SelectItem value="design">UI/UX Design</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="pr-link">Pull Request URL</Label>
              <Input id="pr-link" placeholder="https://github.com/idan-devs/..." required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Detailed Description</Label>
            <Textarea
              id="description"
              placeholder="Describe what you did, challenges faced, and impact of your contribution..."
              rows={5}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="technologies">Technologies Used</Label>
            <Input id="technologies" placeholder="React, Node.js, etc." />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Contribution"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
