import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { cn } from "@/lib/utils";
import { Cell, Pie, PieChart } from "recharts";

export type EnergyMixEntry = { fuel: string; percentage: number }

const chartConfig = {
  gas: { label: 'Gas', color: 'var(--gas)' },
  coal: { label: 'Coal', color: 'var(--coal)' },
  biomass: { label: 'Biomass', color: 'var(--biomass)' },
  nuclear: { label: 'Nuclear', color: 'var(--nuclear)' },
  hydro: { label: 'Hydro', color: 'var(--hydro)' },
  imports: { label: 'Imports', color: 'var(--imports)' },
  other: { label: 'Other', color: 'var(--other)' },
  wind: { label: 'Wind', color: 'var(--wind)' },
  solar: { label: 'Solar', color: 'var(--solar)' },
} satisfies ChartConfig;

type Props = {
    entries: EnergyMixEntry[],
    cleanEnergy: number,
    title: string,
    className?: string
}

export default function EnergyPieChart({
    entries,
    cleanEnergy,
    title,
    className,
}: Props) {
    return (
        <div className={cn("w-fit", className)}>
            <div>Clean: {cleanEnergy}%</div>
            <ChartContainer config={chartConfig} className="min-h-40 max-h-64 w-full aspect-square">
                <PieChart>
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Pie data={entries} dataKey="percentage" nameKey="fuel">
                        {entries.map((entry) => (
                            <Cell key={entry.fuel} fill={chartConfig[entry.fuel as keyof typeof chartConfig]?.color ?? '#888'} />
                        ))}
                    </Pie>
                </PieChart>
            </ChartContainer>
            <div className="flex justify-center">{title}</div>
        </div>
    );
}