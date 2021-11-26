const { events } = require('./data');

// filter slug
export default (req, res) => {
  // req.query menampilkan hasil query: {slug:'sss'}
  // krna kita mengetikan localhost:3000/api/events/sss
  console.log(req.query);
  // filter singleEvt
  const singleEvt = events.filter((ev) => ev.slug === req.query.slug);
  if (req.method === 'GET') {
    // update and show depending on singleEvt
    res.status(200).json(singleEvt);
  } else {
    // if not
    res.status(404).json({ message: 'server dont allowed response' });
  }
};
