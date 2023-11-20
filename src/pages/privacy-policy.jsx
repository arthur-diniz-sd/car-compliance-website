import Page from "../components/Page";
import Card from "../components/Card";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <Page title="Privacy Policy">
      <Card className={"bg-gray-200 "}>
        <p>
          <p>
            <p>Company Name</p>
            <p>App Name</p>
            <p>Contact</p>
            <p>Email</p>
            <p>Company Address</p>
            <p>Jurisdiction</p>
          </p>

          <p className="mb-4">Privacy Policy for App Name</p>

          <p className="mb-2">
            <p>1. Introduction</p>
            This Privacy Policy applies to App Name, operated by Company Name.
            It explains how we collect, use, disclose, and safeguard your
            information when you use our App.
          </p>

          <p className="mb-2">
            <p>2. Information Collection and Use</p>
            <p>
              We collect various types of information for providing and
              enhancing our service.
            </p>
            <p className="mt-2">
              Types of Data Collected Personal Data: While using our App, we may
              ask you to provide certain personally identifiable information
              that can be used to contact or identify you ("Personal Data").
              This may include, but is not limited to, email address, name, and
              phone number.
            </p>
            <p className="mt-2">
              Usage Data: This data is generated either by the use of the App or
              from the App infrastructure itself (for example, the duration of a
              page visit).
            </p>
          </p>

          <p className="mb-2">
            <p>3. Use of Data</p>
            <p>
              Company Name uses the collected data for various purposes,
              including to:
            </p>
            <p>Provide and maintain our App</p>
            <p>Notify you about changes to our App</p>
            <p>
              Allow you to participate in interactive features of our App when
              you choose to do so
            </p>
            <p>Provide customer care and support</p>
            <p>
              Provide analysis or valuable information so that we can improve
              the App
            </p>
            <p>
              Monitor the usage of the App Detect, prevent, and address
              technical issues
            </p>
          </p>

          <p className="mb-2">
            <p>4. Data Transfer</p>
            <p>
              Your information, including Personal Data, may be transferred to —
              and maintained on — computers located outside of your state,
              province, country, or other governmental jurisdiction where the
              data protection laws may differ from those of your jurisdiction.
            </p>
          </p>

          <p className="mb-2">
            <p>5. Disclosure of Data</p>
            <p className="mb-2">
              Company Name may disclose your Personal Data in good faith belief
              that such action is necessary to:
            </p>
            <p>
              <p>Comply with a legal obligation</p>
              <p>Protect and defend the rights or property of Company Name</p>
              <p>
                Prevent or investigate possible wrongdoing in connection with
                the App
              </p>
              <p>
                Protect the personal safety of users of the App or the public
              </p>
              <p>Protect against legal liability</p>
            </p>
          </p>

          <p className="mb-2">
            <p>6. Security of Data</p>
            <p>
              The security of your data is important to us but remember that no
              method of transmission over the Internet or method of electronic
              storage is 100% secure. We strive to use commercially acceptable
              means to protect your Personal Data.
            </p>
          </p>

          <p className="mb-2">
            <p>7. Service Providers</p>
            We may employ third-party companies and individuals to facilitate
            our App, provide the App on our behalf, perform App-related
            services, or assist us in analyzing how our App is used. These third
            parties have access to your Personal Data only to perform these
            tasks on our behalf and are obligated not to disclose or use it for
            any other purpose.
          </p>

          <p className="mb-2">
            <p> 8. Links to Other Sites</p>
            <p>
              Our App may contain links to other sites that are not operated by
              us. If you click a third-party link, you will be directed to that
              third party's site. We strongly advise you to review the Privacy
              Policy of every site you visit.
            </p>
          </p>

          <p className="mb-2">
            <p>9. Changes to This Privacy Policy</p>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
            </p>
          </p>

          <p className="mb-2">
            <p>10. Contact Us</p>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at Contact Email.
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

export default PrivacyPolicy;
