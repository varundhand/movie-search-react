import React from 'react'
import { Table } from 'semantic-ui-react'

const ModalTable = ({movie:{Title,Year,Type}}) => {
  return (
    <>
        <Table.Row>
          <Table.Cell>{Title}</Table.Cell>
          <Table.Cell>{Year}</Table.Cell>
          <Table.Cell>{Type}</Table.Cell>
        </Table.Row>
    </>
  )
}

export default ModalTable
