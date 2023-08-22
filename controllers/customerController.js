const services = require("../services/customerServices");

exports.newCustomer = async (req, res) => {
  try {
    const customer = await services.getNewCustomers();
    if (customer == 0) {
      return res.status(404).send("not found new customers");
    }
    return res.status(200).json(customer);
  } catch (err) {
    console.log(err);
    res.status(500).send("internal error: " + err);
  }
};

exports.oldCustomer = async (req, res) => {
  try {
    const customer = await services.getOldCustomers();
    if (customer == 0) {
      return res.status(404).send("not found old customers");
    }
    return res.status(200).json(customer);
  } catch (err) {
    console.log(err);
    res.status(500).send("internal error: " + err);
  }
};

exports.comeBackCustomer = async (req, res) => {
  try {
    const customer = await services.getComeCustomers();
    if (customer == 0) {
      return res.status(404).send("not found come back customers");
    }
    return res.status(200).json(customer);
  } catch (err) {
    console.log(err);
    res.status(500).send("internal error: " + err);
  }
};
