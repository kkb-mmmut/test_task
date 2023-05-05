import { useState, useEffect } from 'react';
import { firestore } from '../firebase'; 

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    firestore
      .collection('student_reg')
      .get()
      .then((snapshot) => {
        const getuser = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        console.log('users', getuser);
        setUsers(getuser);
      });
  }, []);

  return (
    <div className="home">
      <h1>Registration Detils</h1> 

      <table  border="1px" style={{ margin: "auto" }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>D0B</th>
                <th>Phone</th>
                <th>GovtID</th>
                <th>Email</th>
                <th>Sex</th>
                <th>Guardian Details</th>
                <th>Address</th>
                <th>Country</th> 
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={`user-${index}`}>
                  <td>{user.name}</td>
                  <td>{user.dob}</td>
                  <td>{user.mobile}</td>
                  <td>{user.gov_id_title+" : "+user.gov_id}</td>
                  <td>{user.email}</td>
                  <td>{user.sex}</td>
                  <td>{user.guardian_title+" : "+user.guardian}</td>
                  <td>{user.address}</td>
                  <td>{user.country}</td>  

                </tr>
              ))}
            </tbody>
          </table> 
    </div>
  );
}

export default Home;
