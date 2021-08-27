import React from "react";

//Use ant design components
import { Drawer, Form, Button, Col, Row, Input } from "antd";

//Side drawer contains the form for adding / updating the contact
const ContactForm = (props) => {

  const { visible, onClose, values, onFinish, loading } = props;

  return (
    <>
      {visible && (
        <div>
                                                                                         {/* Side drawer */}
          <Drawer
            title="Contact"
            width={720}
            onClose={onClose}
            visible={visible}
            bodyStyle={{ paddingBottom: 80 }}
            footer={
              <div
                style={{
                  textAlign: "right",
                }}
              >

                <Button onClick={onClose} style={{ marginRight: 8 }}>
                  Cancel
                </Button>
                <Button
                  type="primary"
                  form="contact-form"
                  htmlType="submit"
                  loading={loading}
                >
                  Save
                </Button>
              </div>
            }
          >

                                                                                                {/* Form  */}
            <Form
              layout="vertical"
              id="contact-form"
              initialValues={values}
              onFinish={onFinish}
              hideRequiredMark
            >
                                                                                               {/* User ID */}
              <Form.Item name="id" hidden> </Form.Item>
              <Row gutter={16}>
                {/* Input User Name */}
                <Col span={12}>
                  <Form.Item
                    name="username"
                    label="Name"
                    rules={[{ required: true, message: "Name is Required" }]}
                  >
                    <Input type='text' placeholder="Please enter name" />
                  </Form.Item>
                </Col>
                                                                                   {/* Input Website Name / Link */}
                <Col span={12}>
                  <Form.Item
                    name="website"
                    label="Website"
                    rules={[{ required: true, message: "URL is Required" }]}
                  >
                    <Input type='url' placeholder="Please enter url" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                                                                                        {/* Input Email */}
                <Col span={12}>
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[{ required: true, message: "Email is Required" }]}
                  >
                    <Input type='email' placeholder="Please enter email" />
                  </Form.Item>
                </Col>
                                                                                  {/* Input the phone number*/}
                <Col span={12}>
                  <Form.Item
                    name="phone"
                    label="Phone"
                    rules={[
                      { required: true, message: "Phone number is Required" },
                    ]}
                  >
                    <Input  type='number' placeholder="Please enter phone number" />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <label>Address</label>
              </Row>
              <Row gutter={16}>
                                                                                    {/* Input the street name */}
                <Col span={8}>
                  <Form.Item
                    name="street"
                    rules={[
                      { required: true, message: "Street name is Required" },
                    ]}
                  >
                    <Input type='text' placeholder="Please enter Street name" />
                  </Form.Item>
                </Col>
                                                                                        {/* Input City Name */}
                <Col span={8}>
                  <Form.Item
                    name="city"
                    rules={[
                      { required: true, message: "city name is Required" },
                    ]}
                  >
                    <Input type='text' placeholder="Please enter City name" />
                  </Form.Item>
                </Col>
                                                                                  {/* Input Zip Code of the city */}
                <Col span={8}>
                  <Form.Item
                    name="zipcode"
                    rules={[{ required: true, message: "zipcode is Required" }]}
                  >
                    <Input type='number' placeholder="Please enter Zip code" />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Drawer>
        </div>
      )}
    </>
  );
};

export default ContactForm;
