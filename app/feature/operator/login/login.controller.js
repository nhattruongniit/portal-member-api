const operatorModel = require('app/model/operator');

const login = {};

login.start = async (req, res) => {
  const { email } = req.body;
  try {
    const ops = await operatorModel.findOne({ email: email });
    if (!ops) {
      return res.json({
        error: 'fails'
      });
    }
    return res.json({
      message: 'ok'
    });
  } catch (err) {
    throw err;
  }
 
};

module.exports = login;