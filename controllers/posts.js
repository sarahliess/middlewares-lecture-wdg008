const pool = require("../db");

const getAllPosts = async (req, res) => {
  try {
    const { rows: allPosts } = await pool.query("SELECT * FROM posts");
    res.status(200).json(allPosts);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const getSinglePost = async (req, res) => {
  const { id } = req.params;
  try {
    const {
      rows: [singlePost],
    } = await pool.query("SELECT * FROM posts WHERE id=$1", [id]);
    res.status(200).json(singlePost);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

module.exports = { getAllPosts, getSinglePost };
