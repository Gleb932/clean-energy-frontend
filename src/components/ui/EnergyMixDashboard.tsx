import { useEffect, useState } from "react";
import EnergyPieChart from "@/components/ui/EnergyPieChart";
const API_URL = import.meta.env.VITE_API_URL;

type EnergyMixEntry = {
  fuel: string;
  percentage: number;
}

type EnergyMix = {
  date: string,
  entries: EnergyMixEntry[],
  cleanEnergy: number
};

const dateOptions = {
  year: "numeric",
  month: "2-digit",
  day: "numeric",
} as const

export default function EnergyDashboard() {
  const [data, setData] = useState<EnergyMix[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL + "/energy-mix/summary");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        setData(json);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(String(err));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;


  return (
    <div className="flex">
      {
        data.map( (dayMix, index) => (
          <EnergyPieChart
            key={index}
            className="flex-1"
            entries = {dayMix.entries}
            cleanEnergy={parseFloat(dayMix.cleanEnergy.toFixed(2))}
            title={new Date(dayMix.date + 'T00:00:00.000Z').toLocaleDateString('en-GB', dateOptions)}
          />
        ))
      }
    </div>
  )
}