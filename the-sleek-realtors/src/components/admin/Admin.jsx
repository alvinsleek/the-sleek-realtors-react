import React, { useState, useEffect } from "react";
import Table  from "react-bootstrap/Table";

const Admin = () =>{
    const [rentals, setRentals] = useState([]);

    useEffect(() => {
      const fetchRentals = async () => {
        try {
          const response = await fetch('api/v1/rentals');
          const data = await response.json();
          setRentals(data);
        } catch (error) {
          console.log(error);
      }
    };
    fetchRentals();
  }, []);

  const columns = [{
    Header: 'FirstName',
    accessor:'firstName'
  },
  {
    Header: 'LastName',
    accessor:'lastName'
  },
  {
    Header: 'Email',
    accessor: 'email'
  },
  {
    Header: 'Phone',
    accessor: 'phone'
  },
  {
    Header: 'Property',
    accessor: 'property'
  },
  {
    Header: 'Move-In Date',
    accessor: 'moveInDate'
  }
]

    return(
      <Table data={rentals} columns={columns}/>
    );
        // <div>
        //     <h2>Tenants List</h2>
            
        //     <Table striped bordered hover>
        //       <thead>
        //         <tr>
        //           <th>#</th>
        //           <th>First Name</th>
        //           <th>Last Name</th>
        //           <th>Email</th>
        //           <th>Phone</th>
        //           <td>Property</td>
        //           <td>Move-In-Date</td>

        //         </tr>
        //       </thead>
        //       <tbody>
        //         <tr>
        //           <td>1</td>
        //           <td>Mark</td>
        //           <td>Otto</td>
        //           <td>markotto@gmail.com</td>
        //           <td>+3345319158</td>
        //           <td>Red Carpet Real Estate</td>
        //           <td input itemType="date">03-04-2023</td>
        //         </tr>
        //         <tr>
        //           <td>2</td>
        //           <td>Jacob</td>
        //           <td>Thornton</td>
        //           <td>@jacob@gmail.com</td>
        //           <td>+2574912712</td>
        //           <td>Fairmount Properties</td>
        //           <td>12-04-2023</td>
        //         </tr>
        //         <tr>
        //           <td>3</td>
        //           <td>Larry</td>
        //           <td>Aswan</td>
        //           <td>larry@gmail.com</td>
        //           <td>+2542832004</td>
        //           <td>Banyon Tree Realty</td>
        //           <td>30-05-2023</td>
        //         </tr>
        //       </tbody>
        //     </Table>
  
            {/* <table >
                <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Move-in Date</th>
                </tr>
                </thead>
                <tbody>
                    {tenants.map((tenant, index) => (
                        <tr key={tenant.id}>
                            <th scope="row">{index + 1}</th>
                            <th>{tenant.first_name}</th>
                            <th>{tenant.last_name}</th>
                            <th>{tenant.email}</th>
                            <th>{tenant.phone}</th>
                            <th>{tenant.move_in_date}</th>
                            </tr>
                    ))}
                    </tbody>
                
                </table> */}
        // </div>
    
};

export default Admin;