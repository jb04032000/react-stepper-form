import { Col, Input, Row } from "antd";
import { Field, ErrorMessage } from "formik";

const StepOne = () => {
  return (
    <>
      <Row gutter={[16, 16]} className="field_gap">
        <Col xs={24} md={12}>
          <label className="label">First Name</label>
          <Field as={Input} name="firstName" placeholder="firstName" />
          <ErrorMessage
            className="error_message"
            name="firstName"
            component="div"
          />
        </Col>
        <Col xs={24} md={12}>
          <label className="label">Last Name</label>
          <Field as={Input} name="lastName" placeholder="lastName" />
          <ErrorMessage
            className="error_message"
            name="lastName"
            component="div"
          />
        </Col>
      </Row>

      <Row gutter={[10, 10]} className="field_gap">
        <Col xs={24} md={12}>
          <label className="label">Email</label>
          <Field as={Input} name="email" placeholder="email" />
          <ErrorMessage
            className="error_message"
            name="email"
            component="div"
          />
        </Col>
        <Col xs={24} md={12}>
          <label className="label">Company Name</label>
          <Field as={Input} name="companyName" placeholder="Company Name" />
          <ErrorMessage
            className="error_message"
            name="companyName"
            component="div"
          />
        </Col>
      </Row>

      <Row gutter={[10, 10]} className="field_gap">
        <Col xs={24} md={12}>
          <label className="label">Company Website</label>
          <Field
            as={Input}
            name="companyWebsite"
            placeholder="Ex. https://www.multiminds.eu/"
          />
          <ErrorMessage
            className="error_message"
            name="companyWebsite"
            component="div"
          />
        </Col>
        <Col xs={24} md={12}>
          <label className="label">State</label>
          <Field as={Input} name="state" placeholder="state" />
          <ErrorMessage
            className="error_message"
            name="state"
            component="div"
          />
        </Col>
      </Row>

      <Row gutter={[10, 10]} className="field_gap">
        <Col xs={24} md={12}>
          <div className="field_gap">
            <label className="label">Zipcode</label>
            <Field as={Input} name="zipCode" placeholder="zipcode" />
            <ErrorMessage
              className="error_message"
              name="zipCode"
              component="div"
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default StepOne;
