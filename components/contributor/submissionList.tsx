"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, ArrowUpDown, Check, Clock, X } from "lucide-react";

// Sample data
const sampleSubmissions: Array<{
  id: string;
  title: string;
  type: "feature" | "bugfix" | "documentation" | "test" | "design" | "other";
  date: string;
  status: "approved" | "pending" | "rejected";
  score: number | null;
}> = [
  {
    id: "1",
    title: "Implemented User Authentication",
    type: "feature",
    date: "2023-05-15",
    status: "approved",
    score: 85,
  },
  {
    id: "2",
    title: "Fixed Responsive Layout Issues",
    type: "bugfix",
    date: "2023-05-10",
    status: "approved",
    score: 65,
  },
  {
    id: "3",
    title: "Added API Documentation",
    type: "documentation",
    date: "2023-05-05",
    status: "pending",
    score: null,
  },
  {
    id: "4",
    title: "Implemented Unit Tests for Auth Module",
    type: "test",
    date: "2023-04-28",
    status: "rejected",
    score: null,
  },
];

export default function SubmissionList() {
  const [submissions] = useState(sampleSubmissions);
  const [activeTab, setActiveTab] = useState("all");

  const filteredSubmissions =
    activeTab === "all"
      ? submissions
      : submissions.filter((sub) => sub.status === activeTab);

  interface StatusBadgeProps {
    status: "approved" | "pending" | "rejected";
  }

  const getStatusBadge = (
    status: StatusBadgeProps["status"]
  ): JSX.Element | null => {
    switch (status) {
      case "approved":
        return (
          <Badge
            variant="default"
            className="bg-green-50 text-green-700 hover:bg-green-50">
            <Check className="mr-1 h-3 w-3" /> Approved
          </Badge>
        );
      case "pending":
        return (
          <Badge
            variant="default"
            className="bg-yellow-50 text-yellow-700 hover:bg-yellow-50">
            <Clock className="mr-1 h-3 w-3" /> Pending
          </Badge>
        );
      case "rejected":
        return (
          <Badge
            variant="destructive"
            className="bg-red-50 text-red-700 hover:bg-red-50">
            <X className="mr-1 h-3 w-3" /> Rejected
          </Badge>
        );
      default:
        return null;
    }
  };

  interface TypeBadgeProps {
    type: "feature" | "bugfix" | "documentation" | "test" | "design" | "other";
  }

  const getTypeBadge = (type: TypeBadgeProps["type"]): JSX.Element => {
    const types: Record<TypeBadgeProps["type"], string> = {
      feature: "bg-purple-50 text-purple-700",
      bugfix: "bg-red-50 text-red-700",
      documentation: "bg-blue-50 text-blue-700",
      test: "bg-green-50 text-green-700",
      design: "bg-pink-50 text-pink-700",
      other: "bg-gray-50 text-gray-700",
    };

    return (
      <Badge className={types[type] || types.other}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </Badge>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Submissions</CardTitle>
        <CardDescription>
          View and manage all your contributions to the idan-devs repository.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs
          defaultValue="all"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="approved">Approved</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="rejected">Rejected</TabsTrigger>
            </TabsList>
            <Button variant="outline" size="sm">
              <ArrowUpDown className="mr-2 h-4 w-4" />
              Sort
            </Button>
          </div>

          <TabsContent value={activeTab} className="mt-4">
            <div className="space-y-4">
              {filteredSubmissions.length > 0 ? (
                filteredSubmissions.map((submission) => (
                  <div
                    key={submission.id}
                    className="flex flex-col gap-2 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-1">
                      <h3 className="font-medium">{submission.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {getTypeBadge(submission.type)}
                        {getStatusBadge(submission.status)}
                        <span className="text-xs text-muted-foreground">
                          Submitted on {submission.date}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 self-end sm:self-center">
                      {submission.score && (
                        <span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                          Score: {submission.score}
                        </span>
                      )}
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                        <span className="sr-only">View details</span>
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex h-32 items-center justify-center rounded-lg border border-dashed">
                  <p className="text-center text-muted-foreground">
                    No {activeTab !== "all" ? activeTab : ""} submissions found.
                  </p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
