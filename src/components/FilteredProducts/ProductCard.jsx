import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { singleProduct } from "../../features/slice/ProductsSlice";
import { Link, useParams } from "react-router-dom";

function ProductCard({ id, name, text, image, price, colors }) {
  const dispatch = useDispatch();
  const { type } = useParams();
  return (
    <Link to={`/filteredProducts/${type}/` + id}>
      <Card className="w-96" onClick={() => dispatch(singleProduct(id))}>
        <CardHeader shadow={false} floated={false} className="h-96">
          <img src={image} alt="any" className="h-full w-full object-cover" />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" className="font-medium">
              {name}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              {price}
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            {text}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 ">
          <Typography
            variant="small"
            color="gray"
            className="flex justify-center"
          >
            {colors?.map((color, index) => {
              return (
                <i
                  className="fas fa-map-marker-alt fa-sm mt-[3px] p-2 rounded-full mr-4 "
                  key={index}
                  style={{ backgroundColor: color }}
                ></i>
              );
            })}
          </Typography>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default ProductCard;
