import { Badge } from "react-bootstrap";
const MyBadge = (props) => {
  return (
    <h2>
      <Badge variant={props.color}> {props.text} </Badge>
    </h2>
  );
};
export default MyBadge;
