import ContributionForm from "@/components/contributor/contributorForm";

export default function NewSubmissionPage() {
  return (
    <div className="flex flex-col gap-6 p-6 md:gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">New Submission</h1>
        <p className="text-muted-foreground">
          Submit a new contribution to the idan-devs repository for review and scoring.
        </p>
      </div>

      <ContributionForm />
    </div>
  )
}
