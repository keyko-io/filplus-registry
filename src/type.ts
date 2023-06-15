export interface App {
  dataCapApplicationType: string[]
  projectId: string
  applicationInfo: ApplicationInfo
}

export interface ApplicationInfo {
  "Core Information": CoreInformation
  dataCapAllocations: DataCapAllocation[]
}

export interface CoreInformation {
  "Data Owner Name": string
  "Data Owner Country/Region": string
  "Data Owner Industry": string
  Website: string
  "Social Media": string[]
}

export interface DataCapAllocation {
  uuid: string
  clientAddress: string
  timeOfRequest: number
  timeOfAllocation: number
  multisig: string
  allocationAmount: string
  signers: any[]
  pr: number
  "pr-cid": string
}
