import Link from "next/link"
import { Award } from "lucide-react"
import SignInForm from "@/components/auth/signInForm"

export default function SignInPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex min-h-screen flex-col items-center justify-center px-4 py-12">
        <Link href="/" className="mb-8 flex items-center gap-2">
          <Award className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold">RankForge</span>
        </Link>
        <SignInForm/>
      </div>
    </div>
  )
}
