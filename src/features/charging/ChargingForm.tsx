import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button';

function ChargingForm({
  value,
  onValueChange,
  onSubmit,
}: {
  value: number
  onValueChange: (v: number) => void
  onSubmit: () => void
}) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4">Charging window planning</h2>
      <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          onSubmit();
        }}
        className='flex flex-col space-y-4'
      >
        <div className='flex justify-center items-center gap-2'>
            <label className='flex-none inline-block'>Charging window length:</label>
            <Input
                className='flex-none max-w-16'
                type='number'
                min={1}
                max={24}
                step={1}
                value={value}
                onChange={(e) => onValueChange(Math.min(24, Math.max(1, parseInt(e.target.value, 10))))}
            />
          </div>
        <Button className='self-center' type='submit'>Calculate</Button>
      </form>
    </div>
  )
}

export {ChargingForm}