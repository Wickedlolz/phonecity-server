const Phone = require('../models/Phone');

exports.getAll = function () {
    return Phone.find({});
};

exports.getAllByCategory = function (category) {
    return Phone.find({ category });
};

exports.getById = async function (phoneId) {
    return await Phone.findById(phoneId)
        // .populate('comments')
        .populate('creator')
        .lean();
};

exports.getLatest = async function () {
    return await Phone.find({}).sort('-createdAt').limit(1).lean();
};

exports.create = async function (productData) {
    const phone = new Phone({
        model: productData.model,
        price: productData.price,
        released: productData.released,
        weigth: productData.weigth,
        os: productData.os,
        memory: productData.memory,
        displaySize: productData.displaySize,
        displayResolutions: productData.displayResolutions,
        cameraMP: productData.cameraMP,
        cameraVideo: productData.cameraVideo,
        ram: productData.ram,
        chipset: productData.chipset,
        batteryMAH: productData.batteryMAH,
        batteryType: productData.batteryType,
        image: productData.image,
        video: productData.video,
        creator: productData.creator,
        category: productData.category,
    });

    await phone.save();
    return phone;
};

exports.updateById = async function (productId, productData) {
    const phone = await Phone.findById(productId);

    phone.model = productData.model;
    phone.price = productData.price;
    phone.released = productData.released;
    phone.weigth = productData.weigth;
    phone.os = productData.os;
    phone.memory = productData.memory;
    phone.displaySize = productData.displaySize;
    phone.displayResolutions = productData.displayResolutions;
    phone.cameraMP = productData.cameraMP;
    phone.cameraVideo = productData.cameraVideo;
    phone.ram = productData.ram;
    phone.chipset = productData.chipset;
    phone.batteryMAH = productData.batteryMAH;
    phone.batteryType = productData.batteryType;
    phone.image = productData.image;
    phone.video = productData.video;
    phone.category = productData.category;

    await phone.save();
    return phone;
};

exports.deleteById = async function (phoneId) {
    const deletedPhone = await Phone.findByIdAndRemove(phoneId);
    return deletedPhone;
};
