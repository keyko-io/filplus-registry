'use client'
import AppCard from '@/components/cards/HomePageCard'
import { columns } from '@/components/table/columns'
import { DataTable } from '@/components/table/data-table'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { getAllApplications } from '@/lib/apiClient'
import { Search } from 'lucide-react'
import { useQuery } from 'react-query'

export default function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['application'],
    queryFn: getAllApplications,
  })

  if (isLoading) return <div>Loading...</div>

  return (
    <main className="mt-10 px-10 grid">
      <Tabs defaultValue="grid">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="flex items-center relative">
              <Search className="absolute left-2" size={20} />
              <Input
                type="search"
                placeholder="Search Application..."
                className="md:w-[100px] lg:w-[300px] pl-10"
                onChange={(e) => console.log(e.target.value)}
              />
            </div>

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

          <TabsList>
            <TabsTrigger value="grid">Grid View</TabsTrigger>
            <TabsTrigger value="table">Table View</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="grid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
            {data?.map((app) => <AppCard application={app} key={app.id} />)}
          </div>
        </TabsContent>
        <TabsContent value="table">
          <DataTable columns={columns} data={data || []} />
        </TabsContent>
      </Tabs>
    </main>
  )
}
