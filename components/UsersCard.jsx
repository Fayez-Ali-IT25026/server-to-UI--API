"use client";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import { useRouter } from "next/navigation";
import UpdateUser from "./UpdateUser";







const UsersCard = ({user}) => {


    const router = useRouter();






const handeleDeleteUser = async (id) =>
{


    const res = await fetch(`http://localhost:5000/users/${id}`,{


        method : 'DELETE' ,
    });


    const afterDelete = await res.json();
    console.log('after delete', afterDelete);


    // if(afterDelete.deletCount > 0)

    if(afterDelete.deletedCount > 0)
    {

        console.log('user delete successfully');
        router.refresh()

    }


}











































    return (
    //     <div className="gried">
    //         <Card className="relative mx-auto w-full max-w-sm pt-0">
    //   <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      
    //   <CardHeader>
    //     <CardAction>
    //       <h2>nothing here</h2>
    //     </CardAction>
    //     <CardTitle>NAME : {user.name}</CardTitle>
    //     <CardDescription>
    //       EMAIL : {user.email}
    //     </CardDescription>
    //   </CardHeader>
    //   <CardFooter>
    //     <Button className="w-full">View Event</Button>
    //   </CardFooter>
    // </Card>
    //     </div>




  <div>
  {/* <Card className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"> */}
<Card className="relative w-full pt-0">
  
    <CardHeader className="space-y-3 pb-4">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          User Profile
        </span>

        <span className="text-xl">👤</span>
      </div>

      <div>
        <CardTitle className="text-xl font-bold tracking-tight">
          {user.name}
        </CardTitle>

        <CardDescription className="mt-2 break-all text-sm">
          {user.email}
        </CardDescription>
      </div>
    </CardHeader>

    {/* Card Footer */}
    <CardFooter className="border-t bg-muted/30 pt-4">
      <Link href={`/users/${user._id}`}>
      <Button className="w-full rounded-xl transition-all group-hover:shadow-md">
        View Details
      </Button>
      </Link>












{/* <Button className="mx-4">
        edite
      </Button> */}

<UpdateUser user={user}></UpdateUser>















      {/* <Button className="" onClick={handeleDeleteUser}  variant= 'destructive'> */}
      <Button
  className=""
  onClick={() => handeleDeleteUser(user._id)}
  variant="destructive"
>
       Delete
      </Button>





    </CardFooter>
  </Card>
 </div>
    );
};

export default UsersCard;