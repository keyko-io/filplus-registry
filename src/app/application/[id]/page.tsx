import React from 'react'
import mockData from '@/mockData.json'

const Application = ({ params: { id } }: { params: { id: string } }) => {
  const application = mockData.find((data) => data.projectId === id)

  return (
    <div className="flex px-20 mt-10">
      <div className="flex-1 text-2xl">History Info</div>
      <div className="flex-1">
        <h4 className="text-2xl">Transaction Info</h4>
        <div className="mt-10">
          <div className="flex my-2">
            Data Owner Name :{' '}
            {
              application?.applicationInfo['Core Information'][
                'Data Owner Name'
              ]
            }
          </div>

          <hr />

          <div className="flex my-2">
            On-chain address :{' '}
            {
              application?.applicationInfo.dataCapAllocations[
                application.applicationInfo.dataCapAllocations?.length - 1
              ].clientAddress
            }
          </div>

          <hr />

          <div className="flex my-2">
            Multisig :{' '}
            {
              application?.applicationInfo.dataCapAllocations[
                application.applicationInfo.dataCapAllocations?.length - 1
              ].multisig
            }
          </div>

          <hr />

          <div className="flex flex-col my-2">
            Datacap :{' '}
            {
              application?.applicationInfo.dataCapAllocations[
                application.applicationInfo.dataCapAllocations?.length - 1
              ].allocationAmount
            }
          </div>

          <hr />

          <div className="flex flex-col my-2">
            Data Owner Country/Region :{' '}
            {
              application?.applicationInfo['Core Information'][
                'Data Owner Country/Region'
              ]
            }
          </div>

          <hr />

          <div className="flex flex-col my-2">
            Data Owner Industry :{' '}
            {
              application?.applicationInfo['Core Information'][
                'Data Owner Industry'
              ]
            }
          </div>

          <hr />

          <div className="flex my-2">
            Website :{' '}
            <a
              href={application?.applicationInfo['Core Information'].Website}
              className="pl-2 text-blue-400"
            >
              {' '}
              {application?.applicationInfo['Core Information'].Website}
            </a>
          </div>

          <hr />

          <button className="text-white bg-blue-500 px-4 py-2 rounded-lg cursor-pointer w-max mx-auto mt-4">
            {application?.applicationInfo.dataCapAllocations[
              application.applicationInfo.dataCapAllocations?.length - 1
            ].signers.length === 0
              ? 'Propose'
              : 'Approve'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Application
