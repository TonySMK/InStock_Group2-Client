import "./InventoryListStyles.scss";

function InventoryListComp({ object }) {
  // {object} is the array of objects that the this component will map
  // and render out

  // remember to stop propigation for the delete and edit buttons
  return (
    <>
      <div classname="parentwrapper">
        <div classname="top">
          <div classname="title"></div>
          <div classname="searchbar"></div>
          <div classname="addinventory"></div>
        </div>

        <div classname="bottom">
          <button onclick>
            <div classname="bottom__left">
              <div classname="bottom__left__item"></div>
              <div classname="bottom__left__category"></div>
            </div>

            <div classname="bottom__right">
              <div classname="bottom__right__status"></div>
              <div classname="bottom__right__quantity"></div>
              <div classname="bottom__right__warehouselocation"></div>
            </div>

            <button classname="deleteitem"></button>
            <button classname="edititem"></button>
          </button>
        </div>
      </div>
    </>
  );
}

export default InventoryListComp;
