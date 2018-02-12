import Home from '../app/components/Home.component'
import Category from '../app/components/Category.component'

const routes=[
    {
        path:"/",
        component:Home,
        exact:true
    },
    {
        path:"/men",
        component:Category
    },
    {
        path:"/women",
        component:Category
    }
]

export default routes;