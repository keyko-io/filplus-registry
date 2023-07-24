import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import React from 'react'

const Application = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-10 mt-10">
      <div>
        <h2 className="text-3xl font-bold tracking-tight mb-6">
          Application History
        </h2>
        <div className="grid gap-4 max-w-xl">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-md font-medium">
                1. Allocation Amount
              </CardTitle>
              <span className="bg-green-300 p-0.5 text-sm"> 50.00TiB</span>
            </CardHeader>

            <CardContent>
              <Separator className="my-2" />
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="text-sm text-muted-foreground">
                    proposed by
                  </div>
                  <div>@nj-steve</div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="text-muted-foreground">signer address</div>
                  <div>f1xx6555qijma7igpnjspyvdunc4vfxkawnpqy5ii</div>
                </div>
              </div>
              <Separator className="my-2" />
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="text-sm text-muted-foreground">
                    approved by
                  </div>
                  <div>@ronaldo</div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="text-muted-foreground">signer address</div>
                  <div>f1xx6555qijma7igpnjspyvdun21421fxkawnpqycd</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-md font-medium">
                2. Allocation Amount
              </CardTitle>
              <span className="bg-green-300 p-0.5 text-sm"> 50.00TiB</span>
            </CardHeader>

            <CardContent>
              <Separator className="my-2" />
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="text-sm text-muted-foreground">
                    proposed by
                  </div>
                  <div>@nj-steve</div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="text-muted-foreground">signer address</div>
                  <div>f1xx6555qijma7igpnjspyvdunc4vfxkawnpqy5ii</div>
                </div>
              </div>
              <Separator className="my-2" />
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="text-sm text-muted-foreground">
                    approved by
                  </div>
                  <div>@ronaldo</div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="text-muted-foreground">signer address</div>
                  <div>f1xx6555qijma7igpnjspyvdun21421fxkawnpqycd</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
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
                <p className="font-medium leading-none ">EF</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground">Multisig</p>
                <p className="font-medium leading-none">f02049625</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground">Datacap</p>
                <p className="font-medium leading-none">512TiB</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground">
                  Data Owner Country/Region
                </p>
                <p className="font-medium leading-none">China</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground">Data Owner Industry</p>
                <p className="font-medium leading-none">Education & Training</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground">
                  Total amount of DataCap being requested
                </p>
                <p className="font-medium leading-none">15PiB</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground">Status</p>
                <p className="font-medium leading-none">Approval</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground">Website</p>
                <p className="font-medium leading-none">
                  https://www.hzxsef.com/
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

export default Application
