import { Field, ErrorMessage } from "formik";
import { Row, Col, Checkbox, Radio, Select } from "antd";

const { Option } = Select;

const StepTwo = () => {
  return (
    <>
      <Row gutter={[16, 16]} className="field_gap">
        <Col xs={24}>
          <label className="label">
            Your company is working on which field:
          </label>
          <Field name="companyField">
            {({ field, form }) => (
              <div role="group" aria-labelledby="checkbox-group">
                <Checkbox.Group
                  {...field}
                  onChange={(value) =>
                    form.setFieldValue("companyField", value)
                  }
                >
                  <Row gutter={[16, 16]}>
                    <Col xs={24} sm={12}>
                      <Checkbox value="Technology">Technology</Checkbox>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Checkbox value="Finance">Finance</Checkbox>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Checkbox value="Healthcare">Healthcare</Checkbox>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Checkbox value="Education">Education</Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </div>
            )}
          </Field>
          <ErrorMessage
            className="error_message"
            name="companyField"
            component="div"
          />
        </Col>
      </Row>

      <Row gutter={[16, 16]} className="field_gap">
        <Col xs={24}>
          <label className="label">Number of employees:</label>
          <Field name="employeeCount" placeholder="Number of employees">
            {({ field, form }) => (
              <Select
                {...field}
                onChange={(value) => form.setFieldValue("employeeCount", value)}
                className="select_options"
                placeholder="Select number of employees"
                style={{ width: "100%" }}
              >
                <Option value="1-10">1-10</Option>
                <Option value="10-20">10-20</Option>
                <Option value="20-30">20-30</Option>
                <Option value="40+">40+</Option>
              </Select>
            )}
          </Field>
          <ErrorMessage
            className="error_message"
            name="employeeCount"
            component="div"
          />
        </Col>
      </Row>

      <Row gutter={[16, 16]} className="field_gap">
        <Col xs={24}>
          <label className="label">Does the company have a WFH policy?</label>
          <Field name="wfhPolicy">
            {({ field, form }) => (
              <Radio.Group
                onChange={(e) =>
                  form.setFieldValue("wfhPolicy", e.target.value)
                }
                style={{ width: "100%" }}
              >
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            )}
          </Field>
          <ErrorMessage
            className="error_message"
            name="wfhPolicy"
            component="div"
          />
        </Col>
      </Row>
    </>
  );
};

export default StepTwo;
