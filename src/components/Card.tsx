import { App } from "@/type"
import Link from "next/link"
import React from "react"

interface Props {
  application: App
}

const Card = ({ application }: Props) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-md p-5 text-sm flex flex-col min-h-[350px]">
      <div className="flex my-2">
        Data Owner Name :{" "}
        {application.applicationInfo["Core Information"]["Data Owner Name"]}
      </div>

      <hr />

      <div className="flex my-2">
        On-chain address :{" "}
        {
          application.applicationInfo.dataCapAllocations[
            application.applicationInfo.dataCapAllocations?.length - 1
          ].clientAddress
        }
      </div>

      <hr />

      <div className="flex my-2">
        Multisig :{" "}
        {
          application.applicationInfo.dataCapAllocations[
            application.applicationInfo.dataCapAllocations?.length - 1
          ].multisig
        }
      </div>

      <hr />

      <div className="flex flex-col my-2">
        Datacap :{" "}
        {
          application.applicationInfo.dataCapAllocations[
            application.applicationInfo.dataCapAllocations?.length - 1
          ].allocationAmount
        }
      </div>

      <hr />

      <div className="flex flex-col my-2">
        Approvals :{" "}
        {application.applicationInfo.dataCapAllocations[
          application.applicationInfo.dataCapAllocations?.length - 1
        ].signers.length === 0
          ? 0
          : 1}
      </div>

      <hr />

      <Link
        href={`/application/${application.projectId}`}
        className="text-white bg-blue-500 px-4 py-2 rounded-lg cursor-pointer w-max mx-auto mt-auto"
      >
        Proceed
      </Link>
    </div>
  )
}

export default Card
