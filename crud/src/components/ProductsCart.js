import React from "react";

function ProductsCart(props) {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  const truncatedTitle = truncateText(props.title, 20); // Truncate to 20 characters
  const truncatedDesc = truncateText(props.desc, 50); // Truncate to 50 characters

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.imageUrl} className="card-img-top" alt={props.title} />
        <div className="card-body">
          <h5 className="card-title">{truncatedTitle}</h5>
          <p className="card-text">
            {truncatedDesc}
          </p>
          <p>{props.category}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}

export default ProductsCart;
