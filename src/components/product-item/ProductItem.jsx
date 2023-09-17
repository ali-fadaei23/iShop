import "./ProductItem.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const ProductItem = ({ product, onDelete }) => {
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
        <Button
          className="btn-delete"
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={() => {}}
        >
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductItem;
