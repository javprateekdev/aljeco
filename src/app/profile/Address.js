import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiUrl, getToken } from "../api";

const Address = () => {

  const token = getToken();
  const [user, setUser] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState({
    addressLine1: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [showAddAddress, setShowAddAddress] = useState(false);
  const [errors, setErrors] = useState({});

  const getUser = async () => {
    if (!token) return;
    const response = await axios.get(`${apiUrl}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUser(response.data);
    setAddresses(response.data.Address || []);
  };

  useEffect(() => {
    getUser();
  }, [token]);

  const validateAddress = () => {
    const newErrors = {};
    if (!newAddress.addressLine1) newErrors.addressLine1 = "Address Line 1 is required.";
    if (!newAddress.city) newErrors.city = "City is required.";
    if (!newAddress.state) newErrors.state = "State is required.";
    if (!newAddress.postalCode) newErrors.postalCode = "Postal Code is required.";
    if (!newAddress.country) newErrors.country = "Country is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddNewAddress = async () => {
    if (!validateAddress()) return; // Validate before proceeding

    try {
      const response = await axios.post(
        `${apiUrl}/users/${user.id}/address`,
        { ...newAddress, userId: user.id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAddresses([...addresses, response.data]);
      setNewAddress({
        addressLine1: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
      });
      setShowAddAddress(false); // Hide the form after successful submission
    } catch (error) {
      console.error("Error adding address:", error);
    }
  };

  return (
    <div className="tp-order-inner">
      <div className="profile__address p-4">
        <h4>Addresses</h4>
        <div className="tp-address-list">
          {addresses && addresses.length > 0 ? (
            addresses.map((address) => (
              <div key={address.id} className="custom-address-container">
                <div className="address-details">
                  <div>
                    <div className="name">
                      <span>{`${user.firstname} ${user.lastname}`}</span>
                    </div>
                    <div>
                      {address.addressLine1}, {address.city} {address.state} - {address.postalCode}{" "}
                      {address.country}
                    </div>
                  </div>
                  {/* <div>
                    <button
                      className={`btn ${selectedAddress === address.id ? "btn-success" : "btn-primary"}`}
                      onClick={() => setSelectedAddress(address.id)}
                    >
                      Deliver here
                    </button>
                  </div> */}
                </div>
              </div>
            ))
          ) : (
            <p className="text-danger">No Addresses Found. Add An Address Below</p>
          )}
        </div>

        <button
          className="btn btn-primary"
          onClick={() => setShowAddAddress((prev) => !prev)}
        >
          {showAddAddress ? "Cancel" : "+ Add New Address"}
        </button>

        {showAddAddress && (
          <div className="tp-checkout-bill-form mt-2">
            <h4>Add New Address</h4>
            <form>
              <div className="tp-checkout-bill-inner">
                <div className="row">
                  <div className="col-md-12">
                    <div className="tp-checkout-input">
                      <label>Address Line 1</label>
                      <input
                        type="text"
                        placeholder="Address Line 1"
                        value={newAddress.addressLine1}
                        onChange={(e) => setNewAddress({ ...newAddress, addressLine1: e.target.value })}
                      />
                      {errors.addressLine1 && <span className="text-danger">{errors.addressLine1}</span>}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="tp-checkout-input">
                      <label>City</label>
                      <input
                        type="text"
                        placeholder="City"
                        value={newAddress.city}
                        onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                      />
                      {errors.city && <span className="text-danger">{errors.city}</span>}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="tp-checkout-input">
                      <label>State</label>
                      <input
                        type="text"
                        placeholder="State"
                        value={newAddress.state}
                        onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                      />
                      {errors.state && <span className="text-danger">{errors.state}</span>}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="tp-checkout-input">
                      <label>Postal Code</label>
                      <input
                        type="text"
                        placeholder="Postal Code"
                        value={newAddress.postalCode}
                        onChange={(e) => setNewAddress({ ...newAddress, postalCode: e.target.value })}
                      />
                      {errors.postalCode && <span className="text-danger">{errors.postalCode}</span>}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="tp-checkout-input">
                      <label>Country</label>
                      <input
                        type="text"
                        placeholder="Country"
                        value={newAddress.country}
                        onChange={(e) => setNewAddress({ ...newAddress, country: e.target.value })}
                      />
                      {errors.country && <span className="text-danger">{errors.country}</span>}
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="btn btn-primary"
                type="button"
                onClick={handleAddNewAddress}
              >
                Add Address
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Address;
