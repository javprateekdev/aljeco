"use client"
import React from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import ViewProfile from './ViewProfile';
import Information from './Information';
import Address from './Address';
import MyOrders from './MyOrders';
import ChangePassword from './ChangePassword';
import TrackOrder from './TrackOrder';

const Profile = () => {
  return (
    <>

      <section className='pt-120 pb-60'>
        <Tab.Container id="left-tabs-example" defaultActiveKey="profile">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className='profile__tab mr-40'>
                      <Nav variant="pills" className="nav nav-tabs tp-tab-menu flex-column">
                        <Nav.Item className='mb-2'>
                          <Nav.Link eventKey="profile">Profile</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='mb-2'>
                          <Nav.Link eventKey="info">Information</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='mb-2'>
                          <Nav.Link eventKey="address">Address</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='mb-2'>
                          <Nav.Link eventKey="myorders">My orders</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='mb-2'>
                          <Nav.Link eventKey="trackorder">Track Order</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='mb-2'>
                          <Nav.Link eventKey="changepass">Change Password</Nav.Link>
                        </Nav.Item>
                      </Nav>
                  </div>
                </div>
                <div className="col-md-8">
                   
                    <Tab.Content>
                      <Tab.Pane eventKey="profile">
                          <ViewProfile/>
                      </Tab.Pane>
                      <Tab.Pane eventKey="info">
                          <Information/>
                      </Tab.Pane>
                      <Tab.Pane eventKey="address">
                          <Address/>
                      </Tab.Pane>
                      <Tab.Pane eventKey="myorders">
                          <MyOrders/>
                      </Tab.Pane>
                      <Tab.Pane eventKey="trackorder">
                          <TrackOrder/>
                      </Tab.Pane>
                      <Tab.Pane eventKey="changepass">
                          <ChangePassword/>
                      </Tab.Pane>
                    </Tab.Content>
                </div>
              </div>
            </div>
        </Tab.Container>
      </section>
    </>
  )
}

export default Profile
