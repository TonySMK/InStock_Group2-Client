import "./InventoryDetails.scss";
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import leftChevron from "../../Assets/Icons/arrow_back-24px.svg";

function InventoryDetails() {
  const navigate = useNavigate();
  const [compstate, setCompState] = useState(false);
  const { id } = useParams();
  console.log(id);

  return (
    <>
      {compstate ? (
        <section className="parentwrapper">Loading Page...</section>
      ) : (
        <>
          <div className="parentwrapper">
            <section className="detailpageheader">
              <button className="backbuttonn" onClick={() => navigate("/")}>
                <img src={leftChevron} alt="Previous page icon" />
              </button>
            </section>
          </div>
        </>
      )}
    </>
  );
}

export default InventoryDetails;
