import Page from "../components/Page";
import Card from "../components/Card";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <Page title="Terms and Conditions">
      <Card className={"bg-gray-200 "}>{""}</Card>
      <div className="flex justify-center">
        <Link to="/">
          <Button className={"h-9 w-72 mt-12"} title="Go back" />
        </Link>
      </div>
    </Page>
  );
};

export default TermsAndConditions;
