import Page from "../components/Page";
import Card from "../components/Card";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <Page title="Terms and Conditions">
      <Card className={"bg-green1 "}>
        <p className="mb-6">
          <p>App Name</p>
          <p>Company Name</p>
          <p>State Of Entity</p>
          <p>Support Email</p>
        </p>
        <p className="my-6">Terms and Conditions</p>
        <p>
          <p className="my-6">
            <p>1. Acceptance of Terms</p>
            <p>
              By accessing and using App Name("the App"), users ("you") agree to
              comply with these Terms and Conditions ("Terms"). These Terms
              govern your access to and use of the App and any services provided
              through the App.
            </p>
          </p>
          <p className="my-6">
            <p>2. User Conduct</p>
            <p>
              You agree to use the App only for lawful purposes. You must not
              use the App in a way that infringes the rights of, restricts, or
              inhibits anyone else's use and enjoyment of the App. Prohibited
              behavior includes harassing or causing distress or inconvenience
              to any other user, transmitting obscene or offensive content, or
              disrupting the normal flow of dialogue within the App.
            </p>
          </p>
          <p className="my-6">
            <p>3. Intellectual Property</p>
            <p>
              The content on the App, including text, graphics, logos, images,
              as well as the compilation thereof, and any software used on the
              App, is the property of Company Name or its suppliers and
              protected by copyright and intellectual property laws.
            </p>
          </p>
          <p className="my-6">
            <p>4. Limitation of Liability</p>
            <p>
              Company Name shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages, or any loss of
              profits or revenues, whether incurred directly or indirectly, or
              any loss of data, use, goodwill, or other intangible losses,
              resulting from (a) your access to or use of or inability to access
              or use the App; (b) any conduct or content of any third party on
              the App, including without limitation, any defamatory, offensive,
              or illegal conduct of other users or third parties.
            </p>
          </p>
          <p className="my-6">
            <p>5. Disclaimer</p>
            <p>
              The App and all information, content, materials, products, and
              services included on or otherwise made available to you through
              the App are provided by Company Name on an "as is" and "as
              available" basis, unless otherwise specified in writing. Company
              Name makes no representations or warranties of any kind, express
              or implied, as to the operation of the App or the information,
              content, materials, products, or services included on or otherwise
              made available to you through the App.
            </p>
          </p>
          <p className="my-6">
            <p>6. Modifications to the Terms</p>
            <p>
              Company Name reserves the right, at its sole discretion, to modify
              or replace these Terms at any time. If a revision is material, we
              will provide at least 30 days' notice prior to any new terms
              taking effect.
            </p>
          </p>
          <p className="my-6">
            <p>7. Governing Law</p>
            <p>
              These Terms shall be governed and construed in accordance with the
              laws of State Of Entity, without regard to its conflict of law
              provisions.
            </p>
          </p>
          <p className="my-6">
            <p>8. Contact Information</p>
            <p>
              For any questions about these Terms, please contact us at Support
              Email.
            </p>
          </p>
        </p>
      </Card>
      <div className="flex justify-center">
        <Link to="/">
          <Button className={"h-9 w-72 mt-12"} title="Go back" />
        </Link>
      </div>
    </Page>
  );
};

export default TermsAndConditions;
