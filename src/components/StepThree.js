import { useState } from "react";
import { Field, ErrorMessage } from "formik";
import { Col, InputNumber, Row, Select, Radio, DatePicker } from "antd";

const { Option } = Select;

// Plan price structure
const planPrices = {
  monthly: {
    gold: 10,
    titanium: 15,
  },
  yearly: {
    gold: 100,
    titanium: 150,
  },
};

const StepThree = () => {
  const [planType, setPlanType] = useState("");
  const [planOption, setPlanOption] = useState("");
  const [numberOfUsers, setNumberOfUsers] = useState(1);

  const calculatePrice = () => {
    if (planType && planOption) {
      const pricePerUser = planPrices[planType][planOption];
      const totalPrice = pricePerUser * numberOfUsers;
      return `$${totalPrice}`;
    } else {
      return `$00.0`;
    }
  };

  return (
    <div>
      <Row gutter={[16, 16]} className="field_gap">
        <Col xs={24} md={12}>
          <label className="label">Start Plan Date</label>
          <Field name="startDate" placeholder="startDate">
            {({ form }) => (
              <DatePicker
                onChange={(date, dateString) =>
                  form.setFieldValue("startDate", dateString)
                }
                format="YYYY-MM-DD"
                style={{ width: "100%" }}
              />
            )}
          </Field>
          <ErrorMessage
            className="error_message"
            name="startDate"
            component="div"
          />
        </Col>
      </Row>

      <Row gutter={[16, 16]} className="field_gap">
        <Col xs={24} md={12}>
          <label className="label">Plan Type</label>
          <Field name="planType" placeholder="planType">
            {({ form }) => (
              <Radio.Group
                style={{ width: "100%" }}
                value={planType}
                onChange={(e) => {
                  const { value } = e.target;
                  form.setFieldValue("planType", value);
                  setPlanType(value);
                }}
              >
                <Radio value="monthly">Monthly</Radio>
                <Radio value="yearly">Yearly</Radio>
              </Radio.Group>
            )}
          </Field>
          <ErrorMessage
            className="error_message"
            name="planType"
            component="div"
          />
        </Col>
      </Row>

      <Row gutter={[16, 16]} className="field_gap">
        <Col xs={24} md={12}>
          <label className="label">Plan Option</label>
          <Field name="planOption" placeholder="Select plan">
            {({ form }) => (
              <Select
                onChange={(value) => {
                  form.setFieldValue("planOption", value);
                  setPlanOption(value);
                }}
                value={planOption}
                style={{ width: "100%" }}
              >
                <Option value="gold">Gold</Option>
                <Option value="titanium">Titanium</Option>
              </Select>
            )}
          </Field>
          <ErrorMessage
            className="error_message"
            name="planOption"
            component="div"
          />
        </Col>
      </Row>

      <Row gutter={[16, 16]} className="field_gap">
        <Col xs={24} md={12}>
          <label className="label">Number of Users</label>
          <Field name="numberOfUsers" placeholder="Number of Users">
            {({ form }) => (
              <InputNumber
                min={1}
                value={numberOfUsers}
                onChange={(value) => {
                  form.setFieldValue("numberOfUsers", value);
                  setNumberOfUsers(value);
                }}
                style={{ width: "100%" }}
              />
            )}
          </Field>
          <ErrorMessage
            className="error_message"
            name="numberOfUsers"
            component="div"
          />
        </Col>
      </Row>

      <Row gutter={[16, 16]} className="field_gap">
        <Col xs={24}>
          <h3>Order Summary</h3>
          <p>
            <strong>Plan: </strong>
            {`${planType.charAt(0).toUpperCase() + planType.slice(1)} ${
              planOption.charAt(0).toUpperCase() + planOption.slice(1)
            }`}
          </p>
          <p>
            <strong>Price: </strong>
            {calculatePrice()}
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default StepThree;
