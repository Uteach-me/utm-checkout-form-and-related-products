/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.connect('mongodb://172.17.0.2/courseProducts', { useNewUrlParser: true });

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
  salesEndDate: Date,
  lastUpdateDate: Date,
  salesPrice: Number,
  originalPrice: Number,
  totalNumOfPurchases: Number,
  averageRating: Number,
  videoUrl1: String,
  videoUrl2: String,
  videoUrl3: String,
  videoUrl4: String,
  videoUrl5: String,
  videoUrl6: String,
  videoUrl7: String,
  videoUrl8: String,
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
      salesEndDate: product.salesEndDate,
      lastUpdateDate: product.lastUpdateDate,
      salesPrice: product.salesPrice,
      originalPrice: product.originalPrice,
      totalNumOfPurchases: product.totalNumOfPurchases,
      averageRating: product.averageRating,
      videoUrl1: product.videoUrl1,
      videoUrl2: product.videoUrl2,
      videoUrl3: product.videoUrl3,
      videoUrl4: product.videoUrl4,
      videoUrl5: product.videoUrl5,
      videoUrl6: product.videoUrl6,
      videoUrl7: product.videoUrl7,
      videoUrl8: product.videoUrl8,
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
  readOne: (id, callback) => {
    Product.find({ _id: id }, (err, product) => {
      if (err) {
        console.log('readOne error');
        callback(err);
      } else {
        console.log('readOne success');
        callback(null, product);
      }
    });
  },
};
