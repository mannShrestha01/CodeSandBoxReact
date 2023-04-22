const Card = (props) => {
  return (
    <div className="Child">
      hello
      <Products chocolate={props.chocolate} />
    </div>
  );
};

const Products = (props) => {
  return <div className="GrandChild">pressure cooker</div>;
};

export default Card;
