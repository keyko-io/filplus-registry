'use client'
import AppHistory from '@/components/AppHistory'
import AppInfo from '@/components/AppInfo'
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
        <AppInfo coreInformation={data.info.core_information} />
      </div>
    )
}

export default ApplicationDetailPage
