"use client"

import { useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, Clock, Eye, Search, X } from "lucide-react"

// Sample data
const sampleSubmissions: Array<{
  id: string;
  title: string;
  contributor: string;
  contributorId: string;
  type: "feature" | "bugfix" | "documentation" | "test" | "design" | "other";
  date: string;
  status: "approved" | "pending" | "rejected";
}> = [
  {
    id: "1",
    title: "Implemented User Authentication",
    contributor: "johndoe",
    contributorId: "1",
    type: "feature",
    date: "2023-05-15",
    status: "pending",
  },
  {
    id: "2",
    title: "Fixed Responsive Layout Issues",
    contributor: "janedoe",
    contributorId: "2",
    type: "bugfix",
    date: "2023-05-10",
    status: "pending",
  },
  {
    id: "3",
    title: "Added API Documentation",
    contributor: "alexsmith",
    contributorId: "3",
    type: "documentation",
    date: "2023-05-05",
    status: "approved",
  },
  {
    id: "4",
    title: "Implemented Unit Tests for Auth Module",
    contributor: "sarahjones",
    contributorId: "4",
    type: "test",
    date: "2023-04-28",
    status: "rejected",
  },
]

export default function SubmissionsTable() {
  const [submissions] = useState(sampleSubmissions)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredSubmissions = submissions.filter(
    (sub) =>
      sub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.contributor.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  interface StatusBadgeProps {
    status: "approved" | "pending" | "rejected";
  }

  const getStatusBadge = (status: StatusBadgeProps["status"]) => {
    switch (status) {
      case "approved":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
            <Check className="mr-1 h-3 w-3" /> Approved
          </Badge>
        )
      case "pending":
        return (
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 hover:bg-yellow-50">
            <Clock className="mr-1 h-3 w-3" /> Pending
          </Badge>
        )
      case "rejected":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 hover:bg-red-50">
            <X className="mr-1 h-3 w-3" /> Rejected
          </Badge>
        )
      default:
        return null
    }
  }

  const types = {
    feature: "bg-purple-50 text-purple-700",
    bugfix: "bg-red-50 text-red-700",
    documentation: "bg-blue-50 text-blue-700",
    test: "bg-green-50 text-green-700",
    design: "bg-pink-50 text-pink-700",
    other: "bg-gray-50 text-gray-700",
  }

  const getTypeBadge = (type: keyof typeof types) => {

    return (
      <Badge variant="outline" className={types[type as keyof typeof types] || types.other}>
        {(type as string).charAt(0).toUpperCase() + (type as string).slice(1)}
      </Badge>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Submissions for Review</CardTitle>
        <CardDescription>Review and score contributor submissions to the idan-devs repository.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search submissions or contributors..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline">Filter</Button>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Submission</TableHead>
                <TableHead>Contributor</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSubmissions.length > 0 ? (
                filteredSubmissions.map((submission) => (
                  <TableRow key={submission.id}>
                    <TableCell className="font-medium">{submission.title}</TableCell>
                    <TableCell>
                      <Link href={`/contributor/${submission.contributorId}`} className="text-primary hover:underline">
                        {submission.contributor}
                      </Link>
                    </TableCell>
                    <TableCell>{getTypeBadge(submission.type)}</TableCell>
                    <TableCell>{submission.date}</TableCell>
                    <TableCell>{getStatusBadge(submission.status)}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/admin/review/${submission.id}`}>
                          <Eye className="mr-2 h-4 w-4" />
                          Review
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center">
                    No submissions found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
