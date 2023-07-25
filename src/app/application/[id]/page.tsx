'use client'
import AppHistory from '@/components/AppHistory'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { getApplicationById } from '@/lib/apiClient'
import React from 'react'
import { useQuery } from 'react-query'

const ApplicationDetailPage = ({
  params: { id },
}: {
  params: { id: string }
}) => {
  const { data, isLoading } = useQuery({
    queryKey: ['posts', id],
    queryFn: () => getApplicationById(id),
  })

  if (isLoading) return <div>Loading...</div>

  if (data)
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-10 mt-10">
        <AppHistory datacapAllocations={data.info.datacap_allocations} />
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            Application Info
          </h2>
          <div>
            <Card>
              <CardHeader></CardHeader>
              <CardContent className="grid gap-4 text-sm">
                <div className="flex items-center justify-between">
                  <p className="text-muted-foreground">Data Owner Name</p>
                  <p className="font-medium leading-none">
                    {data.info.core_information.data_owner_name}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-muted-foreground">Data Owner Region</p>
                  <p className="font-medium leading-none">
                    {data.info.core_information.data_owner_region}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-muted-foreground">Data Owner Industry</p>
                  <p className="font-medium leading-none">
                    {data.info.core_information.data_owner_industry}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-muted-foreground">Website</p>
                  <p className="font-medium leading-none">
                    {data.info.core_information.website}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-muted-foreground">Social</p>
                  <p className="font-medium leading-none">
                    {data.info.core_information.social_media}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex">
                <Button className="w-full">Approve</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    )
}

export default ApplicationDetailPage
