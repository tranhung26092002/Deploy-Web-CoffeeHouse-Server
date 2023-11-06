const express = require('express');
const app = express();
const cors = require('cors');

const adminRouter = require('./Router/AdminRouter');
const authRouter = require('./Router/AuthRouter');
const productRouter = require('./Router/ProductRouter');
const userRouter = require('./Router/UserRouter');
const managerRouter = require('./Router/ManagerRouter');
const billRouter = require('./Router/BillRouter');

const connectDb = require('./Services/ConnectDbServices');


require('dotenv').config()

//middleware apply cors add all request
app.use(cors());
//middleware get infor from client by req.body
app.use(express.json());

//connect database
connectDb();

// middleware router
app.use('/api/auth', authRouter);
app.use('/api/auth/admin', adminRouter);
app.use('/api/auth/user', productRouter);
app.use('/api/auth/user/infor',userRouter);
app.use('/api/auth/user/bills',billRouter);
app.use('/api/auth/manager', managerRouter);

app.listen(process.env.PORT, () => console.log(`Server running on ${process.env.PORT}`));