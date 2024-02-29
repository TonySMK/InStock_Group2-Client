import "./StockStatusStyles.scss";

function StockStatus({ status }) {
  if (status === "In Stock") {
    return (
      <div className="contentpanel__value statuslabel__content instockstatus">
        <div className="instockstatus__status">{status}</div>
      </div>
    );
  } else {
    return (
      <div className="contentpanel__value statuslabel__content outofstockstatus">
        <div className="outofstockstatus__status">{status}</div>
      </div>
    );
  }
}

export default StockStatus;
