import React from 'react'
import { BiEnvelope, BiPhone, BiUser } from 'react-icons/bi'
import { LiaMapMarkerAltSolid } from "react-icons/lia";

const Information = () => {
  return (
    <>
    <div className='tp-order-inner'>
        <div class="profile__info p-4">
            <h3 class="profile__info-title">Personal Details</h3>
            <div class="profile__info-content">
            <form action="#">
                <div class="row">
                    <div class="col-xxl-6 col-md-6">
                        <div class="profile__input-box">
                        <div class="profile__input">
                            <input type="text" placeholder="Enter your username" value="Shahnewaz Sakil" />
                            <span>
                                <BiUser/>
                            </span>
                        </div>
                        </div>
                    </div>
                    
                    <div class="col-xxl-6 col-md-6">
                        <div class="profile__input-box">
                        <div class="profile__input">
                            <input type="email" placeholder="Enter your email" value="example@mail.com" />
                            <span>
                                <BiEnvelope/>                                           
                            </span>
                        </div>
                        </div>
                    </div>

                    <div class="col-xxl-6 col-md-6">
                        <div class="profile__input-box">
                        <div class="profile__input">
                            <input type="text" placeholder="Enter your number" value="0123 456 7889" />
                            <span>
                                <BiPhone/>                                                                                       
                            </span>
                        </div>
                        </div>
                    </div>
                    <div class="col-xxl-6 col-md-6">
                        <div class="profile__input-box">
                        <div class="profile__input">
                            <select className='nice-select'>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>
                            </select>
                        </div>
                        </div>
                    </div>
                    <div class="col-xxl-12">
                        <div class="profile__input-box">
                        <div class="profile__input">
                            <input type="text" placeholder="Enter your address" value="3304 Randall Drive" />
                            <span>
                                <LiaMapMarkerAltSolid/>
                            </span>
                        </div>
                        </div>
                    </div>

                    <div class="col-xxl-12">
                        <div class="profile__input-box">
                        <div class="profile__input">
                            <textarea placeholder="Enter your bio">Hi there, this is my bio...</textarea>
                        </div>
                        </div>
                    </div>
                    <div class="col-xxl-12">
                        <div class="profile__btn">
                        <button type="submit" class="tp-btn">Update Profile</button>
                        </div>
                    </div>
                </div>
            </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Information
