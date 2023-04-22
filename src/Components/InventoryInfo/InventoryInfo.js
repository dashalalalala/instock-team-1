import "./InventoryInfo.scss";

function InventoryInfo({ currentInventory }) {
  return (
    <div className="inventory-info">
      <div className="inventory-info__container inventory-info__container--ie">
        <div className="inventory-info__property-box inventory-info__property-box--description">
          <h4 className="inventory-info__title">ITEM DESCRIPTION:</h4>
          <p className="inventory-info__body inventory-info__body--truncated">
            {currentInventory.description}
          </p>
        </div>
        <div className="inventory-info__property-box">
          <h4 className="inventory-info__title">CATEGORY:</h4>
          <p className="inventory-info__body">{currentInventory.category}</p>
        </div>
      </div>

      <div className="inventory-info__container inventory-info__container--swq">
        <div className="inventory-info__property-container">
          <div className="inventory-info__property-box inventory-info__property-box--description">
            <h4 className="inventory-info__title">STATUS:</h4>
            <p
              className={`inventory-info__body ${
                currentInventory.status === "In Stock"
                  ? "inStock-status"
                  : "outOfStock-status"
              }`}
            >
              {currentInventory.status}
            </p>
          </div>
          <div className="inventory-info__property-box inventory-info__property-box--description">
            <h4 className="inventory-info__title">WAREHOUSE:</h4>
            <p className="inventory-info__body">
              {currentInventory.warehouse_name}
            </p>
          </div>
        </div>

        <div className="inventory-info__property-box">
          <h4 className="inventory-info__title">QUANTITY:</h4>
          <p className="inventory-info__body">{currentInventory.quantity}</p>
        </div>
      </div>
    </div>
  );
}

export default InventoryInfo;
