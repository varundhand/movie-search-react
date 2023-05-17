import React, { useEffect } from "react";
import { Table, Icon, Button } from "semantic-ui-react";
import { ReactComponent as TrashSvg } from "../../public/trash.svg"; // we used semantic ui icons instead
import { useDispatch } from "react-redux";
import { removeFavouriteMovie } from "../redux/movieSlice";

const ModalTable = ({ movie: { Title, Year, Type, imdbID } }) => {   // the prop passed was a nested object
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(removeFavouriteMovie(imdbID))
  }
  
  // useEffect(() => {

  // }, [dispatch])

  return (  
    <>
      <Table.Row>
        <Table.Cell>{Title}</Table.Cell>
        <Table.Cell>{Year}</Table.Cell>
        <Table.Cell>{Type}</Table.Cell>
        <Table.Cell>
          <Icon name="trash" style={{ cursor: "pointer" }} onClick={handleDelete}/> 
        </Table.Cell>
      </Table.Row>
    </>
  );
};

export default ModalTable;
