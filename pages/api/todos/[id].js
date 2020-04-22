import Database from "nedb";


export default function todos(req, res) {
  const db = new Database({ filename: './data' })
  if (req.method === 'PUT') {
    db.loadDatabase(() => {
      db.update({ id: req.query.id }, { $set: { completed: req.body.completed } }, {}, (_, data) => {
        res.stringifiedResponse = JSON.stringify(data)
        res.setHeader('content-type', 'application/json')
        res.end(stringifiedRespoanse)

      })
    })
  } else {
    res.statusCode = 404;
    res.end('Please use a valid input method')
  }

}