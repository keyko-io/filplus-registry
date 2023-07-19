'use client'

import { ColumnDef } from '@tanstack/react-table'

export type AppData = {
  id: string
  dataOwnerName: string
  multisig: string
  datacap: string
}

export const columns: ColumnDef<AppData>[] = [
  {
    accessorKey: 'dataOwnerName',
    header: 'Data Owner Name',
  },
  {
    accessorKey: 'multisig',
    header: 'Multisig',
  },
  {
    accessorKey: 'datacap',
    header: 'Datacap',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
]

export const tableData = [
  {
    id: '1',
    dataOwnerName: 'Youtube',
    multisig: 'f02049625',
    datacap: '512TiB',
    status: 'waiting proposal',
  },
  {
    id: '2',
    dataOwnerName: 'Adidas',
    multisig: 'f02049625',
    datacap: '512TiB',
    status: 'waiting proposal',
  },
  {
    id: '3',
    dataOwnerName: 'yONE',
    multisig: 'f02049625',
    datacap: '512TiB',
    status: 'waiting proposal',
  },
  {
    id: '4',
    dataOwnerName: 'forTwo',
    multisig: 'f02049625',
    datacap: '512TiB',
    status: 'already proposed',
  },
  {
    id: '5',
    dataOwnerName: 'forTwo',
    multisig: 'f02049625',
    datacap: '512TiB',
    status: 'already proposed',
  },
  {
    id: '6',
    dataOwnerName: 'forTwo',
    multisig: 'f02049625',
    datacap: '512TiB',
    status: 'already proposed',
  },
  {
    id: '7',
    dataOwnerName: 'DDD',
    multisig: 'f02049625',
    datacap: '512TiB',
    status: 'already proposed',
  },
  {
    id: '8',
    dataOwnerName: 'CCC',
    multisig: 'f02049625',
    datacap: '512TiB',
    status: 'already proposed',
  },
  {
    id: '9',
    dataOwnerName: 'AAA',
    multisig: 'f02049625',
    datacap: '512TiB',
    status: 'already proposed',
  },
  {
    id: '10',
    dataOwnerName: 'BBB',
    multisig: 'f02049625',
    datacap: '512TiB',
    status: 'already proposed',
  },
]
