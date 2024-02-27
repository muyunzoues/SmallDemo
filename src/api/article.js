import request from '@/utils/request.js'
import {userTokenStore} from '@/stores/token.js'
//文章分类列表查询
export const articleCategoryListService =()=>{
    //const tokenStore=userTokenStore()
    //通过请求头Authorization携带token
    //return request.get('/category',{headers:{'Authorization':tokenStore.token}})
    return request.get('/category')
}
//文章分类添加
export const articleCategoryAddService =(categoryData)=>{
    return request.post('/category',categoryData)
}

//文章分类修改
export const articleCategoryUpdateService =(categoryData)=>{
    return request.put('/category',categoryData)
}
//删除分类
export const articleCategoryDeleteService = (id) => {
    return request.delete('/category?id='+id)
}
//文章列表查询
export const articleListService = (params) => {
    return request.get('/article',{params:params})
}

//文章添加
export const articleAddService = (articleData) => {
    return request.post('/article',articleData)
}
//文章修改
export const articleUpdateService =(articleData)=>{
    return request.put('/article',articleData)
}
//文章删除
export const articleDeleteService = (id) => {
    return request.delete('/article?id='+id)
}
