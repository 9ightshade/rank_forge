import SignUpForm from "@/components/auth/SignUpForm"
import Link from "next/link"
import { Award } from "lucide-react"

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex min-h-screen flex-col items-center justify-center px-4 py-12">
        <Link href="/" className="mb-8 flex items-center gap-2">
          <Award className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold">RankForge</span>
        </Link>
        <SignUpForm />
      </div>
    </div>
  )
}
