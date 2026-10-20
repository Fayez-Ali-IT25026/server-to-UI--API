"use client"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
// import { redirect } from "next/dist/server/api-utils";   NOT THIS 
import { redirect } from "next/navigation";

const AddNewUsers = () => {





const handdleAddNewUser = async(e) => {
e.preventDefault();

const formData = new FormData (e.currentTarget);
const newUser = Object.fromEntries(formData.entries());


console.log(newUser);



const response = await fetch("http://localhost:5000/users",{
    // method ='post'
    method :'post',
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(data),
     body: JSON.stringify(newUser),
    
   });


   console.log('respons from server',response)
// const result = await response.json();
// console.log(result);

const afterSubmit = await response.json();
if(afterSubmit.insertedId){
    console.log('user added successfully');
    redirect('/users');
}

}






    return (
        <div>
            <form onSubmit={handdleAddNewUser}>
<FieldGroup>
      <Field>
        <FieldLabel htmlFor="fieldgroup-name" >Name</FieldLabel>
        <Input id="fieldgroup-name" placeholder="Jordan Lee" name='name' />
      </Field>
      <Field>
        <FieldLabel htmlFor="fieldgroup-email" >Email</FieldLabel>
        <Input
          id="fieldgroup-email"
          type="email"
          name = "email"
          placeholder="name@example.com"
        />
        <FieldDescription>
          We&apos;ll send updates to this address.
        </FieldDescription>
      </Field>
      <Field orientation="horizontal">
        <Button type="reset" variant="outline">
          Reset
        </Button>
        <Button type="submit">Submit</Button>
      </Field>
    </FieldGroup>
            </form>
        </div>
    );
};

export default AddNewUsers;