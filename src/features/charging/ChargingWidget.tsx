import { useState } from 'react';
import { ChargingForm } from './ChargingForm';
import type { ChargingResponse } from './types';
import { ChargingResult } from './ChargingResult';
const API_URL = import.meta.env.VITE_API_URL;

function ChargingWidget() {
  const [chargingHours, setHours] = useState(1);
  const [response, setRespponse] = useState<ChargingResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  async function onSubmit() {
    setLoading(true)
    setError(null);
    setRespponse(null)
    try {
      const params = new URLSearchParams({ hours: chargingHours.toString()});
      const fetchUrl = new URL(API_URL + "/charging/window");
      fetchUrl.search = params.toString();
      const res = await fetch(fetchUrl);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      setRespponse({
          start: new Date(json.start),
          end: new Date(json.end),
          cleanEnergy: json.cleanEnergy,
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(String(err));
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='flex flex-col items-center bg-muted shadow rounded-lg p-4 space-y-4'>
      <ChargingForm value={chargingHours} onValueChange={setHours} onSubmit={onSubmit}/>
      { loading && <div>Loading...</div>}
      { error && <div>Error: {error}</div>}
      { response && <ChargingResult chargingResponse={response}/> }
    </div>
  )
}

export {ChargingWidget}