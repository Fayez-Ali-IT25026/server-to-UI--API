import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"








const UsersCard = ({user}) => {
    return (
        <div>
            <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      
      <CardHeader>
        <CardAction>
          <h2>nothing here</h2>
        </CardAction>
        <CardTitle>NAME : {user.name}</CardTitle>
        <CardDescription>
          EMAIL : {user.email}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">View Event</Button>
      </CardFooter>
    </Card>
        </div>
    );
};

export default UsersCard;