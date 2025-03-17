//leaderboard data in tsx
import type { NextApiRequest, NextApiResponse } from "next";
import { URL } from "url";

import { Driver } from "@/app/data.d";

export async function getLiveDrivers(): Promise<Driver[]> {
  const res = await fetch(
    `https://api.openf1.org/v1/drivers?session_key=latest`,
    { cache: "no-store" },
  );
  const data = await res.json();

  return data.map((driver: any) => ({
    number: driver.driver_number,
    fullName: driver.full_name,
    team: driver.team_name,
    countryCode: driver.country_code,
    teamColor: `#${driver.team_colour}`,
    headshot: driver.headshot_url,
    acronym: driver.name_acronym,
  }));
}
