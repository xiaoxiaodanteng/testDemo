// 8
// import React from 'react'
import { connect } from 'react-redux'
import TableList from '../components/TableList'
import {delItem ,update} from '../actions/tableList'

const mapStateToProps = state => ({
    list: state.tableList
})
const mapDispatchToProps = (dispatch) => ({
    onDel: id => {
        console.log(id)
        dispatch(delItem(id))
    },
    onUpdata: data => {
        dispatch(update(data))
    }
})

const RenderTableList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TableList)

export default RenderTableList

