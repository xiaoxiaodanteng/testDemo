// 2
const defaultList = [
    {
        name: '大头',
        id: 0
    },
    {
        name: '小存子',
        id: 1
    },
]
// store设置默认值
// action 触发的操作
const tableList = (state = defaultList, action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD':
            return [
                ...state,
                {
                    ...action.payload
                }
            ]

        case 'DEL':
            return state.filter(item => item.id !== action.payload.id)
            
        case 'UPDATE':
            return state.map(item => {
                if (item.id === action.payload.id) {
                    return {...action.payload, id: item.id}
                }
                return item
            })
    
        default:
            return state
    }
}

export default tableList