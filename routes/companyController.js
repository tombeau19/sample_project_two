const express = require('express')
const router = express.Router()

const Schema = require("../db/schema.js");
const CompanyModel = Schema.CompanyModel;

router.get('/', (req, res) => {
    CompanyModel.find({})
        .then((companies) => {
            res.render('companies/index', {
                companies: companies
            })
        })
        .catch((error) => {
            console.log(error)
        })
})

module.exports = router