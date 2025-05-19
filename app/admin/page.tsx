import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardCheck, Users, FileText, AlertTriangle } from "lucide-react"
import SubmissionsTable from "@/components/admin/SubmissionsTable"

export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col gap-6 p-6 md:gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage contributor submissions and review contributions.</p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Submissions</p>
                <p className="text-2xl font-bold">156</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                <ClipboardCheck className="h-6 w-6 text-yellow-700" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pending Review</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <Users className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active Contributors</p>
                <p className="text-2xl font-bold">48</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                <AlertTriangle className="h-6 w-6 text-red-700" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Rejected</p>
                <p className="text-2xl font-bold">8</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Submissions Table */}
      <SubmissionsTable />

      {/* Activity Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Submission Activity</CardTitle>
          <CardDescription>Contribution submissions over the past months</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] rounded-md border border-dashed p-6">
            <div className="flex h-full items-center justify-center">
              <p className="text-center text-sm text-muted-foreground">
                Submission activity chart will be displayed here
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
