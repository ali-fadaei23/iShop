import "./ProductItem.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
// import { ButtonGroup } from "@mui/material";
import Badge from "@mui/material/Badge";
import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import DeleteIcon from "@mui/icons-material/Delete";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const ProductItem = ({ product, onAdd, handleCount }) => {
  return (
    <Card className="card card-product" sx={{ marginBottom: 20, width: 300 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        sx={{ width: 200 }}
        image={product.image}
        title={product.title}
      />
      <CardContent className="text">
        <Typography
          gutterBottom
          variant="body1"
          sx={{ color: "darkblue" }}
          component="div"
        >
          {product.title}
        </Typography>
        <Typography
          gutterBottom
          variant="caption"
          sx={{ color: "CaptionText" }}
          component="div"
        >
          {product.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography
          gutterBottom
          variant="h6"
          sx={{ color: "tomato", marginTop: 5 }}
          component="div"
        >
          {product.price + " $"}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <ButtonGroup>
            <Button
              aria-label="reduce"
              onClick={() => {
                setCount(Math.max(count - 1, 0));
              }}
            >
              <RemoveIcon fontSize="small" />
            </Button>
            <Button
              aria-label="increase"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              <AddIcon fontSize="small" />
            </Button>
          </ButtonGroup> */}
        <Button
          className="btn-delete"
          variant="contained"
          color="error"
          startIcon={<AddIcon fontSize="small" />}
          onClick={handleCount}
        >
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductItem;
