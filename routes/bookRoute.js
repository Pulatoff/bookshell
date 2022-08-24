const router = require("express").Router();
const controller = require("../controllers/BookController");

router.route("/add/:isbn").get(controller.addBook);
router.route("/read").post(controller.readBook);
router.route("/books").get(controller.getBooks);
module.exports = router;
