import Database from "nedb";


export default function todos(req, res) {
  const db = new Database({ filename: './data' })
  if (req.method === 'PUT') {
    db.loadDatabase(() => {
      db.update({ _id: req.query.id }, { $set: { completed: req.body.completed } }, {}, (_, data) => {

        const stringifiedResponse = JSON.stringify(data)
        res.setHeader('content-type', 'application/json')
        res.end(stringifiedResponse)

      })
    })
  } else {
    res.statusCode = 404;
    res.end('Please use a valid input method')
  }

}