import { useEffect, useState } from "react";
import EnergyPieChart from "./EnergyPieChart";
import { dateToFormattedLocaleStr, localDateToDate } from "@/lib/date";
import type { EnergyMix } from "./types";
const API_URL = import.meta.env.VITE_API_URL;

export default function EnergyDashboard() {
  const [data, setData] = useState<EnergyMix[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setError(null)
      setLoading(true)
      setData(null)
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
    <div className="bg-muted rounded p-4">
      <h2 className="text-2xl font-semibold mb-4">Energy mix summary</h2>
      <div className="flex flex-row flex-1">
        {
          data.map( (dayMix, index) => (
            <EnergyPieChart
              key={index}
              className="flex-1"
              entries = {dayMix.entries}
              cleanEnergy={parseFloat(dayMix.cleanEnergy.toFixed(2))}
              title={dateToFormattedLocaleStr(localDateToDate(dayMix.date))}
            />
          ))
        }
      </div>
    </div>
  )
}