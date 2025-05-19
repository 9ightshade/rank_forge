"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader,CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"

interface Submission {
  title?: string;
  description?: string;
}

export default function ScoringPanel({ submission }: { submission: Submission }) {
  const [scores, setScores] = useState({
    quality: 50,
    complexity: 50,
    impact: 50,
  })
  const [decision, setDecision] = useState("")
  const [feedback, setFeedback] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const totalScore = Math.round((scores.quality + scores.complexity + scores.impact) / 3)

  interface Scores {
    quality: number;
    complexity: number;
    impact: number;
  }

  const handleScoreChange = (category: keyof Scores, value: number[]) => {
    setScores((prev: Scores) => ({
      ...prev,
      [category]: value[0],
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      // Show success message or redirect
    }, 1500)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-col gap-1">
          <CardTitle>Score Submission</CardTitle>
          <CardDescription>Evaluate the contribution and provide feedback to the contributor.</CardDescription>
        </div>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          {/* Submission Info */}
          <div className="rounded-lg border p-4">
            <h3 className="text-lg font-medium">{submission?.title || "Implemented User Authentication"}</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-purple-50 text-purple-700">
                Feature
              </Badge>
              <Badge variant="outline" className="bg-yellow-50 text-yellow-700">
                <span className="mr-1">By:</span> johndoe
              </Badge>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              {submission?.description ||
                "Implemented a secure authentication system using JWT tokens with password hashing and email verification. Added login, registration, and password reset functionality."}
            </p>
          </div>

          {/* Scoring Criteria */}
          <div className="space-y-4">
            <h3 className="font-medium">Scoring Criteria</h3>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="quality">Code Quality ({scores.quality})</Label>
                <span className="text-sm text-muted-foreground">
                  {scores.quality < 30
                    ? "Poor"
                    : scores.quality < 60
                      ? "Average"
                      : scores.quality < 80
                        ? "Good"
                        : "Excellent"}
                </span>
              </div>
              <Slider
                id="quality"
                min={0}
                max={100}
                step={1}
                value={[scores.quality]}
                onValueChange={(value) => handleScoreChange("quality", value)}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="complexity">Complexity & Effort ({scores.complexity})</Label>
                <span className="text-sm text-muted-foreground">
                  {scores.complexity < 30
                    ? "Simple"
                    : scores.complexity < 60
                      ? "Moderate"
                      : scores.complexity < 80
                        ? "Complex"
                        : "Very Complex"}
                </span>
              </div>
              <Slider
                id="complexity"
                min={0}
                max={100}
                step={1}
                value={[scores.complexity]}
                onValueChange={(value) => handleScoreChange("complexity", value)}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="impact">Project Impact ({scores.impact})</Label>
                <span className="text-sm text-muted-foreground">
                  {scores.impact < 30
                    ? "Minimal"
                    : scores.impact < 60
                      ? "Moderate"
                      : scores.impact < 80
                        ? "Significant"
                        : "Critical"}
                </span>
              </div>
              <Slider
                id="impact"
                min={0}
                max={100}
                step={1}
                value={[scores.impact]}
                onValueChange={(value) => handleScoreChange("impact", value)}
              />
            </div>
          </div>

          {/* Total Score */}
          <div className="flex items-center justify-between rounded-lg bg-primary/5 p-4">
            <span className="font-medium">Total Score:</span>
            <span className="text-2xl font-bold text-primary">{totalScore}</span>
          </div>

          {/* Decision */}
          <div className="space-y-3">
            <Label>Decision</Label>
            <RadioGroup value={decision} onValueChange={setDecision} className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioItem value="approve" id="approve" />
                <Label htmlFor="approve" className="flex items-center gap-1 font-normal">
                  <Check className="h-4 w-4 text-green-600" /> Approve
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioItem value="reject" id="reject" />
                <Label htmlFor="reject" className="flex items-center gap-1 font-normal">
                  <X className="h-4 w-4 text-red-600" /> Reject
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Feedback */}
          <div className="space-y-2">
            <Label htmlFor="feedback">Feedback for Contributor</Label>
            <Textarea
              id="feedback"
              placeholder="Provide constructive feedback about the submission..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows={4}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting || !decision}>
            {isSubmitting ? "Submitting..." : "Submit Evaluation"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
