'use client'
import { DatacapAllocation } from '@/type'
import AppHistoryCard from './AppHistoryCard'

interface ComponentProps {
  datacapAllocations: DatacapAllocation[]
}

const AppHistory = ({ datacapAllocations }: ComponentProps) => {
  console.log(datacapAllocations, 'xx')

  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight mb-6">
        Application History
      </h2>
      <div className="grid gap-4 max-w-xl">
        {datacapAllocations.length === 0 ? (
          <div>No allocation yet.</div>
        ) : (
          datacapAllocations.map((allocation) => (
            <AppHistoryCard
              key={allocation.request_information.uuid}
              allocation={allocation}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default AppHistory
