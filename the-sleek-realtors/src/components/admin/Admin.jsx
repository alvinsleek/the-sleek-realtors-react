import React, { useState, useEffect } from "react";
// import { Table } from "reactstrap";

const Admin = () =>{
    const [tenants, SetTenants] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/book").then((response) => {
            SetTenants(response.data);
        });
    }, []);

    return(
        <div>
            <h2>Tenants List</h2>
            <table >
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
                
                </table>
        </div>
    );
};

export default Admin;