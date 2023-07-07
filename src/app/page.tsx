'use client'
import Card from '@/components/Card'
import mockData from '@/mockData.json'

export default function Home() {
  return (
    <main className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6">
        {mockData.map((app) => (
          <Card application={app} key={app.projectId} />
        ))}
      </div>
    </main>
  )
}
