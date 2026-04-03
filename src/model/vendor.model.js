const mongoose = require('mongoose')

const vendorSchema = new mongoose.create({
    name: {
        type:String,
        requried:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    businessName: {
        type:String,
        requried:true
    },
  gstNumber: {
    type: String,
    unique: true
  },
  address: String,
  isActive: {
    type: Boolean,
    default: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, { timestamps: true })

const vendorModel = mongoose.model('vendors', vendorSchema)
module.exports = vendorModel

