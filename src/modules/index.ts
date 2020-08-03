import MafundiRoutes from './mafundi/mafundi.routes';
import UserRoutes from './users/user.routes';
import CategoryRoutes from './category/category.routes';
import express from 'express';

export default (app: express.Application) => {
    app.use('/api/v1/mafundi/', MafundiRoutes);
    app.use('/api/v1/users/', UserRoutes);
    app.use('/api/v1/categories/', CategoryRoutes);
}