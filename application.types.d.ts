export interface Application {
  id: string
  _type: string
  info: Info
}

export interface Info {
  core_information: CoreInformation
  application_lifecycle: ApplicationLifecycle
  datacap_allocations: DatacapAllocation[]
}

export interface CoreInformation {
  data_owner_name: string
  data_owner_region: string
  data_owner_industry: string
  website: string
  social_media: string
}

export interface ApplicationLifecycle {
  state: string
  validated_time: string
  initial_pr_number: number
  validated_by: string
  first_allocation_time: string
  is_active: boolean
  time_of_new_state: string
}

export interface DatacapAllocation {
  request_information: RequestInformation
  signers: Signer[]
}

export interface RequestInformation {
  actor: string
  uuid: string
  request_id: string
  request_type: string
  client_address: string
  created_at: string
  is_active: boolean
  allocation_amount: string
}

export interface Signer {
  signing_address: string
  time_of_signature: string
  message_cid: string
}
