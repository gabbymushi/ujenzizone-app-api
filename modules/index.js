const MafundiRoutes=require('./mafundi/mafundi.routes');
const UserRoutes=require('./users/user.routes');
const CategoryRoutes=require('./category/category.routes');

module.exports=(app)=>{
app.use('/api/v1/mafundi/',MafundiRoutes);
app.use('/api/v1/users/',UserRoutes);
app.use('/api/v1/categories/',CategoryRoutes);
}