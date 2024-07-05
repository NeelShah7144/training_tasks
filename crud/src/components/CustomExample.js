import ProductsCart from './ProductsCart';
import useProductList from '../hooks/useProductList';

function CustomExample() {
 const myData = useProductList();
  return (
    <div className='row'>
      {myData.length > 0 ? myData.map((post) => {
        const { id, title, price, description, category, image } = post;
        return (  
          <div className='col-md-4' key={id}>
            <ProductsCart Id= {id} title={title} price={price} desc={description} category={category} imageUrl={image} />
          </div>
        );
      }) : <h1 style={{color: "white"}}>Loading....</h1>}
    </div>
  );
}

export default CustomExample;
