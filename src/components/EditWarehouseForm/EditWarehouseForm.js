import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiUrl } from "../../utils";
import "./EditWarehouseForm.scss";

const EditWarehouseForm = (details) => {
  const [warehouseName, setwarehouseName] = useState(
    details.warehouseDetails.warehouse_name
  );
  const [address, setAddress] = useState(details.warehouseDetails.address);
  const [city, setCity] = useState(details.warehouseDetails.city);
  const [country, setCountry] = useState(details.warehouseDetails.country);
  const [contactName, setContactName] = useState(
    details.warehouseDetails.contact_name
  );
  const [role, setRole] = useState(details.warehouseDetails.contact_position);
  const [phoneNumber, setPhoneNumber] = useState(
    details.warehouseDetails.contact_phone
  );
  const [email, setEmail] = useState(details.warehouseDetails.contact_email);
  const navigate = useNavigate();
  const warehouseId = useParams();

  const isFormValid =
    warehouseName &&
    address &&
    city &&
    country &&
    contactName &&
    role &&
    phoneNumber &&
    email;

  const handleWarehouseNameChange = (event) => {
    setwarehouseName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleContactNameChange = (event) => {
    setContactName(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isFormValid) {
      axios
        .put(`${apiUrl}/${warehouseId.warehouseId}`, {
          warehouse_name: warehouseName,
          address: address,
          city: city,
          country: country,
          contact_name: contactName,
          contact_position: role,
          contact_phone: phoneNumber,
          contact_email: email,
        })
        .then((result) => {
          if (result.status === 200) {
            navigate("/warehouses");
          }
          event.target.reset();
        })
        .catch((error) => {
          console.error(error);
        });
      alert("Warehouse Updated");
    } else {
      alert("Failed to Update Warehouse");
    }
  };
  return (
    <>
      <div className="details">
        <form onSubmit={handleSubmit}>
          <div className="details__form">
            <div className="details__form-warehouse">
              <h2 className="details__form-subheader">Warehouse Details</h2>
              <label className="details__form-container">
                <h6 className="details__form-title">Warehouse Name</h6>
                <input
                  className="details__form-input"
                  type="text"
                  name="Warehouse Name"
                  value={warehouseName}
                  placeholder="Washington"
                  onChange={handleWarehouseNameChange}
                />
              </label>

              <label className="details__form-container">
                <h6 className="details__form-title">Street Address</h6>
                <input
                  className="details__form-input"
                  type="text"
                  name="Street Address"
                  value={address}
                  placeholder="33 Pearl Street SW"
                  onChange={handleAddressChange}
                />
              </label>

              <label className="details__form-container">
                <h6 className="details__form-title">City</h6>
                <input
                  className="details__form-input"
                  type="text"
                  name="City"
                  value={city}
                  placeholder="Washington"
                  onChange={handleCityChange}
                />
              </label>

              <label className="details__form-container">
                <h6 className="details__form-title">Country</h6>
                <input
                  className="details__form-input"
                  type="text"
                  name="Country"
                  value={country}
                  placeholder="USA"
                  onChange={handleCountryChange}
                />
              </label>
            </div>
            <div className="details__form-contact">
              <h2 className="details__form-subheader">Contact Details</h2>

              <label className="details__form-container">
                <h6 className="details__form-title">Contact Name</h6>
                <input
                  className="details__form-input"
                  type="text"
                  name="Contact Name"
                  value={contactName}
                  placeholder="Graeme Lyon"
                  onChange={handleContactNameChange}
                />
              </label>

              <label className="details__form-container">
                <h6 className="details__form-title">Position</h6>
                <input
                  className="details__form-input"
                  type="text"
                  name="Position"
                  value={role}
                  placeholder="Warehouse Manager"
                  onChange={handleRoleChange}
                />
              </label>

              <label className="details__form-container">
                <h6 className="details__form-title">Phone Number</h6>
                <input
                  className="details__form-input"
                  type="text"
                  name="Phone Number"
                  value={phoneNumber}
                  placeholder="+1 (647) 504-0911"
                  onChange={handlePhoneNumberChange}
                />
              </label>

              <label className="details__form-container">
                <h6 className="details__form-title">Email</h6>
                <input
                  className="details__form-input"
                  type="text"
                  name="Email"
                  value={email}
                  placeholder="glyon@instock.com"
                  onChange={handleEmailChange}
                />
              </label>
            </div>
          </div>
          <div className="details__button-container">
            <button className="details__cancel">Cancel</button>
            <button className="details__save">Save</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditWarehouseForm;
