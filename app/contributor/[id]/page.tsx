import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Github, Twitter, Globe, MapPin, Calendar, Award,  } from "lucide-react"
import Navbar from "@/components/layout/navbar"
import ProfileBadge from "@/components/contributor/profileBadge"
import ScoreCard from "@/components/contributor/scoreCard"
import Footer from "@/components/layout/footer"
// Check, Clock, X

// Sample contributor data
const contributor = {
  id: "1",
  name: "John Doe",
  username: "johndoe",
  bio: "Full-stack developer passionate about open source. Contributing to idan-devs and other projects.",
  location: "San Francisco, CA",
  website: "https://johndoe.dev",
  github: "johndoe",
  twitter: "johndoe",
  joinedDate: "January 2023",
  score: 1250,
  rank: "Gold",
  nextRank: "Platinum",
  progress: 65,
  skills: ["React", "Node.js", "TypeScript", "Next.js", "GraphQL", "MongoDB"],
  stats: {
    contributions: 32,
    approved: 28,
    pending: 2,
    rejected: 2,
  },
  recentSubmissions: [
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
  ],
}

export default function ContributorProfilePage() {
  // interface StatusBadgeProps {
  //   status: "approved" | "pending" | "rejected";
  // }

  // const getStatusBadge = (status: StatusBadgeProps["status"]): JSX.Element | null => {
  //   switch (status) {
  //     case "approved":
  //       return (
  //         <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
  //           <Check className="mr-1 h-3 w-3" /> Approved
  //         </Badge>
  //       )
  //     case "pending":
  //       return (
  //         <Badge variant="outline" className="bg-yellow-50 text-yellow-700 hover:bg-yellow-50">
  //           <Clock className="mr-1 h-3 w-3" /> Pending
  //         </Badge>
  //       )
  //     case "rejected":
  //       return (
  //         <Badge variant="outline" className="bg-red-50 text-red-700 hover:bg-red-50">
  //           <X className="mr-1 h-3 w-3" /> Rejected
  //         </Badge>
  //       )
  //     default:
  //       return null
  //   }
  // }

  // const types = {
  //   feature: "bg-purple-50 text-purple-700",
  //   bugfix: "bg-red-50 text-red-700",
  //   documentation: "bg-blue-50 text-blue-700",
  //   test: "bg-green-50 text-green-700",
  //   design: "bg-pink-50 text-pink-700",
  //   other: "bg-gray-50 text-gray-700",
  // }

  // const getTypeBadge = (type: keyof typeof types) => {

  //   return (
  //     <Badge variant="outline" className={types[type] || types.other}>
  //       {type.charAt(0).toUpperCase() + type.slice(1)}
  //     </Badge>
  //   )
  // }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar/>
      <main className="flex-1">
        <div className="container py-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Profile Card */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="text-3xl font-medium">{contributor.name.charAt(0)}</span>
                    </div>
                    <h1 className="mt-4 text-2xl font-bold">{contributor.name}</h1>
                    <p className="text-muted-foreground">@{contributor.username}</p>
                    <div className="mt-2">
                      <ProfileBadge type={contributor.rank.toLowerCase() as "bronze" | "silver" | "gold" | "platinum"} label={contributor.rank} />
                    </div>
                    <p className="mt-4 text-sm">{contributor.bio}</p>

                    <div className="mt-4 flex w-full flex-col gap-2 text-sm">
                      {contributor.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{contributor.location}</span>
                        </div>
                      )}
                      {contributor.website && (
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4 text-muted-foreground" />
                          <a
                            href={contributor.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            {contributor.website.replace(/^https?:\/\//, "")}
                          </a>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Joined {contributor.joinedDate}</span>
                      </div>
                    </div>

                    <div className="mt-4 flex gap-2">
                      {contributor.github && (
                        <Button variant="outline" size="icon" asChild>
                          <a
                            href={`https://github.com/${contributor.github}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4" />
                            <span className="sr-only">GitHub</span>
                          </a>
                        </Button>
                      )}
                      {contributor.twitter && (
                        <Button variant="outline" size="icon" asChild>
                          <a
                            href={`https://twitter.com/${contributor.twitter}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Twitter className="h-4 w-4" />
                            <span className="sr-only">Twitter</span>
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Score Card */}
              <ScoreCard
                score={contributor.score}
                rank={contributor.rank}
                nextRank={contributor.nextRank}
                progress={contributor.progress}
              />

              {/* Skills Card */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {contributor.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2 space-y-6">
              {/* Stats Cards */}
              <div className="grid gap-4 sm:grid-cols-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <p className="text-sm text-muted-foreground">Contributions</p>
                    <p className="text-3xl font-bold">{contributor.stats.contributions}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <p className="text-sm text-muted-foreground">Approved</p>
                    <p className="text-3xl font-bold text-green-600">{contributor.stats.approved}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <p className="text-sm text-muted-foreground">Pending</p>
                    <p className="text-3xl font-bold text-yellow-600">{contributor.stats.pending}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <p className="text-sm text-muted-foreground">Rejected</p>
                    <p className="text-3xl font-bold text-red-600">{contributor.stats.rejected}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Contributions */}
              <Card>
                <CardHeader>
                  <CardTitle>Contributions</CardTitle>
                  <CardDescription>Recent contributions to the idan-devs repository</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="all">
                    <TabsList className="mb-4">
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="approved">Approved</TabsTrigger>
                      <TabsTrigger value="pending">Pending</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all" className="space-y-4">
                      {contributor.recentSubmissions.map((submission) => (
                        <div
                          key={submission.id}
                          className="flex flex-col gap-2 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
                        >
                          <div className="space-y-1">
                            <h3 className="font-medium">{submission.title}</h3>
                            <div className="flex flex-wrap gap-2">
                              {/* {getTypeBadge(submission.type)}
                              {getStatusBadge(submission.status)} */}
                              <span className="text-xs text-muted-foreground">Submitted on {submission.date}</span>
                            </div>
                          </div>
                          {submission.score && (
                            <div className="mt-2 sm:mt-0">
                              <span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                                Score: {submission.score}
                              </span>
                            </div>
                          )}
                        </div>
                      ))}
                    </TabsContent>
                    <TabsContent value="approved">
                      {contributor.recentSubmissions
                        .filter((s) => s.status === "approved")
                        .map((submission) => (
                          <div
                            key={submission.id}
                            className="flex flex-col gap-2 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
                          >
                            <div className="space-y-1">
                              <h3 className="font-medium">{submission.title}</h3>
                              <div className="flex flex-wrap gap-2">
                                {/* {getTypeBadge(submission.type)}
                                {getStatusBadge(submission.status)} */}
                                <span className="text-xs text-muted-foreground">Submitted on {submission.date}</span>
                              </div>
                            </div>
                            {submission.score && (
                              <div className="mt-2 sm:mt-0">
                                <span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                                  Score: {submission.score}
                                </span>
                              </div>
                            )}
                          </div>
                        ))}
                    </TabsContent>
                    <TabsContent value="pending">
                      {contributor.recentSubmissions
                        .filter((s) => s.status === "pending")
                        .map((submission) => (
                          <div
                            key={submission.id}
                            className="flex flex-col gap-2 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
                          >
                            <div className="space-y-1">
                              <h3 className="font-medium">{submission.title}</h3>
                              <div className="flex flex-wrap gap-2">
                                {/* {getTypeBadge(submission.type)}
                                {getStatusBadge(submission.status)} */}
                                <span className="text-xs text-muted-foreground">Submitted on {submission.date}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card>
                <CardHeader>
                  <CardTitle>Achievements</CardTitle>
                  <CardDescription>Badges and achievements earned through contributions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                      <Award className="h-8 w-8 text-primary" />
                      <span className="font-medium">First Contribution</span>
                      <span className="text-xs text-muted-foreground">Jan 15, 2023</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                      <Award className="h-8 w-8 text-primary" />
                      <span className="font-medium">10+ Contributions</span>
                      <span className="text-xs text-muted-foreground">Mar 22, 2023</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                      <Award className="h-8 w-8 text-primary" />
                      <span className="font-medium">Bug Hunter</span>
                      <span className="text-xs text-muted-foreground">Apr 10, 2023</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                      <Award className="h-8 w-8 text-primary" />
                      <span className="font-medium">Feature Master</span>
                      <span className="text-xs text-muted-foreground">May 5, 2023</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}
