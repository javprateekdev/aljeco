import React from 'react'

const ChangePassword = () => {
  return (
    <>
    <div className='tp-order-inner'>
        <div className="profile__password p-4">
            <form action="#">
            <div className="row">
                <div className="col-xxl-12">
                    <div className="tp-profile-input-box">
                        <div className="tp-contact-input">
                        <input name="old_pass" id="old_pass" type="password" />
                        </div>
                        <div className="tp-profile-input-title">
                        <label for="old_pass">Old Password</label>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-6 col-md-6">
                    <div className="tp-profile-input-box">
                        <div className="tp-profile-input">
                        <input name="new_pass" id="new_pass" type="password" />
                        </div>
                        <div className="tp-profile-input-title">
                        <label for="new_pass">New Password</label>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-6 col-md-6">
                    <div className="tp-profile-input-box">
                        <div className="tp-profile-input">
                        <input name="con_new_pass" id="con_new_pass" type="password" />
                        </div>
                        <div className="tp-profile-input-title">
                        <label for="con_new_pass">Confirm Password</label>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-6 col-md-6">
                    <div className="profile__btn">
                        <button type="submit" className="tp-btn">Update</button>
                    </div>
                </div>
            </div>
            </form>
        </div>
        </div>
    </>
  )
}

export default ChangePassword
