// 6
import React, { useState, useRef } from 'react'
import { Table ,Button,Modal,Form,Input} from 'antd'

function useVar(initailVal) {
    const [name, setValue] = useState(initailVal)

    return {
        value: name,
        setValue
    }
}

const TableList = ({list,onDel, onUpdata}) => {
    const formRef = useRef()
    const visible = useVar(false)
    const editId = useVar(0)

    const showModal = () => visible.setValue(true)
    const hideModel = () => visible.setValue(false)
    const handleOnEdit = id => {
        showModal()
        editId.setValue(id)
    }
    const handleOk = () => {
        hideModel()
    }
    const handleCancel = e => {
        hideModel()
    };

    const onReset = () => {
        formRef.current.resetFields();
    };

    const onFinish = ({name}) => {
        onUpdata({
            id: editId.value,
            name
        })
        handleCancel()
        onReset()
    }

    const data = list.map(item => ({...item, key: item.id}))
    
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: '操作',
            key: 'action',
            dataIndex: 'action',
            render(text, record) {
              return <div>
                    <Button type="primary" danger onClick={event => onDel(record.id)}>5555{record.id}</Button>
                    <Button type="primary" danger onClick={() => handleOnEdit(record.id)}>编辑{record.id}</Button>
              </div>
            },
        }
    ]

    return (
        <div>
            <TableModel visible={visible.value} formRef={formRef} onFinish={onFinish} handleOk={handleOk} handleCancel={handleCancel}/>
            <Table columns={columns} dataSource={data}/>
        </div>
    )

}

const TableModel = ({visible, formRef, onFinish, handleOk, handleCancel}) => {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    }
    return <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        >
        <Form
            {...layout}
            name="basic"
            ref={formRef}
            onFinish={onFinish}
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
    </Modal>
}


// class TableList extends React.Component{
//     formRef = React.createRef();
//     constructor(props) {
//         super(props)
//         this.state = { visible: false, editId: 0 };
//         this.handleOk = this.handleOk.bind(this)
//         this.handleCancel = this.handleCancel.bind(this)
//         this.handleOnEdit = this.handleOnEdit.bind(this)
//     }
//     showModal() {
//         this.setState({
//             visible: true,
//         });
//     }
//     handleOnEdit = (editId) => {
//         this.showModal()
//         this.setState({
//             editId
//         }, () => {
//             console.log(this.state.editId)
//         });
//     }
//     handleOk = e => {
//         console.log(e);
//         console.log(this.state.editId)
//         this.setState({
//             visible: false,
//         });
//     };
    
//     handleCancel = e => {
//         this.setState({
//             visible: false,
//             name: ''
//         });
//     };
//     onReset = () => {
//         this.formRef.current.resetFields();
//     };
//     render() {
//         const {list,onDel, onUpdata} = this.props
//         const data = list.map(item => ({...item, key: item.id}))
//         const layout = {
//             labelCol: { span: 8 },
//             wrapperCol: { span: 16 },
//         };
//         const tailLayout = {
//             wrapperCol: { offset: 8, span: 16 },
//         }
//         // console.log(this.handleOnEdit)
//         const handleOnEdit = this.handleOnEdit
//         this.columns = [
//             {
//                 title: 'Name',
//                 dataIndex: 'name',
//                 key: 'name'
//             },
//             {
//                 title: 'ID',
//                 dataIndex: 'id',
//                 key: 'id'
//             },
//             {
//                 title: '操作',
//                 key: 'action',
//                 dataIndex: 'action',
//                 render(text, record) {
//                   return <div>
//                         <Button type="primary" danger onClick={event => onDel(record.id)}>5555{record.id}</Button>
//                         <Button type="primary" danger onClick={() => handleOnEdit(record.id)}>编辑{record.id}</Button>
//                   </div>
//                 },
//             }
//         ]

//         return (
//             <div>
//                 <Modal
//                     title="Basic Modal"
//                     visible={this.state.visible}
//                     onOk={this.handleOk}
//                     onCancel={this.handleCancel}
//                     >
//                     <Form
//                         {...layout}
//                         name="basic"
//                         ref={this.formRef}
//                         onFinish={({name}) => {
//                             onUpdata({
//                                 id: this.state.editId,
//                                 name
//                             })
//                             this.handleCancel()
//                             this.onReset()
//                         }}
//                     >
//                         <Form.Item
//                         label="Name"
//                         name="name"
//                         rules={[{ required: true, message: 'Please input name!' }]}
//                         >
//                         <Input />
//                         </Form.Item>

//                         <Form.Item {...tailLayout}>
//                         <Button type="primary" htmlType="submit">
//                             Submit
//                         </Button>
//                         </Form.Item>
//                     </Form>
//                 </Modal>
//                 <Table columns={this.columns} dataSource={data}/>
//             </div>
//         )
//     }
// }
// const TableList = ({list, onDel,onUpdata}) => {

//     const columns = [
//         {
//             title: 'Name',
//             dataIndex: 'name',
//             key: 'name'
//         },
//         {
//             title: 'ID',
//             dataIndex: 'id',
//             key: 'id'
//         },
//         {
//             title: '操作',
//             key: 'action',
//             dataIndex: 'action',
//             render(text, record) {
//               return <div>
//                   <Button type="primary" danger onClick={event => onDel(record.id)}>5555{record.id}</Button>
//               <Button type="primary" danger onClick={event => onUpdata(record.id)}>编辑{record.id}</Button>
//               </div>
//             },
//         }
//     ]
//     const data = list.map(item => ({...item, key: item.id}))
//     return (
//         <div>
//             <Modal
//           title="Basic Modal"
//           visible={this.state.visible}
//           onOk={this.handleOk}
//           onCancel={this.handleCancel}
//         >
//           <p>Some contents...</p>
//           <p>Some contents...</p>
//           <p>Some contents...</p>
//         </Modal>
//             <Table columns={columns} dataSource={data}/>
//         </div>
//     )
// }

export default TableList