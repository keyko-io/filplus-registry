'use client'
import AppCard from '@/components/Card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import mockData from '@/mockData.json'

export default function Home() {
  return (
    <main className="mt-10 px-10 grid gap-6">
      <div className="flex space-x-4">
        <Input
          type="search"
          placeholder="Search..."
          className="md:w-[100px] lg:w-[300px]"
          onChange={(e) => console.log(e.target.value)}
        />
        <Select onValueChange={(value) => console.log(value)}>
          <SelectTrigger id="area" className="w-[180px]">
            <SelectValue placeholder="Filter Applications" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="efil">Efil+</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
        {mockData.map((app) => (
          <AppCard application={app} key={app.projectId} />
        ))}
      </div>
    </main>
  )
}
