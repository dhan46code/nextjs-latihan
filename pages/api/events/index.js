// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// call data.json use require
// and if req.method same with get showing data if not (like PUT,or POST)dont show
const { events } = require('./data');
export default (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json(events);
  } else {
    res.status(404).json({ message: 'server not allowed' });
  }
};
