/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/courseProducts', { useNewUrlParser: true });

const db = mongoose.connection;

// Initialize plugin to auto-increment Number IDs
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(db);

const productSchema = new mongoose.Schema({
  course: {
    name: String,
    image: String, // url
    video: String, // url
    category: String,
    lengthInHours: Number,
    articleCount: Number,
    resourceCount: Number,
  },
  lastUpdateDate: Date,
  salesPrice: Number,
  originalPrice: Number,
  totalNumOfPurchases: Number,
  averageRating: Number, // randomly generate a rating for each product
});

productSchema.plugin(autoIncrement.plugin, 'Product');

const cartSchema = new mongoose.Schema({
  products: [{
    productId: Number,
  }],
});

const Product = mongoose.model('Product', productSchema);

const Cart = mongoose.model('Cart', cartSchema);


module.exports = {
  save: (product, callback) => {
    const record = new Product({
      course: {
        name: product.course.name,
        image: product.course.image,
        video: product.course.video,
        category: product.course.category,
        lengthInHours: product.course.lengthInHours,
        articleCount: product.course.articleCount,
        resourceCount: product.course.resourceCount,
      },
      lastUpdateDate: product.lastUpdateDate,
      salesPrice: product.salesPrice,
      originalPrice: product.originalPrice,
      totalNumOfPurchases: product.totalNumOfPurchases,
      averageRating: product.averageRating,
    });

    // eslint-disable-next-line no-shadow
    record.save((err, record) => {
      if (err) {
        console.log('save error');
        callback(err);
      } else {
        console.log('save success');
        callback(null, record);
      }
    });
  },
  readAll: (callback) => {
    Product.find((err, products) => {
      if (err) {
        console.log('ReadAll error');
        callback(err);
      } else {
        console.log('ReadAll success');
        callback(null, products);
      }
    });
  },
};
