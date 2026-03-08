/* eslint-disable react/prop-types */
export default function Product({ propsObj }) {
  if (!propsObj.isActive) return null;

  return (
    <div className="card shadow-sm">
      <img
        className="card-img-top p-2 p-md-3 border-bottom"
        src={`https://picsum.photos/id/${propsObj.image}/200/300`}
        alt=""
      />
      <div className="card-body">
        <h2 className="card-title">{propsObj.title}</h2>
        <p className="card-text">{propsObj.description}</p>
        <span className={"badge text-bg-success"}>{`${propsObj.price}TL`}</span>
      </div>
    </div>
  );
}
