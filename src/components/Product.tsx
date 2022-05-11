import {useParams} from "react-router-dom";

const Product = () => {

  let {id} = useParams<{id: string}>();
  return (
    <div>
      `Product page with id = {id}`
    </div>
  )
}

export default Product;