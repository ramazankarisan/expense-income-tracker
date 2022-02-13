import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

import api from "../utils/api";
import showError from "../utils/showError";


const SignUp = () => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };


  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      // to send post request to our API
      await api().post("/users/register", values);
      // to navigate to our login page and in order to show a message for those who has just registered add a optianal state value
      navigate("/login", { state: true });
    } catch (error) {
      console.log({ error });
      // to show error if it occurs
      showError((error as any).response.data.errorMessage);
    }
  };
  return (
    <>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}

      >
        <h2 style={{ textAlign: "center" }}>Register for an account</h2>
        <Form.Item
          name="username"
          label="username"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
              min: 6,
            },
          ]}
        >
          <Input.Password autoComplete="on" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[{ type: "email", required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="full_name" label="full_name">
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default SignUp;
