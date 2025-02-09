import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import { instance } from "../server.js";
import crypto from "crypto";
import { CLIENT_URL } from '../utils/constants.js';





// @desc    CREATE new order
// @route    POST /api/orders
// @access    Private
const addOrderItems = asyncHandler(async (req, res) => {

  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;
  
    const options = {
      amount: Number(totalPrice * 100),
      currency: "INR",
    };
    const razorpayOrder = await instance.orders.create(options);

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
    return;
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });
    const createdOrder = await order.save();

    res.status(201).json({createdOrder,razorpayOrder});
  }
});

// @desc    Get order by Id
// @route    GET /api/orders/:id
// @access    Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  );

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Order not Found');
  }
});

// @desc    Update order to paid
// @route    GET /api/orders/:id/razorpay
// @access    Private
const updateOrderToPaidRazorpay = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  // const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  // const body = razorpay_order_id + "|" + razorpay_payment_id;

  // const expectedSignature = crypto
  // .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
  // .update(body.toString())
  // .digest("hex");

  // const isAuthentic = expectedSignature === razorpay_signature;


  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.params.id,
      // razorpay_order_id,
      // razorpay_payment_id,
      // razorpay_signature,
      status: "Paid",
      update_time: Date.now(),
      // email_address: "test@gmail.com",
    };

    const updatedOrder = await order.save();
 
    // res.json(updatedOrder);  
    res.redirect(
      `${CLIENT_URL}/order/${req.params.id}`
      // `${CLIENT_URL}/order/${req.params.id}?reference=${razorpay_payment_id}`
    );
  } else {
    res.status(404);
    throw new Error('Order not Found');
  }
});

// @desc    Update order to paid
// @route    GET /api/orders/:id/pay
// @access    Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    };

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not Found');
  }
});

// @desc    Update order to delivered
// @route    GET /api/orders/:id/deliver
// @access    Private
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not Found');
  }
});

// @desc    Get logged in user Orders
// @route    GET /api/orders/myorders
// @access    Private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });

  res.json(orders);
});

// @desc    Get all Orders
// @route    GET /api/orders
// @access    Private/Admin
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate('user', 'id name');

  res.json(orders);
});

export {
  addOrderItems,
  getOrderById,
  updateOrderToPaidRazorpay,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
};
