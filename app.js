const express = require("express");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

// data parser - used to parse post data
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Tshirt API",
      version: "1.0.0",
    },
  },
  apis: ["app.js"],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
//Swagger and post for pants
/**
 * @swagger
 * /pants:
 *   get:
 *     description: Get all pants
 *     responses:
 *       200:
 *         description: Success
 *
 */

app.get("pants", (req, res) => {
  res.send([
    {
      brand: "Nike",
      color: "black",
      size: "M",
      price: "100",
      id: "1",
    },
    {
      brand: "heins",
      color: "black",
      size: "M",
      price: "100",
      id: "2",
    },
    {
      brand: "Levis",
      color: "jean",
      size: "L",
      price: "100",
      id: "3",
    },
  ]);
});

// Swagger and tshirt get and post routes
/**
 * @swagger
 * /tshirt:
 *   get:
 *     description: Get all shirts
 *     responses:
 *       200:
 *         description: Success
 *
 */
app.get("/tshirt", (req, res) => {
  res.send([
    {
      brand: "Nike",
      color: "red",
      size: "M",
      price: "100",
      id: "1",
      image: "https://www.nike.com/a/ACS_PRD/f/",
    },
    {
      brand: "adidas",
      color: "blue",
      size: "L",
      price: "200",
      id: "2",
      image: "https://www.adidas.com/",
    },
    {
      brand: "Puma",
      color: "black",
      size: "S",
      price: "300",
      id: "3",
      image: "https://www.puma.com/",
    },
    {
      brand: "Reebok",
      color: "white",
      size: "XL",
      price: "400",
      id: "4",
      image: "https://www.reebok.com/",
    },
  ]);
});

/**
 * @swagger
 * /cloths:
 *   post:
 *     description: Get cloths
 *     parameters:
 *     - name: title
 *       description: cloth types
 *       in: body
 *       required: true
 *       type: string
 *     responses:
 *       200:
 *         description: Success
 *
 */
app.post("/cloths", (req, res) => {
  const title = req.body.title;
  res.send({ title });
});

app.listen(3000, () => {
  console.log("Running on port 3000");
});
