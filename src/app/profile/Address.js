import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import Loader from "../utils/loader";
import axios from "axios";
import { apiUrl } from "../api";
const Address = () => {
  const { token } = useAuth();
  const [user, setUser] = useState(null);
  const [address, setAddressCount] = useState(0);

  console.log("user", user);
  const getUser = async (u) => {
    if (!token) return null;
    const response = await axios.get(`${apiUrl}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUser(response.data);
    setAddressCount(response.data.Address || []);
  };

  useEffect(() => {
    getUser();
  }, [token]);

  // Default selected address index
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);

  const handleAddressChange = (event) => {
    setSelectedAddressIndex(Number(event.target.value));
  };

  // // If there is no user or no addresses, show the loader or fallback content
  // if (!user || !user.Address || user.Address.length === 0) {
  //   return <Loader />;
  // }

  // Get the selected address based on the selectedAddressIndex
  const selectedAddress = address[selectedAddressIndex] || [];
  console.log("selectedAddress", selectedAddress);
  return (
    <>
      <div className="tp-order-inner">
        <div className="profile__address p-4">
          <div className="row">
            <div className="col-md-12">
              <div className="profile__address-item d-sm-flex align-items-start">
                <div className="profile__address-icon">
                  <span>
                    <svg viewBox="0 0 64 64">{/* SVG icon */}</svg>
                  </span>
                </div>
                <div className="profile__address-content">
                  <div className="d-lg-flex gap-2 align-items-center profile__address-selector mb-30">
                    {address &&
                      address.map((address, index) => (
                        <label key={index} className="d-flex">
                          <input
                            type="radio"
                            name="address"
                            value={index}
                            checked={selectedAddressIndex === index}
                            onChange={handleAddressChange}
                          />
                          {` ${address.addressLine1 || `Address ${index + 1}`}`}

                          
                        </label>
                      ))}
                  </div>
                  <h3 className="profile__address-title">
                    {selectedAddress.addressLine1 || "Address"}
                  </h3>
                  <p>
                    <span>Street:</span> {selectedAddress.addressLine1}
                  </p>
                  {/* { { selectedAddress.addressLine2 && (
                    <p>
                      <span>Address Line 2:</span>{" "}
                      {selectedAddress.addressLine2}
                    </p> 
                  )} } */}
                  <p>
                    <span>City:</span> {selectedAddress.city}{" "}
                  </p>
                  <p>
                    <span>State/province/area:</span> {selectedAddress.state}
                  </p>
                  <p>
                    <span>Postal Code:</span> {selectedAddress.postalCode}
                  </p>
                  <p>
                    {" "}
                    <span>Country:</span> {selectedAddress.country}{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
