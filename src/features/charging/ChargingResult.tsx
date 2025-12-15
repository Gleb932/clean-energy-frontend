import { instantToFormattedLocaleStr } from "@/lib/date"
import type { ChargingResponse } from "./types"

type Props = {
    chargingResponse: ChargingResponse
}

function ChargingResult({chargingResponse}: Props) {
    return (
        <div className="flex flex-col flex-wrap w-fit text-left bg-card shadow rounded-lg p-4 space-y-4">
            <p className="text-base font-medium">
                Cleanest charging window:
                <span className="font-semibold text-primary">
                    {" "}{instantToFormattedLocaleStr(chargingResponse.start)} - {instantToFormattedLocaleStr(chargingResponse.end)}
                </span>
            </p>
            <p className="text-base font-medium">
                Clean energy: <span className="font-semibold text-green-400">{parseFloat(chargingResponse.cleanEnergy.toFixed(2))}%</span>
            </p>
        </div>
    )
}

export {ChargingResult}