import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Header, Image, Modal as SemanticModal } from 'semantic-ui-react'
import { setModal } from "../redux/movieSlice";
import ModalTable from './ModalTable';
import { Table } from 'semantic-ui-react'

export const Modal = () => {
  const dispatch = useDispatch()
  // Decides whether modal is open or not

  // Move this to redux slice. 

  // Write an action to control isOpen state

  // Use isModalOpen from redux here.
  const isOpen = useSelector((state) => state.movie.isModalOpen);
  const favouriteMovies = useSelector((state) => state.movie.favouriteMovies);
  console.log(favouriteMovies)

  return (
    <SemanticModal
    size='large'
    centered
    
      onClose={() => dispatch(setModal(false))}
      onOpen={() => dispatch(setModal(true))}
      open={isOpen}
      // trigger={<Button>Show SemanticModal</Button>}
    >
      <SemanticModal.Header>Favourites</SemanticModal.Header>
      <SemanticModal.Content image>
        <SemanticModal.Description>

{/* //TODO: inject the favourite movies data in this : map */}         
          <Table singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Movie</Table.HeaderCell>
                <Table.HeaderCell>Released On</Table.HeaderCell>
                <Table.HeaderCell>Type</Table.HeaderCell>
                <Table.HeaderCell>Delete</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
                {favouriteMovies.map(movie => {
                  return <ModalTable movie={movie}/>
                })}
            </Table.Body>
          </Table>

        </SemanticModal.Description>
      </SemanticModal.Content>
      <SemanticModal.Actions>
        <Button color="red" onClick={() =>dispatch(setModal(false))}>
          Close
        </Button>
      </SemanticModal.Actions>
    </SemanticModal>
  );
};

