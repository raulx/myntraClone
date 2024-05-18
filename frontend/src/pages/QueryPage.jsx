import { useEffect } from "react";
import { useParams } from "react-router-dom";

function QueryPage() {
  const { query } = useParams();

  useEffect(() => {
    document.title = `Buy ${query.split("-").join(" ")} Online at Myntra`;

    return () => {
      document.title = "Online Shopping for Women,Men";
    };
  }, [query]);

  return <div>{query}</div>;
}

export default QueryPage;
