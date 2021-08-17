//Base url 
const url = "https://jsonplaceholder.typicode.com/users";

//function for making GET request to api for fetching the contacts
export const getContacts = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Something went wrong !!!!!", error);
  }
};

//function for making DELETE request via api for deleting the contact 
export const deleteContact = async (id) => {
    try {
      return await fetch(url+`/${id}`,{method:'DELETE'});

    } catch (error) {
      console.log("Something went wrong !!!!", error);
    }
  };
  
//function for making PUT / POST api request for updating / adding new contact 
export const apiRequest = async (Type, addUrl, values) => {

    try {
    const addInUrl = Type==='PUT'?'/1':''

    const option = {
      method: Type,
      headers: {
        Accept: "application/json",
        "content-Type": "application/json",
      },
      body: JSON.stringify({ values }),
    };

    const apiData = await fetch(url+addInUrl,option);

    const data = await apiData.json();

    return data;

    } catch (error) {
        console.log("Something went wrong !!!!!!", error);
  }

};
