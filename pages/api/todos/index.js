import Database from "nedb";

export default function todos(req, res) {
  const db = new Database({ filename: './data' })
  if (req.method === 'POST') {
    db.loadDatabase(() => {
      const input = req.body;
      db.insert(input, (_, data) => {
        const stringifiedResponse = JSON.stringify(data);
        res.setHeader('content-type', 'application/json');
        res.end(stringifiedResponse);
      })
    })
  } else if (req.method === 'GET') {
    db.loadDatabase((err) => {
      db.find({}, (_, data) => {
        const stringifiedResponse = JSON.stringify(data);
        res.setHeader('content-type', 'application/json');
        res.end(stringifiedResponse)
      })
    })
  } else {
    res.statusCode = 404;
    res.end('Please use a valid input method')






  }
}