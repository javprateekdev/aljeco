"use client"
import React, { useState } from 'react'
import { RiMenu3Line } from 'react-icons/ri'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';

const MobileMenus = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleLinkClick = () => {
        handleClose();
    }

    return (
        <>
            <div className="tp-mobile-item text-center">
                <button className="tp-mobile-item-btn tp-offcanvas-open-btn" onClick={handleShow}>
                    <RiMenu3Line />
                    <span>Menu</span>
                </button>
            </div>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                    <Link className='d-flex align-items-center gap-2' href="/">
                        <img  src="/assets/img/logo/logo.png"  alt="logo" width={45}  height={45} /> 
                        <span><strong>Aljeco</strong> </span>
                    </Link>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="main-menu menu-style-2">
                        {/* <Nav className="flex-column">
                            <Link href="/shopcat" onClick={handleLinkClick}>Men</Link>
                            <Link href="/shopcat" onClick={handleLinkClick}>Women</Link>
                        </Nav> */}
                        <div className='mobilemenus ps-4'>
                            <div className='d-flex gap-2 mb-3'>
                                <img src="https://cdn.caratlane.com/media/static/images/Myaccount/1.png" alt="" />
                                <div className="card">
                                    <div className="card-body">
                                        <h6>Your Recently Viewed</h6>
                                        <p>Have a look at your Recently viewed section</p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex gap-2 mb-3'>
                                <img src="data:image/webp;base64,UklGRvwKAABXRUJQVlA4IPAKAADQTgCdASosAQQBPzmYxVqvKqikJBXaYeAnCWNu4W8gtXRu41szXmZfKPnr/Y9umOfaB9lPACdjuVk0H6pY7zzHgu/eUuMZSFGzfAk7c2kfKCAUr7edfLxeWgIvwmRSjk3a3i+PgB31cVvblykMz7p1aiQARDd3c38kIBTEjZ14LV9Lvq0kN/BQ1GbuXgTarwydy38CHssyggFV8FMO5d7FE9d3Te5A9tyAd0PRq7PdkfjNbkM9KlLy0YhU3EgDo42D/yfDcRz815V7QIBWbf1e6+pJKnRqE3cLWMJDuzQtqEBzH5BWTiMPSy1yZ9Fkd87rpN8uB6LuKE2h4KgWwwI4bxzZh1QI6JXFpK2Fa4pBI9yUOdstPSwLlodmys0gSJy2S5ZkUmAfcwfOo3+gao8jHs+r2zImafYo1tGtmn5k7kUo6dR/rHHgv2EeP6j2G+OASSE7tPzvC+tC//IQg/ykhnl3KsOrgSRpjjEQSNhru4d6pu7QlGEp3MkfPTxKjf/GjckaXRNc/u8K9jkEWnhp1dyQ0xUahe2DOyMkpbZO6re1pFDSHs+KsYtj2+7CrEfINGSqkKflDh3yidlpdoaidSj6WJAKXRSSMq+BBQQdTMlSoOEXlFj4xR+4ijVkUMpQz6c9Q7KagZNFfwEMj17oeyCz8KGCnGn00r2FBd10xz+wyQS4KPbxryb4bLhtR9nfcqvHuXcLv+KNLkKquhuX1SBi8H6qHjeMiETFEXvoXUBPdlRAj6fccLhwe6tXtQz2PgySjWUGuNUEApckjW7aT2T7LLMeJFR3STblykMziR5H0tQQ1nf9Aq0Y/N7nyg2/2nyggCF/0fI3MhCi6wAA/vzCPi8i158KbzfoLuk1IpCO02xwCa10R/yoXcx4mDyKFjJ9MfSjpU0jEmInSZw9jCTXAQSlICVZpuA7/1Vry28ztkcvSk0MDCePpoUfnlBZwi4RfPMYgJ4x3ZdTk4rSIS4/fCzHKDm2E5z68Ldfyub0wQ7Sno/FjtlYIBPxhhJFTpc4l3U3MGQx4MelyYlmAARfHAAUAD9hyD1UFaLDEUVt4zG9iQrQQ1y+X0Tg1nijzl+U+t4ch/EAAEfAfdYnjS0H2VvWpZDd41LK99dxZctK1o4otk5MP9z7rAAAE7WsZvRT2CwhGFLq3RdMsINhXNgAAGKa3hOoPDLe1LlARyDqBq0xvxlfXIzS+A7/DsilostkMKGzq87D4gpjY6qCStrDBK7XlGvYqIw2ogAeR9K1yhJu/+rmS6ABL6XYLRXfXoyEd/rPxUpwLBU41BFlRwmMJHOir7JnCy4N2PmWNVB/jVgG/mU2impSVzS+lsGGMJ5NUh3BaW0EiDiGfdordxDoSbRYp0QKylqx+zIeDTSrNqgYgoim0tkHvFz6dRPRywwWngr9QerJpHz5P6ezk5MpaKsNs6LsHwUxscygio3o2xUqUcg9PMb1pk0loYFsfPTzkeOGwLlfKo3Y3mSM6e2as6QRIBvHrW+qQwHGsIBVik9CWs9b/S4FS+vbk5ICqTr7YjNVvGVC5U8M4oQVkQgHf7XcGVaRJNH86tpIQCHWip4wfD8ET0/K0XVuxKxv1QIL3WJcG4taBVSCrERk76JgwD5UcFwK+joT+BTL9xAGLsDY3qaGFvW7eO4k+apshamuYGYYFDUui9/QY/ObRrUUhtV+wBvPgJuCVerd1FU00C7M5xvsmw8FDe6z427JzRIhO5tyFnKC411j+c4icvpTi8iie9JOF4bcFdW+u3yYtmvz+ifSZDOMxG9iYRBVO9CVeCgfZ/QDLCRfKAvKXCj7fO4PRL+wwALc5OZlwG9n2bOnZicLLj+6ay4V54V10Qju9fv3sjadmXzvjxjYGLo42HYMuVYQIUlW9tjiZw0Tkq5ZqWP5jxoWprnu0MEOVVHOTfZ7MqPDsVwHDIf46rCunNNXOJFSf9AMu8RzpGUccPhNKF8p04v7bDY6mb2MlP7RcE6HiNaTVIO9K/D+LuA8Ag+d+8aeAolJ2uhX+T3WdRX/8JbcO5MHUDtSLmNfDqksqYDG6NpeETJYMb6tkLNi5deew0UYZtFwDOkSRvDmhUfxz7qM86l7Qo75Qd/FxqlXqsCbdPE7P6QIr9pwTyfr4dtrbal9k1XGkl7E+kp2Ak3p04S7aa7jXc6KTuzWmrkDm2mbAsrxSre3HiZTBl9lwpC376A89nKo4/X0BsDt/+HnqwSUA7qKs5+hN7ujaUDbPfBlbnUXMoaLCLHnDtHLqDSPYPAh+wfwQMEeZtxe/xashE4CNfCY3KpRihUc9d7gExzRjMtrRBZSa78VZq6Ar1WEVCfgT/wg5ME4p7TK/gbhZcZAd1cv826PQFJZfbB+zMGf1SpAlQqUkkKT7nLDW8hVbg5pVa6nGRelFCBY8fDWvtOoXqgN2DyL1nr1A2oql+Y0YJHiC3yON+ZxBEKVZ76gGWX/OuBQHc5QrFoIlAQnPTz9QkCNuUsurm1iExPxk+bXnWyKaVdN5OGe3zZX9z9fENso6c3YXyJnxmhKVoSPwd9mDCTOGtX8EEB0C6IBz3MGEHnDAPND8ZCGZ1xoPT8Y3PX/TsMmN79pE4xytVRS7jPCgGzdkbiHvt1OCmvv5YFHLQJgm1OdIVAmU3KqHCDpr8/CuGCocEY22jCjc+qYAi5UOGlDIcQvnL7m2TCitl4tWg4TOXC+87StQOSS31ZGtrZcyu4HALshO41cH4Vjc5hSqJk88ZByGHn20r8PFHFjKIAIbRkVZtmOQotALS64Y4ZxXR4tVJb0lR2olY3ZKmXu44iH4ybRTCw7NFyq78NhZb8fyBShOq2ZlJcOq454ZKdaM2veOZG0j7cBrve61pN70RPLpBOFNMMeqUaDrXQbHnCP8q/stPv7nMI3LStcTC78hqFWfMLlsYpNfFDAs0rtPtvM00U7CrmH7zPvidSjvkvcz5RmFcUbwuWkKhQHrHLnKJM1NpRWvkrLlI6tKIo98TyqsO4jZ7mZnFWpuRQHec2LhLK5Y2IMP2eYqZFJ7i7yvIzO5lJSLDYDd4Q/aJlaHoMZvbN1r21dhx6qugDADKfxmeNpP1lMf2E1ppOeLXA9G1wWqWdudu3TD5y1vWCn/5yPFiiKMvuDMi/zI+qWfubjo8/iSANQaAaOJWj3MYyZ9Dx8XnBMyItFhy9zuC3clKtBn+zGS1VSJ+rbNPSABfSeliGbobkVNrnVq3uBWfJl0p8j+xFitMqrqZ4BADodpk3/mN81tt1qVmNAktsIMbKYRDMY3XmQEimJwVi+T0jpr6HcdVrRBzPihpCX/H2IvJ0U9c801C+D4x0fDqgMfBVXcYnGJBpDTcWqZHuXW0xsxEjmJChuIo7mXUfzjY4ZvTuahHUvegrpwoW2yEUWxbeEwbQFjLoBoKEVoy3e44CPB2wE5f1p4qfnxfuRY2yxIJM4Mvh0vxfW80ymBw0qnN3c+ELI2TCujHpoYKLhV5IoAAmJA7dvplsqj5itLtuE8ZI+AnMVsMIzY5AXysZWSHTT3KgAAsfVw/PCxyw1Q1yZAvcHHot+dysIrTPu1GsjD/fWiLocEhhUY5MGjexUBeZGu7pR2HAAFENz/gaNtH6Mt1Qfb0ue9GG478bD8Sxy8fXdEHelr5ncWwLjLoGCDheJgeHrDVqfR89by2r+biuKCdzV+PFrwAAAXBt3Wun3F1wFbd5/SSEwHWFd4Vg5qTlTH2NDwAAA" alt="" />
                                <div className="card">
                                    <div className="card-body">
                                        <h6>Latest</h6>
                                        <p>Trendy new styles</p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex gap-2 mb-3'>
                                <img src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/06_JUNE/TopMenu/03/mobile_BestSeller.png" alt="" />
                                <div className="card">
                                    <div className="card-body">
                                        <h6>Best Sellers</h6>
                                        <p>All Time Favourites</p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex gap-2 mb-3'>
                                <img src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/06_JUNE/TopMenu/03/mobile_Rings.png" alt="" />
                                <div className="card">
                                    <div className="card-body">
                                        <h6>Rings</h6>
                                        <p>Browse by Style, Metals & Stones</p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex gap-2 mb-3'>
                                <img src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/06_JUNE/TopMenu/03/mobile_Earring.png" alt="" />
                                <div className="card">
                                    <div className="card-body">
                                        <h6>Earrings</h6>
                                        <p>Browse by Style, Price & More..</p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex gap-2 mb-3'>
                                <img src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/06_JUNE/TopMenu/03/mobile_Bangles_Bracelets.png" alt="" />
                                <div className="card">
                                    <div className="card-body">
                                        <h6>Bracelets & Bangles</h6>
                                        <p>Browse by Style, Metal & Kids</p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex gap-2 mb-3'>
                                <img src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/06_JUNE/TopMenu/03/mobile_Neckace.png" alt="" />
                                <div className="card">
                                    <div className="card-body">
                                        <h6>Necklaces</h6>
                                        <p>Browse by Style, Metal & Price</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mobileaccount ps-4">
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <h6 className='m-0'>Sunil Yadav</h6>
                                    <p className='m-0' style={{fontSize:'10px'}}>sunil.yadav.prof@gmail.com</p>
                                </div>
                                <Link className='text-primary' href={`/`}>Logout</Link>
                            </div>
                            <Link onClick={handleLinkClick} className='py-2 d-block' href={`/profile`}>Account</Link>
                            <Link href={`/shopcat`} onClick={handleLinkClick} className='btn btn-primary w-100 mt-10'>Find Store</Link>
                        </div>


                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default MobileMenus
