import react from "react";
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import SendToTauri from "../api/SendToTauri";


function LoginForm(props) {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        const sentString = values['username'] + " " + values['PAT'] + " " + values['repo'] + " " + values['local'];
        console.log(values);
        console.log("success: ", sentString);
        SendToTauri("Login", sentString);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="horizontal"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="GitHub PAT"
                name="PAT"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Github personal access token!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                label="GitHub repository link"
                name="repo"
                rules={[
                    {
                        required: true,
                        message: 'Please input a valid Github repository Link!',
                        pattern: '((git|ssh|http(s)?)|(git@[\\w\\.]+))(:(//)?)([\\w\\.@\\:/\\-~]+)(\\.git)(/)?',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Local Path to clone too"
                name="local"
                rules={[
                    {
                        required: true,
                        message: 'Please input your local path to clone to',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}

export default LoginForm;