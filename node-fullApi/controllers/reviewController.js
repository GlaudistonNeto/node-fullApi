const db = require('../models');

// model
const Review = db.reviews;

// functions

// 1. Add Reviews

const addReview = async (req, res) => {

  let data = {
      rating: req.body.rating,
      description: req.body.description
  }

  const review = await Review.create(data)
  res.status(200).send(review)

}



// 2. get all reviews

const getAllReviews = async (req, res) => {

  let reviews = await Review.findAll({})
  res.status(200).send(reviews)

}

module.exports = {
  addReview,
  getAllReviews
}
