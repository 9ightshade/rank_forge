import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import ProfileBadge from "./profileBadge";


export default function ScoreCard({
  score = 0,
  rank = "Bronze",
  nextRank = "Silver",
  progress = 45,
}) {
  // Determine badge type based on rank
  interface BadgeTypeMap {
    [key: string]: string;
  }

  const getBadgeType = (rank: string): string => {
    const rankLower = rank.toLowerCase();
    const badgeTypeMap: BadgeTypeMap = {
      bronze: "bronze",
      silver: "silver",
      gold: "gold",
      platinum: "platinum",
    };

    for (const key in badgeTypeMap) {
      if (rankLower.includes(key)) {
        return badgeTypeMap[key];
      }
    }

    return "bronze";
  };

  const badgeType: "bronze" | "silver" | "gold" | "platinum" = getBadgeType(rank) as "bronze" | "silver" | "gold" | "platinum";

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Contribution Score</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-3xl font-bold">{score}</span>
              <span className="text-sm text-muted-foreground">
                Total Points
              </span>
            </div>
            <ProfileBadge type={badgeType} size="sm" label={rank} />
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-sm">
              <span>Progress to {nextRank}</span>
              <span className="font-medium">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
