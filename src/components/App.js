import React, { useState, useEffect } from "react";
//Use ant design component
import { Skeleton } from 'antd';
//Components
import { NavBar, ContactForm , ContactTable } from "./";
//Helpers
import { getContacts , apiRequest, deleteContact} from '../helpers/utils';

const App = () => {
  //contact-list
  const [list, setList] = useState([]);
  //flag for showing/hidding drawer 
  const [visible, setVisible] = useState(false);
  //values for contact form in drawer
  const [values,setValues] = useState({});
  //for handling loading
  const [loading,setLoading] = useState(false);
  //generating id for new contact
  const [ContactID,setNewContactID] = useState(11);

  //function which shows the contact form / side drawer
  const showDrawer = () => {
    setVisible(true);
  };

  //function for hiding the contact form / side drawer
  const onClose = () => {
    setVisible(false);
  };

  //function for handling the save / submit action in contact form 
  //PUT and POST Api requests
  const onFinish = async(inputs) => {

    let type = 'POST';
    //if present already , make a put request
    const findInList = list.findIndex((item) => item.id === inputs.id);
    if(findInList !== -1){
      type = 'PUT'; 
    }

    setLoading(true);

    const data = await apiRequest(type,'',inputs);    
    const index = list.findIndex(item => item.id === data.values.id);
    if(index !== -1 ){
      //update in list
      list[index] = data.values;
      setList(list);
   
    }else{
      //add in list
      setList([data.values,...list]);
    }
    setLoading(false);
  
  }

  //function for handling add contact action
  const handleAdd = () => {
    setNewContactID(1+ContactID);
    setValues({ id:ContactID});
    showDrawer();
  }

  //function for updating the contact
  const handleEdit = (contactId) => {

    //finding the contact 
    const index = list.findIndex(contact => contact.id===contactId);
    if(index !== -1)
    {
      //set values for pre-loading the contact form data / side drawer field values
      const contact = list[index];
      setValues(contact);
    }
      showDrawer();
  }

  //function for deleting the contact
  const handleDelete = async(id) => {
    
    setLoading(true);
    
    await deleteContact(id);
    
    const updatedList = list.filter((item)=> {
        return item.id !== id;
    });
    
    setList(updatedList);
    setLoading(false);
  }

  //loading the contacts from an api 
  useEffect(() => {
    loadData();
  }, []);

  //function for handling the loaded contacts
  const loadData = async() => {

    setLoading(true);
    //fetching the contacts
    const data = await getContacts();
    //saving in state i.e. list
    const formatList = data.map((item) => {
      return { 
        id:item.id,
        username:item.username,
        email:item.email,
        phone:item.phone,
        website:item.website,
        street:item.address.street,
        city:item.address.city,
        zipcode:item.address.zipcode
    }});

    setList(formatList);
    setLoading(false);
  } 

  return (
    <div className="App">

      <NavBar onClose={onClose} handleAdd={handleAdd} />
      <ContactForm visible={visible} loading={loading} values={values} onFinish={onFinish} onClose={onClose} /> 
      <ContactTable list={list} handleEdit={handleEdit} handleDelete={handleDelete} />
      {loading && <Skeleton active />}      
   
    </div>
  );
};

export default App;
