import { instantToFormattedLocaleStr } from "@/lib/date"
import type { ChargingResponse } from "./types"

type Props = {
    chargingResponse: ChargingResponse
}

function ChargingResult({chargingResponse}: Props) {
    return (
        <>
            <p>Cleanest charging window: {
                instantToFormattedLocaleStr(chargingResponse.start)
            } - {
                instantToFormattedLocaleStr(chargingResponse.end)
            }</p>
            <p>Clean energy: {parseFloat(chargingResponse.cleanEnergy.toFixed(2))}%</p>
        </>
    )
}

export {ChargingResult}