import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../../utils";
import "./AddWarehousesForm.scss";

const AddWarehousesForm = () => {
  const [warehouseName, setwarehouseName] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [contactName, setContactName] = useState();
  const [role, setRole] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();

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
        .post(`${apiUrl}`, {
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
          }
          event.target.reset();
        })
        .catch((error) => {
          console.error(error);
        });
      alert("Warehouse Added");
      navigate("/warehouses");
    } else {
      alert("Failed to Add Warehouse");
    }
  };
  return (
    <div className="add-details">
      <form onSubmit={handleSubmit}>
        <div className="add-details__form">
          <div className="add-details__form-warehouse">
            <h2 className="add-details__form-subheader">Warehouse Details</h2>
            <label className="add-details__form-container">
              <h6 className="add-details__form-title">Warehouse Name</h6>
              <input
                className="add-details__form-input"
                type="text"
                name="Warehouse Name"
                placeholder="Washington"
                onChange={handleWarehouseNameChange}
              />
            </label>

            <label className="add-details__form-container">
              <h6 className="add-details__form-title">Street Address</h6>
              <input
                className="add-details__form-input"
                type="text"
                name="Street Address"
                placeholder="33 Pearl Street SW"
                onChange={handleAddressChange}
              />
            </label>

            <label className="add-details__form-container">
              <h6 className="add-details__form-title">City</h6>
              <input
                className="add-details__form-input"
                type="text"
                name="City"
                placeholder="Washington"
                onChange={handleCityChange}
              />
            </label>

            <label className="add-details__form-container">
              <h6 className="add-details__form-title">Country</h6>
              <input
                className="add-details__form-input"
                type="text"
                name="Country"
                placeholder="USA"
                onChange={handleCountryChange}
              />
            </label>
          </div>
          <div className="add-details__form-contact">
            <h2 className="add-details__form-subheader">Contact Details</h2>

            <label className="add-details__form-container">
              <h6 className="add-details__form-title">Contact Name</h6>
              <input
                className="add-details__form-input"
                type="text"
                name="Contact Name"
                placeholder="Graeme Lyon"
                onChange={handleContactNameChange}
              />
            </label>

            <label className="add-details__form-container">
              <h6 className="add-details__form-title">Position</h6>
              <input
                className="add-details__form-input"
                type="text"
                name="Position"
                placeholder="Warehouse Manager"
                onChange={handleRoleChange}
              />
            </label>

            <label className="add-details__form-container">
              <h6 className="add-details__form-title">Phone Number</h6>
              <input
                className="add-details__form-input"
                type="text"
                name="Phone Number"
                placeholder="+1 (647) 504-0911"
                onChange={handlePhoneNumberChange}
              />
            </label>

            <label className="add-details__form-container">
              <h6 className="add-details__form-title">Email</h6>
              <input
                className="add-details__form-input"
                type="text"
                name="Email"
                placeholder="glyon@instock.com"
                onChange={handleEmailChange}
              />
            </label>
          </div>
        </div>
        <div className="add-details__button-container">
          <button className="add-details__cancel">Cancel</button>
          <button className="add-details__add">+ Add Warehouse</button>
        </div>
      </form>
    </div>
  );
};

export default AddWarehousesForm;
