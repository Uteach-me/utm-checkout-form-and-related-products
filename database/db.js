var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/courseProducts', {useNewUrlParser: true});

var db = mongoose.connection;

//Initialize plugin to auto-increment Number IDs
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(db);

var productSchema = new mongoose.Schema({
  course: {
    name: String,
    image: String, //url
    video: String, //url
    category: String,
    lengthInHours: Number,
    articleCount: Number,
    resourceCount: Number,
  },
  lastUpdateDate: Date,
  salesPrice: Number,
  originalPrice: Number,
  totalNumOfPurchases: Number,
  averageRating: Number, //randomly generate a rating for each product
});

productSchema.plugin(autoIncrement.plugin, 'Product');

var cartSchema = new mongoose.Schema({
  products: [{
    productId: Number,
  }],
});

var Product = mongoose.model('Product', productSchema);

var Cart = mongoose.model('Cart', cartSchema);


module.exports = {
  save: (product, callback) => {
    var record = new Product ({
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

    record.save(function (err, record) {
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
    Product.find(function (err, products) {
      if (err) {
        console.log('ReadAll error');
        callback(err);
      } else {
        console.log('ReadAll success');
        callback(null, products)
      }
    })
  }
}
