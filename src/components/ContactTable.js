import React from 'react';
//Use ant design component
import {Button} from 'antd';

//Contacts table for visualizing the contact in the table format
const ContactTable = (props) => {
    const { list , handleEdit , handleDelete} = props;

    return (
        <div>
            <table id='contact-table'>
                <thead>
                    <tr>
                    <th> S.No </th>
                    <th> Name </th>
                    <th> Email </th>
                    <th> Street </th>
                    <th> City </th>
                    <th> Zip code </th>
                    <th> Phone </th>
                    <th> Website </th>
                    <th> Action </th>
                   </tr>
                </thead>
                <tbody>
                    {list && list.map((contact,index) => {
                        return  <tr key={contact.id}>
                            <td> {index+1} </td>
                            <td> { contact.username} </td>
                            <td> { contact.email} </td>
                            <td>{contact.street}</td>
                            <td>{contact.city}</td>
                            <td>{contact.zipcode}</td>
                            <td> { contact.phone} </td>
                            <td> { contact.website} </td>
                            <td className='action'> <Button type="link" onClick={() => handleEdit(contact.id)}><i className="fas fa-pencil-alt"></i></Button>  <Button type='link' style={{color:'red'}} onClick = {() => handleDelete(contact.id)}><i className="fas fa-trash"></i></Button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default ContactTable;