const connection = require("../config/database");

// Create
exports.createRecord = (req, res) => {
  const { name, title} = req.body;
  const createQuery = 'INSERT INTO employee (  name, title) VALUES (?, ?)';
  const createValues = [ name, title];
  connection.query(createQuery, createValues, (error, result) => {
    if (error) {
      console.error('Error creating record: ', error);
      return res.status(500).json({ error: 'Failed to create record' });
    }
    return res.status(200).json({ message: 'Record created'});
  });
};
// exports.createRecord = (req, res) => {
//   const { id, name, title} = req.body;
//   const createQuery = 'INSERT INTO blogs (id, name, title) VALUES (?, ?, ?)';
//   const createValues = [id, name, title];
//   connection.query(createQuery, createValues, (error, result) => {
//     if (error) {
//       console.error('Error creating record: ', error);
//       return res.status(500).json({ error: 'Failed to create record' });
//     }
//     return res.status(200).json({ message: 'Record created' });
//   });
// };
//, insertId: result.insertId

// Read
exports.getRecords = (req, res) => {
  const readQuery = 'SELECT * FROM blogs';
  connection.query(readQuery, (error, results) => {
    if (error) {
      console.error('Error reading records: ', error);
      return res.status(500).json({ error: 'Failed to fetch records' });
    }
    return res.status(200).json(results);
  });
};

// Update
exports.updateRecord = (req, res) => {
  const { id, title } = req.body;
  const updateQuery = 'UPDATE blogs SET title = ? WHERE id = ?';
  const updateValues = [title, id];
  connection.query(updateQuery, updateValues, (error, result) => {
    if (error) {
      console.error('Error updating record: ', error);
      return res.status(500).json({ error: 'Failed to update record' });
    }
    return res.status(200).json({ message: 'Record updated' });
  });
};

// Delete
exports.deleteRecord = (req, res) => {
  const { id } = req.params;
  const deleteQuery = 'DELETE FROM blogs WHERE id = ?';
  connection.query(deleteQuery, id, (error, result) => {
    if (error) {
      console.error('Error deleting record: ', error);
      return res.status(500).json({ error: 'Failed to delete record' });
    }
    return res.status(200).json({ message: 'Record deleted' });
  });
};



//create table
exports.createTable = (req, res) => {
  const createStudents =  'CREATE TABLE student(id int AUTO_INCREMENT, studentName VARCHAR(255), age int, class VARCHAR(255), PRIMARY KEY(id))';
  connection.query(createStudents, (error, result) =>{
    if (error) {
      console.error('Error creating record:', error);
      return res.status(500).json({ error: 'Failed to create Table' });
    }
    return res.status(200).json({ message: 'Table created'});
  });
}