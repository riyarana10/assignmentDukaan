import "./product.css";
import privacy from "../../assets/products/privacy.png"
import terms from "../../assets/products/terms-conditions.png"
import domain from "../../assets/products/domain-name.png"
import invoice from "../../assets/products/invoice.png"
function Product() {
  return (
    <div className = "card">
        <h1>Try our other free products</h1>
        <div className = "cardelement">
            <div className = "card-display">
                <img src = {privacy}/>
                <h5>Privacy Policy Generator</h5>
                <p>Stock your store with 100s of products and start selling 
                to customers in minutes, without the hassle of inventory or packaging.</p>
            </div>
            <div className = "card-display">
                <img src = {terms}/>
                <h5>Terms & Conditions Generator</h5>
                <p>Stock your store with 100s of products and start selling to 
                customers in minutes, without the hassle of inventory or packaging.</p>
            </div>
            <div className = "card-display">
                <img src = {domain}/>
                <h5>Domain Name Generator</h5>
                <p>Stock your store with 100s of products and start selling to customers
                 in minutes, without the hassle of inventory or packaging.</p>
            </div>
        </div>
        <div className = "cardelement">
            <div className = "card-display">
                <img src = {invoice}/>
                <h5>Invoice Generator</h5>
                <p>Stock your store with 100s of products and start selling to customers 
                in minutes, without the hassle of inventory or packaging.</p>
            </div>
        </div>
    </div>
  );
}

export default Product;