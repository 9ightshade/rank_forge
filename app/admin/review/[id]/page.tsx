import ScoringPanel from "@/components/admin/scoringPanel"
import {Button} from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"


export default function ReviewSubmissionPage() {
  return (
    <div className="flex flex-col gap-6 p-6 md:gap-8">
      <div className="flex items-center gap-2">
        <Link href="/admin">
          <Button variant="outline">
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Back</span>
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Review Submission</h1>
          <p className="text-muted-foreground">Evaluate and score this contribution</p>
        </div>
      </div>

      <ScoringPanel submission={{ /* Add appropriate Submission object properties here */ }} />
    </div>
  )
}
