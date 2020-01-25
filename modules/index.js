const MafundiRoutes=require('./mafundi/mafundi.routes');

module.exports=(app)=>{
app.use('/api/v1/mafundi/',MafundiRoutes);
}