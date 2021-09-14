const uploader = require("../../utilities/singleUploader");

const imageUpload = (req, res, next) => {
  console.log("hi");
  const upload = uploader(
    "images",
    [`image/jpg`, `image/jpeg`, `image/png`],
    1000 * 1000,
    `Only jpg, jpeg or png files are allowed!`
  );

  //  Call the middleware function
  upload.any()(req, res, (err) => {
    if (err) {
      res.status(500).json({
        errors: {
          image: {
            msg: err.message,
          },
        },
      });
    } else {
      next();
    }
  });
};

module.exports = imageUpload;
