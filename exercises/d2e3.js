// https://tech-docs.corndel.com/express/body-and-headers.html

import express from 'express'

const app = express()
app.use(express.json()) // <-- important!

const alarms = [
  {
    time: '08:30',
    message: 'Wake up!'
  },
  {
    time: '17:00',
    message: 'Go home!'
  }
]

app.get('/alarms', (req, res) => {

  res.json(alarms);
})

app.get('/alarms/:index', (req, res) => {
 
  const index =parseInt(req.params.index)
  
  if (index >= 0 && index < alarms.length) {
    res.json(alarms[index]);
  } else {
    res.status(404).send('Alarm not found');
  }

})

app.post('/alarms', (req, res) => {
  /**
   * Request contains a new alarm in the req.body
   * Push it to the end of the alarms array
   * Respond with a 201 status code
   */
  const newAlarm = req.body;
  alarms.push(newAlarm);
  res.status(201).json(newAlarm);
})


export default app
