const express = require('express')
const router = express.Router({mergeParams: true})

const Schema = require("../db/schema.js");
const CompanyModel = Schema.CompanyModel;

router.get('/', (req, res) => {
    const companyId = req.params.companyId

    CompanyModel.findById(companyId)
        .then((company) => {
            const snowboards = company.snowboards

            res.render('snowboards/index', {
                company: company
            })
        })
        .catch((error) => {
            console.log(error)
        })
})

module.exports = router