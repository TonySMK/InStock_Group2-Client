import "./StockStatusStyles.scss";

function StockStatus({ status }) {
  if (status === "In Stock") {
    return (
      <div className="statuslabelcontent instockstatus">
        <div className="instockstatus__status">{status}</div>
      </div>
    );
  } else {
    return (
      <div className="statuslabelcontent outofstockstatus">
        <div className="outofstockstatus__status">{status}</div>
      </div>
    );
  }
}

export default StockStatus;
