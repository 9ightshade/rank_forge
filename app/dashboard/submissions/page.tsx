import SubmissionList from "@/components/contributor/SubmissionList"

export default function SubmissionsPage() {
  return (
    <div className="flex flex-col gap-6 p-6 md:gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Your Submissions</h1>
        <p className="text-muted-foreground">View and manage all your contributions to the idan-devs repository.</p>
      </div>

      <SubmissionList />
    </div>
  )
}
