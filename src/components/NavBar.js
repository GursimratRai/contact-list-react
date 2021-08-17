import React from "react";
//Use ant design components
import {Button, Row, Col } from "antd";

//Nav bar contains the title/logo and button for adding new contact
const NavBar = (props) => {
  const {handleAdd} = props;
  return (
    <div>

      <Row className='header'>

        <Col span={4}><h1>Contact List</h1></Col>
      
        <Col span={2} offset={18}>
          <Button type='primary' onClick={handleAdd}>Add Contact</Button>
        </Col>
      
      </Row>
    
    </div>
  );
}

export default NavBar;
