import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { inventoriesUrl } from "../../utils";
import "./AddInventoryItemForm.scss";
import { Link } from "react-router-dom";
import errorIcon from "../../assets/icons/error-24px.svg";

function AddInventoryItemForm(list) {
	const navigate = useNavigate();

	const [inStock, setInStock] = useState("In Stock");
	const [itemName, setItemName] = useState();
	const [description, setDescription] = useState();
	const [category, setCategory] = useState();
	const [quantity, setQuantity] = useState();
	const [warehouse, setWarehouse] = useState();

	const categoriesList = [
		"Gear",
		"Accessories",
		"Electronics",
		"Health",
		"Apparel",
	];

	function renderFormFieldError(error, type) {
		if (type === "quantity" && inStock === "Out of Stock") {
			return null;
		} else if (error === true) {
			return (
				<div className="inventoryForm__error">
					<img
						src={errorIcon}
						alt="error"
						className="inventoryForm__error--icon"
					></img>
					<span className="inventoryForm__error--message">
						This field is required
					</span>
				</div>
			);
		} else {
			return null;
		}
	}

	function renderQuantityForm(inStock) {
		if (inStock === "Out of Stock") {
			return null;
		} else {
			return (
				<label className="inventoryForm__form-container">
					<h6 className="inventoryForm__form-title">Quantity</h6>
					<input
						className={getQuantityInputClasses()}
						type="text"
						placeholder="0"
						id="quantityInput"
						onChange={quantityChangeHandler}
					/>
				</label>
			);
		}
	}

	function renderWarehouseListOptions() {
		if (list.list === undefined) {
			return "Loading";
		} else {
			const warehouseList = list.list.map(
				(warehouse) => warehouse.warehouse_name
			);
			return (
				<select
					className={getWarehouseInputClasses()}
					id="warehouseSelect"
					placeholder="Please Select"
				>
					<option value="" disabled selected hidden>
						Please select
					</option>
					{warehouseList.map((element, key) => {
						return (
							<option key={key} value={element}>
								{element}
							</option>
						);
					})}
				</select>
			);
		}
	}

	function renderCategoryList(categoriesList) {
		return (
			<select
				className={getCategoriesInputClasses()}
				id="categoriesSelect"
				placeholder="Please Select"
			>
				<option value="" disabled selected hidden>
					Please select
				</option>
				{categoriesList.map((element, key) => {
					return (
						<option key={key} value={element}>
							{element}
						</option>
					);
				})}
			</select>
		);
	}

	const handleStatusChange = (event) => {
		setInStock(event.target.value);
	};

	const itemNameHandler = (event) => {
		setItemName(event.target.value);
	};

	const descriptionChangeHandler = (event) => {
		setDescription(event.target.value);
	};

	const categoryChangeHandler = (event) => {
		setCategory(event.target.value);
	};

	const quantityChangeHandler = (event) => {
		setQuantity(event.target.value);
	};

	function findWarehouseId(warehouseName, warehouseList) {
		for (let i = 0; i < warehouseList.length; i++) {
			if (warehouseList[i].warehouse_name === warehouseName) {
				return warehouseList[i].id;
			}
		}
		return null;
	}

	//VALIDATION CLASSES

	const [itemNameError, setItemNameError] = useState(false);
	const [descriptionInputError, setDescriptionInputError] = useState(false);
	const [quantityInputError, setQuantityInputError] = useState(false);
	const [categoryInputError, setCategoryInputError] = useState(false);
	const [warehouseInputError, setWarehouseInputError] = useState(false);

	function getItemNameInputClasses() {
		if (itemNameError === false) {
			return "inventoryForm__form-input";
		} else {
			return "inventoryForm__form-input inventoryForm__form-input-error";
		}
	}

	function getDescriptionInputClasses() {
		if (descriptionInputError === false) {
			return "inventoryForm__form-input inventoryForm__form-description";
		} else {
			return "inventoryForm__form-input inventoryForm__form-description inventoryForm__form-input-error";
		}
	}

	function getQuantityInputClasses() {
		if (quantityInputError === false) {
			return "inventoryForm__form-input";
		} else {
			return "inventoryForm__form-input inventoryForm__form-input-error";
		}
	}

	function getCategoriesInputClasses() {
		if (categoryInputError === false) {
			return "inventoryForm__form-input inventoryForm__form--selectionAdd";
		} else {
			return "inventoryForm__form-input inventoryForm__form-input-error inventoryForm__form--selectionAdd";
		}
	}

	function getWarehouseInputClasses() {
		if (warehouseInputError === false) {
			return "inventoryForm__form-input inventoryForm__form--selectionAdd";
		} else {
			return "inventoryForm__form-input inventoryForm__form-input-error inventoryForm__form--selectionAdd";
		}
	}

	const handleSubmit = (event) => {
		event.preventDefault();

		const itemNameInput = event.target.itemNameInput.value;
		const descriptionInput = event.target.descriptionInput.value;
		const categoryInput = event.target.categoriesSelect.value;
		const statusInput = inStock;
		var quantityInput = "0";
		const warehouseInput = event.target.warehouseSelect.value;

		if (itemNameInput === "") {
			setItemNameError(true);
		} else {
			setItemNameError(false);
		}

		if (descriptionInput === "") {
			setDescriptionInputError(true);
		} else {
			setDescriptionInputError(false);
		}

		if (categoryInput === "") {
			setCategoryInputError(true);
		} else {
			setCategoryInputError(false);
		}

		if (inStock === "Out of Stock") {
			quantityInput = "0";
		} else if (
			(event.target.quantityInput.value === "0" ||
				event.target.quantityInput.value === "") &&
			inStock === "In Stock"
		) {
			setQuantityInputError(true);
			alert("Your stock status and quantity do not line up, please update");
		} else {
			setQuantityInputError(false);
			quantityInput = event.target.quantityInput.value;
		}

		if (warehouseInput === "") {
			setWarehouseInputError(true);
		} else {
			setWarehouseInputError(false);
		}

		const warehouse = event.target.warehouseSelect.value;

		const inventoryItemData = {
			item_name: itemNameInput,
			description: descriptionInput,
			category: categoryInput,
			status: statusInput,
			quantity: quantityInput,
			warehouse_id: findWarehouseId(warehouse, list.list),
		};

		console.log(inventoryItemData)

		if (
			!itemNameInput ||
			!descriptionInput ||
			!categoryInput ||
			!statusInput ||
			!warehouse
		) {
			alert(
				"You are missing a field in the form, make sure everything is filled out"
			);
		} else {
			axios
				.post(`${inventoriesUrl}`, { 
					item_name: itemNameInput,
					description: descriptionInput,
					category: categoryInput,
					status: statusInput,
					quantity: quantityInput,
					warehouse_id: findWarehouseId(warehouse, list.list),
				})
				.then((result) => {
						console.log("GO YOU WENCH")
						event.target.reset();
						alert("Inventory Item Added");
						navigate('/inventories');
					
				})
				.catch((error) => {
					alert("There was an issue adding your inventory item");
					console.error(error);
				});
		}
	};

	return (
		<>
			<div className="inventoryForm">
				<form onSubmit={handleSubmit}>
					<div className="inventoryForm__form">
						<div className="inventoryForm__form-warehouse">
							<h2 className="inventoryForm__form-subheader">Item Details</h2>

							<label className="inventoryForm__form-container">Item Name</label>
							<input
								className={getItemNameInputClasses()}
								type="text"
								name="Warehouse Name"
								id="itemNameInput"
								placeholder="Item Name"
								onChange={itemNameHandler}
							/>
							{renderFormFieldError(itemNameError, "input")}
							<label className="inventoryForm__form-container">
								Description
							</label>
							<textarea
								className={getDescriptionInputClasses()}
								type="textarea"
								name="Street Address"
								id="descriptionInput"
								placeholder="Please enter a brief item description..."
								onChange={descriptionChangeHandler}
							/>
							{renderFormFieldError(descriptionInputError, "description")}
							<label className="inventoryForm__form-container">Category</label>
							{renderCategoryList(categoriesList)}
							{renderFormFieldError(categoryInputError, "category")}
						</div>
						<div className="inventoryForm__form-contact">
							<h2 className="inventoryForm__form-subheader">
								Item Availabilty
							</h2>
							<h6 className="inventoryForm__form-title">Status</h6>
							<div className="inventoryForm__form--radioContainer">
								<input
									className="inventoryForm__form--radio"
									type="radio"
									name="Stock"
									id="InStock"
									value="In Stock"
									checked={inStock === "In Stock"}
									onChange={handleStatusChange}
								/>
								<label
									htmlFor="InStock"
									className="inventoryForm__form--radio-title"
								>
									In Stock
								</label>
								<input
									className="inventoryForm__form--radio"
									type="radio"
									name="Stock"
									id="OutOfStock"
									value="Out of Stock"
									checked={inStock === "Out of Stock"}
									onChange={handleStatusChange}
								/>
								<label
									htmlFor="OutOfStock"
									className="inventoryForm__form--radio-title"
								>
									Out of Stock
								</label>
							</div>
							{renderQuantityForm(inStock)}
							{renderFormFieldError(quantityInputError, "quantity")}
							<h6 className="inventoryForm__form-title">Warehouse</h6>
							{renderWarehouseListOptions()}
							{renderFormFieldError(warehouseInputError, "warehouse")}
						</div>
					</div>
					<div className="inventoryForm__button-container">
						<Link to="/inventories" className="inventoryForm__cancel">
							<button className="inventoryForm__cancel--text">Cancel</button>
						</Link>
						<button className="inventoryForm__save">Save</button>
					</div>
				</form>
			</div>
		</>
	);
};


export default AddInventoryItemForm;
