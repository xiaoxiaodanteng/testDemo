// 3
let defaultId = 1
// 添加
export const addItem = name => ({
    type: 'ADD',
    payload: {
        id: ++defaultId,
        name
    }
})

// 删除
export const delItem = id => ({
    type: 'DEL',
    payload: {
        id
    }
})

// 修改
export const update = data => ({
    type: 'UPDATE', 
    payload: data
})
