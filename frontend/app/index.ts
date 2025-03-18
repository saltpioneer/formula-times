import { NextPage } from "next";
import useSWR from "swr";
import { Driver } from "@/app/data";

// A simple fetcher function to call the API route
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
  // SWR polls the /api/liveDrivers endpoint every 5000ms (5 seconds)
  const { data, error } = useSWR<Driver[]>("/api/liveDrivers", fetcher, {
    refreshInterval: 5000,
  });

  if (error) return <div>Error loading data.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Live Leaderboard</h1>
      {data.map((driver) => (
        <div key={driver.number} style={{ marginBottom: "1rem" }}>
          <h2>{driver.fullName}</h2>
          <p>
            <strong>Team:</strong> {driver.team} - <strong>Engine:</strong>{" "}
            {driver.engine}
          </p>
          <p>
            <strong>Position:</strong> {driver.position ?? "N/A"}
          </p>
          <p>
            <strong>Lap:</strong> {driver.lap ?? "N/A"} |{" "}
            <strong>Speed:</strong> {driver.speed ?? "N/A"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Home;
