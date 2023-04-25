import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Header, Image, Modal as SemanticModal } from 'semantic-ui-react'
import { setModal } from "../redux/movieSlice";

export const Modal = () => {
  const dispatch = useDispatch()
  // Decides whether modal is open or not

  // Move this to redux slice. 

  // Write an action to control isOpen state

  // Use isModalOpen from redux here.
  const isOpen = useSelector((state) => state.movie.isModalOpen);

  return (
    <SemanticModal
      onClose={() => dispatch(setModal(false))}
      onOpen={() => dispatch(setModal(true))}
      open={isOpen}
      // trigger={<Button>Show SemanticModal</Button>}
    >
      <SemanticModal.Header>Favourites</SemanticModal.Header>
      <SemanticModal.Content image>
        <Image size="medium" src="/images/avatar/large/rachel.png" wrapped />
        <SemanticModal.Description>
          <Header>Default Profile Image</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
        </SemanticModal.Description>
      </SemanticModal.Content>
      <SemanticModal.Actions>
        <Button color="black" onClick={() =>dispatch(setModal(false))}>
          No
        </Button>
        <Button
          content="Yep, that's me"
          labelPosition="right"
          icon="checkmark"
          onClick={() =>dispatch(setModal(false))}
          positive
        />
      </SemanticModal.Actions>
    </SemanticModal>
  );
};

