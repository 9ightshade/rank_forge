import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Search, Trophy, Medal } from "lucide-react"
import Link from "next/link"
import ProfileBadge from "@/components/contributor/ProfileBadge"

// Sample data for the leaderboard
const contributors = [
  {
    id: "1",
    name: "John Doe",
    username: "johndoe",
    score: 1250,
    rank: "Gold",
    contributions: 32,
    avatar: null,
  },
  {
    id: "2",
    name: "Jane Smith",
    username: "janesmith",
    score: 980,
    rank: "Silver",
    contributions: 24,
    avatar: null,
  },
  {
    id: "3",
    name: "Alex Johnson",
    username: "alexj",
    score: 875,
    rank: "Silver",
    contributions: 19,
    avatar: null,
  },
  {
    id: "4",
    name: "Sarah Williams",
    username: "sarahw",
    score: 720,
    rank: "Bronze",
    contributions: 15,
    avatar: null,
  },
  {
    id: "5",
    name: "Michael Brown",
    username: "mikeb",
    score: 650,
    rank: "Bronze",
    contributions: 12,
    avatar: null,
  },
  {
    id: "6",
    name: "Emily Davis",
    username: "emilyd",
    score: 590,
    rank: "Bronze",
    contributions: 10,
    avatar: null,
  },
  {
    id: "7",
    name: "David Wilson",
    username: "davidw",
    score: 520,
    rank: "Bronze",
    contributions: 8,
    avatar: null,
  },
  {
    id: "8",
    name: "Olivia Taylor",
    username: "oliviat",
    score: 480,
    rank: "Bronze",
    contributions: 7,
    avatar: null,
  },
  {
    id: "9",
    name: "Robert Martin",
    username: "robertm",
    score: 420,
    rank: "Bronze",
    contributions: 6,
    avatar: null,
  },
  {
    id: "10",
    name: "Sophia Anderson",
    username: "sophiaa",
    score: 350,
    rank: "Bronze",
    contributions: 5,
    avatar: null,
  },
]

export default function LeaderboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-8 md:py-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold sm:text-4xl">Contributor Leaderboard</h1>
              <p className="mt-2 text-muted-foreground">Recognizing the top contributors to the idan-devs repository</p>
            </div>

            {/* Top 3 Contributors */}
            <div className="mb-12 grid gap-4 sm:grid-cols-3">
              {/* 2nd Place */}
              <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm">
                <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                  <Medal className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-medium">{contributors[1].name}</h3>
                <p className="text-sm text-muted-foreground">@{contributors[1].username}</p>
                <div className="mt-2">
                  <ProfileBadge type="silver" label="Silver" />
                </div>
                <p className="mt-3 text-2xl font-bold">{contributors[1].score}</p>
                <p className="text-sm text-muted-foreground">{contributors[1].contributions} contributions</p>
              </div>

              {/* 1st Place */}
              <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm sm:-mt-4">
                <div className="mb-2 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100 text-yellow-700">
                  <Trophy className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-medium">{contributors[0].name}</h3>
                <p className="text-sm text-muted-foreground">@{contributors[0].username}</p>
                <div className="mt-2">
                  <ProfileBadge type="gold" label="Gold" />
                </div>
                <p className="mt-3 text-3xl font-bold">{contributors[0].score}</p>
                <p className="text-sm text-muted-foreground">{contributors[0].contributions} contributions</p>
              </div>

              {/* 3rd Place */}
              <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm">
                <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-medium">{contributors[2].name}</h3>
                <p className="text-sm text-muted-foreground">@{contributors[2].username}</p>
                <div className="mt-2">
                  <ProfileBadge type="bronze" label="Bronze" />
                </div>
                <p className="mt-3 text-2xl font-bold">{contributors[2].score}</p>
                <p className="text-sm text-muted-foreground">{contributors[2].contributions} contributions</p>
              </div>
            </div>

            {/* Leaderboard Table */}
            <Card>
              <CardHeader>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <CardTitle>All Contributors</CardTitle>
                    <CardDescription>Ranked by contribution score and impact</CardDescription>
                  </div>
                  <div className="relative w-full sm:w-64">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search contributors..." className="pl-8" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all">
                  <TabsList className="mb-4">
                    <TabsTrigger value="all">All Time</TabsTrigger>
                    <TabsTrigger value="month">This Month</TabsTrigger>
                    <TabsTrigger value="week">This Week</TabsTrigger>
                  </TabsList>
                  <TabsContent value="all" className="space-y-0">
                    <div className="rounded-md border">
                      <div className="grid grid-cols-12 border-b bg-muted/50 px-4 py-3 text-sm font-medium">
                        <div className="col-span-1 text-center">#</div>
                        <div className="col-span-5">Contributor</div>
                        <div className="col-span-2 text-center">Rank</div>
                        <div className="col-span-2 text-center">Score</div>
                        <div className="col-span-2 text-center">Contributions</div>
                      </div>
                      <div className="divide-y">
                        {contributors.map((contributor, index) => (
                          <div key={contributor.id} className="grid grid-cols-12 items-center px-4 py-3">
                            <div className="col-span-1 text-center font-medium">{index + 1}</div>
                            <div className="col-span-5">
                              <Link
                                href={`/contributor/${contributor.id}`}
                                className="flex items-center gap-2 hover:underline"
                              >
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                                  {contributor.name.charAt(0)}
                                </div>
                                <div>
                                  <div className="font-medium">{contributor.name}</div>
                                  <div className="text-xs text-muted-foreground">@{contributor.username}</div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-span-2 text-center">
                              <ProfileBadge type={contributor.rank.toLowerCase()} label={contributor.rank} size="sm" />
                            </div>
                            <div className="col-span-2 text-center font-medium">{contributor.score}</div>
                            <div className="col-span-2 text-center text-muted-foreground">
                              {contributor.contributions}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="month">
                    <div className="flex h-32 items-center justify-center rounded-md border border-dashed">
                      <p className="text-center text-muted-foreground">
                        Monthly leaderboard data will be available soon.
                      </p>
                    </div>
                  </TabsContent>
                  <TabsContent value="week">
                    <div className="flex h-32 items-center justify-center rounded-md border border-dashed">
                      <p className="text-center text-muted-foreground">
                        Weekly leaderboard data will be available soon.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
