import { connect } from 'react-redux'
import Add from '../components/Add'
import {addItem} from '../actions/tableList'


const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => ({
    onAdd: name => {
        console.log(name)
        dispatch(addItem(name))
    }
})

const AddContainer =  connect(
    mapStateToProps,
    mapDispatchToProps
)(Add)

export default AddContainer