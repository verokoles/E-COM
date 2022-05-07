// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
//set up foreign keys
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});
// Categories have many Products
Category.hasMany(Product {
  foreignKey: 'category_id',
  onDelete: 'NULL',
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag {
  // use through to loop data of product tag
  through: {
    model: 'product_tag',
    unique: false,
  },
  as: 'linked_tag',
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany( Product {
  through: {
    model: 'product_tag',
    unique: false,
  },
  as: 'linked_products',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
