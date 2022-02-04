const app = require('express')();

const db = require('./models');

// Routers
const postRouter = require('./routes/Posts');
app.use("/posts", postRouter);

db.sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log('backend running on port 5000...')
  });
});
