# practical-work-t02
## TO-DO WebApp
---
version 1.0.1

Our [website](http://wsp2.course.tamk.cloud/) is a clean & responsive to-do app.

---

### Frontend

The frontend was created using a React JSX framework with a [Bootstrap](https://react-bootstrap.github.io/getting-started/introduction/)/Reactstrap toolkit. 
Each task created is appended to the array of tasks. Each task object has a `date_completed` property, and if it is `null`, then the task is considered incomplete.
If the task is complete, it's `date_completed` property will equal when the task was completed.

The `date_completed` property determines whether the task is shown in the incomplete (`= null`) list or the completed (` = date`) list.

---

### API calls

The to-do app fetches task objects from our [backend](http://wsp2.course.tamk.cloud/api) from `/task` that appends those items to the task list.
The fetched task objects have the format of:

```
{
  text: "task text here",   //string
  date_created: new Date(), //JS date initialized when constructed 
  date_completed: null      //JS date completed, initialized null
}
```
