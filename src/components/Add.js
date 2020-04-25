
import React from 'react'
import { Form, Input, Button } from 'antd'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
}


const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};
const AddItem = ({onAdd}) => {
    const onFinish = values => {
        console.log('Success:', values);
        onAdd(values.name)
    };
    return <Form
    {...layout}
    name="basic"
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
  >
    <Form.Item
      label="Name"
      name="name"
      rules={[{ required: true, message: 'Please input name!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item {...tailLayout}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
}

export default AddItem