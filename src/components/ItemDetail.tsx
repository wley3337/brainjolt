import React from "react";
import "./ItemDetail.css";
import { Iitem } from "../enumerables/selectionArray";

interface IitemDetail {
  item: Iitem;
}

const ItemDetail: React.FC<IitemDetail> = ({
  item: { heading, imgUrl, alt }
}) => {
  return (
    <div className="item-detail">
      <p className="title">
        <strong>{heading}</strong>
      </p>
      <span className="img-wrapper">
        <img className="img" src={`${imgUrl}`} alt={alt} />
      </span>
      <p className="credit">viw: Reddit</p>
    </div>
  );
};

export default ItemDetail;
