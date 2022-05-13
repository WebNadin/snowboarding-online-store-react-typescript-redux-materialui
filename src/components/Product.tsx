import {useParams} from "react-router-dom";
import Container from "@mui/material/Container";

const Product = () => {

  let {id} = useParams<{id: string}>();
  return (
    <Container maxWidth="xl">
      <h1>Product page with id = {id}</h1>
    </Container>
  )
}

export default Product;