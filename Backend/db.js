const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://test:abuja2020@cluster0.x7ng2.mongodb.net/blockchain-ecommerce?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true})
const paymentSchema = new mongoose.Schema({
    id: String,
    itemId: String,
    paid: Boolean,
})

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = {
    Payment
}