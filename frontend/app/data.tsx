// leaderboard data in tsx
import type { NextApiRequest, NextApiResponse } from "next";

export type Driver = {
  number: number;
  fullName: string;
  team: string;
  countryCode: string;
  teamColor: string; // e.g. "#FF0000"
  headshot: string;
  acronym: string;
  engine: string;
  drs?: number | string;
  speed?: number | string;
  position?: number;
  lap?: number;
  interval?: number | string;
};

const DRIVER_URL = "https://api.openf1.org/v1/drivers?session_key=latest";
const CAR_URL =
  "https://api.openf1.org/v1/car_data?&session_key=latest&speed%3E=300";
const POSITION_URL = "https://api.openf1.org/v1/position?session_key=latest";
const LAP_URL = "https://api.openf1.org/v1/laps?session_key=latest";
const INTERVAL_URL = "https://api.openf1.org/v1/intervals?session_key=latest";

// Helper function to map team names to engine manufacturers
function getEngineManufacturer(team: string): string {
  if (team === "Ferrari" || team === "Kick Sauber") {
    return "Ferrari";
  } else if (
    ["Mercedes", "McLaren", "Aston Martin", "Alpine", "Williams"].includes(team)
  ) {
    return "Mercedes";
  } else if (["Red Bull Racing", "Racing Bulls"].includes(team)) {
    return "Red Bull Powertrains";
  }
  return "Unknown";
}

export async function getLiveDrivers(): Promise<Driver[]> {
  // Fetch all endpoints concurrently
  const [driverRes, carRes, posRes, lapRes, intervalRes] = await Promise.all([
    fetch(DRIVER_URL, { cache: "no-store" }),
    fetch(CAR_URL, { cache: "no-store" }),
    fetch(POSITION_URL, { cache: "no-store" }),
    fetch(LAP_URL, { cache: "no-store" }),
    fetch(INTERVAL_URL, { cache: "no-store" }),
  ]);

  // Parse the JSON data
  const [driverData, carData, positionData, lapData, intervalData] =
    await Promise.all([
      driverRes.json(),
      carRes.json(),
      posRes.json(),
      lapRes.json(),
      intervalRes.json(),
    ]);

  // Initialise a dictionary to hold our live data
  const liveData: Record<number, Driver> = {};

  // Process DRIVER DATA
  driverData.forEach((driver: any) => {
    const driverNumber = Number(driver.driver_number);
    liveData[driverNumber] = {
      number: driverNumber,
      fullName: driver.full_name,
      team: driver.team_name,
      countryCode: driver.country_code,
      // team_colour is expected to be a hex value without the '#'
      teamColor: `#${driver.team_colour}`,
      headshot: driver.headshot_url,
      acronym: driver.name_acronym,
      engine: "", // Will be updated later based on the team
    };
  });

  // Process CAR DATA: update with drs and speed info
  carData.forEach((car: any) => {
    const driverNumber = car.driver_number;
    if (liveData[driverNumber]) {
      liveData[driverNumber] = {
        ...liveData[driverNumber],
        drs: car.drs,
        speed: car.speed,
      };
    }
  });

  // Process POSITION DATA: update with position info
  positionData.forEach((pos: any) => {
    const driverNumber = pos.driver_number;
    if (liveData[driverNumber]) {
      liveData[driverNumber] = {
        ...liveData[driverNumber],
        position: Number(pos.position),
      };
    }
  });

  // Process LAP DATA: update with lap info
  lapData.forEach((lap: any) => {
    const driverNumber = lap.driver_number;
    if (liveData[driverNumber]) {
      liveData[driverNumber] = {
        ...liveData[driverNumber],
        lap: Number(lap.lap_number),
      };
    }
  });

  // Process INTERVAL DATA: update with interval info
  intervalData.forEach((interval: any) => {
    const driverNumber = interval.driver_number;
    if (liveData[driverNumber]) {
      liveData[driverNumber] = {
        ...liveData[driverNumber],
        interval: interval.interval,
      };
    }
  });

  // Convert the liveData object to an array and sort it by the driver's position.
  // If a driver is missing position data, they are sorted to the end.
  const sortedDrivers: Driver[] = Object.values(liveData).sort((a, b) => {
    const posA = a.position ?? Infinity;
    const posB = b.position ?? Infinity;
    return posA - posB;
  });

  // Associate each driver with their engine manufacturer based on team name
  const finalDrivers: Driver[] = sortedDrivers.map((driver) => ({
    ...driver,
    engine: getEngineManufacturer(driver.team),
  }));

  return finalDrivers;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Driver[] | { error: string }>,
) {
  try {
    const drivers = await getLiveDrivers();
    res.status(200).json(drivers);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
