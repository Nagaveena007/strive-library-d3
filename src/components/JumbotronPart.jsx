import { Jumbotron, Container } from "react-bootstrap";
const JumbotronPart = () => {
  return (
    <Jumbotron fluid className="no-gutter">
      <>
        <img
          src=""
          alt=""
          style={{
            height: "40vh",
            objectFit: "cover",
            width: "100%",
            backgroundImage:
              "url(" +
              "https://images.unsplash.com/photo-1518373714866-3f1478910cc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxOTEwMTR8MHwxfHNlYXJjaHw0fHxib29rJTIwc3RvcmV8ZW58MHx8fHwxNjMzMjU2ODYz&ixlib=rb-1.2.1&q=80&w=1080&utm_source=eduflow&utm_medium=referral" +
              ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <h1>Strive Books</h1>
      </>
    </Jumbotron>
  );
};
export default JumbotronPart;
