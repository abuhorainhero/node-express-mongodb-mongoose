// internal imports
const multer = require("multer");
const path = require("path");
const createError = require("http-errors");

// Uploader function
const uploader = (
  sub_folder_path,
  allowed_file_types,
  max_file_size,
  error_msg
) => {
  console.log("hello");
  // file upload Folder path
  const UPLOADS_FOLDER = `${__dirname}/../public/${sub_folder_path}/`;

  // Define the storage
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, UPLOADS_FOLDER);
    },
    filename: (req, file, cb) => {
      const fileExt = path.extname(file.originalname);
      const fileName =
        file.originalname
          .replace(fileExt, "")
          .toLowerCase()
          .split(" ")
          .join("-") +
        "-" +
        Date.now();

      cb(null, fileName + fileExt);
    },
  });

  // Prepare the final Multer upload Object
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: max_file_size,
    },
    fileFilter: (req, file, cb) => {
      if (allowed_file_types.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(createError(error_msg));
      }
    },
  });

  return upload;
};

module.exports = uploader;
