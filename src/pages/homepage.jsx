import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "../components/Button";
import Card from "../components/Card";
import Page from "../components/Page";

function Homepage() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [formData, setFormData] = useState({
    name: "",
    issue: "",
    description: "",
  });

  const updateDimensions = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitFile = () => {};

  const handleFormSubmit = () => {
    axios
      .post(
        `https://formcarry.com/s/${process.env["FORMCARRY_KEY"]}`,
        JSON.stringify(formData),
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      .then(({ data }) => alert(data?.message || "Sent!"))
      .catch((error) => {
        const msg = error?.message;
        console.error(error);
        return alert("ERRO", msg && `: ${msg}`);
      });
  };

  return (
    <Page title="Cartlann Care, LLC">
      <Card className={"h-full w-full my-9 bg-green1 md:flex"}>
        <div className="mr-6 h-fit">
          <iframe
            // TODO: FIX HEIGHT
            height={
              dimensions.width >= 768
                ? dimensions.height / 2 + 280
                : dimensions.height - dimensions.width / 1.9
            }
            width={
              dimensions.width >= 768
                ? dimensions.width / 2
                : dimensions.width - dimensions.width / 5.8
            }
            title="Provider Tablet Application Demo"
            src="https://xd.adobe.com/embed/4ab34711-3b01-4c37-86af-93d53ce1196b-1fe0/"
            allowFullScreen={true}
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-6">
          <h2 className="w-full text-stone-950 text-2xl font-bold font-mundial">
            {"Provider Tablet Application Demo"}
          </h2>
          <p className="text-stone-950 text-lg font-normal font-mundial">
            <p>
              With a colossal 75 million annual procedures in the US, Cartlann
              Care is poised to revolutionize procedural data management. Our
              innovative EMR software offers a cost-effective solution across
              various medical specialties, starting with Otorhinolaryngologist
              performing pre and postoperative endoscopic evaluations and Speech
              Language Pathologist (SLP's) performing Flexible Endoscopic
              Evaluation of Swallowing (FEEs) procedures.
            </p>
            <p>
              An Otorhinolaryngologist, commonly known as an Ear, Nose, and
              Throat (ENT) specialist, is a medical doctor who specializes in
              diagnosing and treating disorders and conditions related to the
              ear, nose, throat, head, and neck. This diverse field encompasses
              various subspecialties, including Rhinology (focused on the nose
              and sinuses), Laryngology (dealing with the voice and larynx),
              Otology (concerned with the ear and hearing), Head and Neck
              Surgery (addressing tumors and conditions in the head and neck
              region), and Pediatric Otolaryngology (specializing in children's
              ear, nose, and throat issues), among others. There are
              approximately 12,887 practicing Otorhinolaryngologists in the
              United States.
            </p>
          </p>
        </div>
      </Card>
      <Card className={"h-fit w-full my-9 bg-green1 md:flex"}>
        <iframe
          // TODO: FIX HEIGHT
          height={
            dimensions.width >= 768
              ? dimensions.height / 2 + 280
              : dimensions.height - dimensions.width / 1.9
          }
          width={
            dimensions.width >= 768
              ? dimensions.width / 2
              : dimensions.width - dimensions.width / 5.8
          }
          title="Provider Tablet Application Demo"
          src="https://xd.adobe.com/embed/30568e97-7d61-4540-bec9-2be243bcaefa-6505/"
          className="iframe mr-6"
          allowFullScreen={true}
        />
        <div className="flex flex-col justify-start items-start gap-6">
          <h2 className="w-full text-stone-950 text-2xl font-bold font-mundial">
            {"Provider Web Application Demo"}
          </h2>
          <p className="text-stone-950 text-lg font-normal font-mundial">
            <p>
              A Speech-Language Pathologist (SLP) is a highly trained and
              licensed healthcare professional who specializes in diagnosing,
              treating, and helping individuals of all ages with communication
              and swallowing disorders. SLPs play a crucial role in improving
              speech, language, voice, fluency, and cognitive communication
              skills. Additionally, they assist patients in overcoming
              difficulties related to swallowing, which is known as dysphagia.
              In the United States, where there are approximately 156,000
              licensed SLPs, a significant proportion, estimated to be over 40%,
              perform Flexible Endoscopic Evaluation of Swallowing (FEEs).
            </p>
            <p>
              FEEs is an instrumental assessment technique where a flexible
              endoscope is used to visualize the anatomy and function of the
              pharynx and larynx during swallowing, aiding in the diagnosis and
              management of swallowing disorders. This procedure allows SLPs to
              make precise assessments and develop tailored treatment plans for
              patients with dysphagia. Our revolutionary product allows doctors
              and healthcare providers to easily capture procedures from an iPad
              for only $300 a month. With 75,287 practicing healthcare providers
              acquiring endoscopic images (12,887 ENTs, 62,400 SLPs performing
              FEEs), we can capture 10% of this market and drive over $320
              million in cost-savings.
            </p>
          </p>
        </div>
      </Card>
      {/* TODO: set section height */}
      <section className="grid grid-cols-2 gap-6 h-full">
        <div className="h-fit md:h-60 lg:h-44 flex flex-col">
          <h3 className="text-stone-950 text-2xl sm:text-4xl font-bold font-mundial mb-6">
            {"Company Information"}
          </h3>
          <Card className={"bg-green1 flex-1"}>
            <div className="justify-start items-start gap-3.5 inline-block sm:inline-flex">
              <img
                src="/public/user-vector.svg"
                className="w-12 h-12 p-2.5 rounded-full border border-black self-center"
              />
              <div className="flex-col justify-start items-start gap-2.5 inline-block sm:inline-flex">
                <div className="text-black text-2xl font-bold font-mundial">
                  {"Alexis Quiles"}
                </div>
                <div className="text-black text-lg font-normal font-mundial">
                  {"alexis@cartlann.app"}
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="h-fit md:h-60 lg:h-44 flex flex-col">
          <h3 className="text-stone-950 text-2xl sm:text-4xl font-bold font-mundial mb-6">
            {"App Links"}
          </h3>
          <Card className={"bg-green1 flex-1"}>
            <div className="flex flex-col lg:h-full lg:items-center lg:flex-row gap-6">
              <img className="h-12 w-44" src="/public/App-Store.svg" />
              <img className="h-12 w-44" src="/public/Google-Play.svg" />
            </div>
          </Card>
        </div>
        <div className="h-fit md:h-60 lg:44 flex flex-col col-span-full">
          <h3 className="text-stone-950 text-4xl font-bold font-mundial mb-6">
            {"Contact Form"}
          </h3>
          <Card
            className={
              "bg-green1 grid grid-cols-1 border-dotted border-black border-2"
            }
          >
            <div className="w-full">
              <div className="flex items-center w-full mb-6 border-b-2 border-b-slate-950">
                <label className="font-mundial font-light text-lg mr-1 flex-none">
                  {"Your Name"}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="bg-green1 h-4 w-1/2 px-1 flex-grow"
                  style={{ direction: "rtl" }}
                />
              </div>
              <div className="flex items-center w-full mb-6 border-b-2 border-b-slate-950">
                <label className="font-mundial font-light text-lg mr-1 flex-none">
                  {"Issue"}
                </label>
                <input
                  type="text"
                  name="issue"
                  value={formData.issue}
                  onChange={handleFormChange}
                  className="bg-green1 h-4 w-1/2 px-1 flex-grow"
                  style={{ direction: "rtl" }}
                />
              </div>
              <div className="flex items-center w-full border-b-2 border-b-slate-950">
                <label className="font-mundial font-light text-lg mr-1 flex-none">
                  {"Description"}
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleFormChange}
                  className="bg-green1 h-16 w-1/2 px-1 flex-grow"
                  style={{ direction: "rtl" }}
                />
              </div>
            </div>
            {/* <div className="w-full px-1 flex flex-col items-center justify-center">
              <img
                src="/public/ant-design_cloud-upload-outlined.svg"
                className=""
              />
              <p className="text-black text-lg font-normal font-mundial">
                {"Drag and Drop here"}
              </p>
              <p className="text-center text-black text-lg font-normal font-mundial px-2">
                {"or"}
              </p>
              <Button
                className={"h-9 w-3/4"}
                title="Submit file"
                onClick={handleSubmitFile}
              />
            </div> */}
          </Card>
        </div>
      </section>
      <div className="w-full flex justify-center my-12 py-12">
        <Button
          className={"w-1/2 h-9"}
          title="Submit"
          onClick={handleFormSubmit}
        />
      </div>
      <section className="grid grid-cols-2 p-6 border-t-2 border-t-black">
        <div className="w-full justify-center items-center inline-flex group">
          <Link
            to="/privacy-policy"
            className="text-stone-950 text-lg font-bold font-mundial group-hover:text-gray-700"
          >
            {"Privacy Policy"}
          </Link>
        </div>
        <div className="w-full justify-center items-center inline-flex group">
          <Link
            to="/terms-and-conditions"
            className="text-stone-950 text-lg font-bold font-mundial group-hover:text-gray-700"
          >
            {"Terms & Conditions"}
          </Link>
        </div>
      </section>
    </Page>
  );
}

export default Homepage;
