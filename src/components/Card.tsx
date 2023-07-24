import { App } from '@/type'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'

interface Props {
  application: App
}

const AppCard = ({ application }: Props) => {
  return (
    <Card>
      <CardHeader></CardHeader>
      <CardContent className="grid gap-4 text-xs">
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">Data Owner Name</p>
          <p className="font-medium leading-none ">
            {application.applicationInfo['Core Information']['Data Owner Name']}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">Multisig</p>
          <p className="font-medium leading-none">
            {
              application.applicationInfo.dataCapAllocations[
                application.applicationInfo.dataCapAllocations?.length - 1
              ].multisig
            }
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">Datacap</p>
          <p className="font-medium leading-none">
            {
              application.applicationInfo.dataCapAllocations[
                application.applicationInfo.dataCapAllocations?.length - 1
              ].allocationAmount
            }
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">Status</p>
          <p className="font-medium leading-none">
            {application.applicationInfo.dataCapAllocations[
              application.applicationInfo.dataCapAllocations?.length - 1
            ].signers.length === 0
              ? 'proposal'
              : 'approval'}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex">
        <Button asChild className="w-full">
          <Link href={`/application/${application.projectId}`}>Detail</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default AppCard

// <div className="border border-gray-200 rounded-lg shadow-md p-5 text-sm flex flex-col min-h-[320px]">
// <div className="flex my-2">
//   Data Owner Name :{' '}
//   {application.applicationInfo['Core Information']['Data Owner Name']}
// </div>

// <hr />

// <div className="flex my-2">
//   On-chain address :{' '}
//   {
//     application.applicationInfo.dataCapAllocations[
//       application.applicationInfo.dataCapAllocations?.length - 1
//     ].clientAddress
//   }
// </div>

// <hr />

// <div className="flex my-2">
//   Multisig :{' '}
//   {
//     application.applicationInfo.dataCapAllocations[
//       application.applicationInfo.dataCapAllocations?.length - 1
//     ].multisig
//   }
// </div>

// <hr />

// <div className="flex flex-col my-2">
//   Datacap :{' '}
//   {
//     application.applicationInfo.dataCapAllocations[
//       application.applicationInfo.dataCapAllocations?.length - 1
//     ].allocationAmount
//   }
// </div>

// <hr />

// <div className="flex flex-col my-2">
//   Approvals :{' '}
//   {application.applicationInfo.dataCapAllocations[
//     application.applicationInfo.dataCapAllocations?.length - 1
//   ].signers.length === 0
//     ? 0
//     : 1}
// </div>

// <hr />

// <Button asChild className="mt-auto">
//   <Link href={`/application/${application.projectId}`}>Proceed</Link>
// </Button>
// </div>
