import { Link } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import Page from "../components/Page";

function Homepage() {
  return (
    <Page title="Prototype">
      <Card className={"min-h-min w-full my-6 bg-gray-200 md:flex"}>
        <img
          src="/public/assets/Journey-Storyline-1.png"
          className="mr-6 mb-6 rounded-lg md:w-f self-center md:mb-0"
        />
        <div className="flex flex-col justify-start items-start gap-6">
          <h2 className="w-full text-stone-950 text-2xl font-bold font-mundial">
            {"End User Mobile App"}
          </h2>
          <p className="text-stone-950 text-base font-normal font-mundial">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            accusamus modi excepturi nisi ipsa nesciunt pariatur illum libero
            deserunt minima eaque ducimus odio quaerat eveniet non? Commodi,
            sit. Laudantium, illo.
          </p>
          <p className="text-stone-950 text-base font-normal font-mundial">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            accusamus modi excepturi nisi ipsa nesciunt pariatur illum libero
            deserunt minima eaque ducimus odio quaerat eveniet non?
          </p>
          <p className="text-stone-950 text-base font-normal font-mundial">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </Card>
      <Card className={"min-h-min w-full my-6 bg-gray-200 md:flex"}>
        <img
          src="/public/assets/Journey-Storyline-2.png"
          className="mr-6 mb-6 rounded-lg md:w-f self-center md:mb-0"
        />
        <div className="flex flex-col justify-start items-start gap-6">
          <h2 className="w-full text-stone-950 text-2xl font-bold font-mundial">
            {"Admin Web App"}
          </h2>
          <p className="text-stone-950 text-base font-normal font-mundial">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            totam, mollitia veniam voluptate pariatur repellat iusto quas
            laboriosam dolor aperiam odit repudiandae sapiente excepturi
            consequatur vero eum inventore beatae? Officiis! Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Veritatis sequi quidem
            perferendis rem tenetur, fugiat hic quisquam necessitatibus corrupti
            dolorem quae labore quaerat odit quia. Facilis non libero enim
            saepe?
          </p>
          <p className="text-stone-950 text-base font-normal font-mundial">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
            optio mollitia ratione veniam, delectus sunt nostrum corrupti quia
            hic, vitae, laborum doloribus libero quas harum adipisci ducimus
            esse exercitationem ex?
          </p>
          <p className="text-stone-950 text-base font-normal font-mundial">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque totam
            iusto accusantium mollitia magnam itaque, voluptates illum explicabo
            temporibus inventore ratione ex esse dicta, repudiandae dolor
            quibusdam, quas labore aliquam. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit.
          </p>
        </div>
      </Card>
      {/* TODO: set section height */}
      <section className="grid grid-cols-2 gap-6 h-full">
        <div className="h-56 md:h-52 lg:44 flex flex-col">
          <h3 className="text-stone-950 text-4xl font-bold font-mundial">
            {"Client info"}
          </h3>
          <Card className={"bg-neutral-300 flex-1"}>
            <div className="justify-start items-start gap-3.5 inline-block sm:inline-flex">
              <img
                src="/public/assets/user-vector.svg"
                className="w-12 h-12 p-2.5 rounded-full border border-black self-center"
              />
              <div className="flex-col justify-start items-start gap-2.5 inline-block sm:inline-flex">
                <div className="text-black text-2xl font-bold font-mundial">
                  {"Ana Smith"}
                </div>
                <div className="text-black text-base font-normal font-mundial">
                  {"VividSphere Technologies"}
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="h-56 md:h-52 lg:44 flex flex-col">
          <h3 className="text-stone-950 text-4xl font-bold font-mundial">
            {"App links"}
          </h3>
          <Card className={"bg-neutral-300 flex-1"}>
            <div className="flex flex-col lg:flex-row gap-6">
              <img className="h-12 w-44" src="/public/assets/App-Store.svg" />
              <img className="h-12 w-44" src="/public/assets/Google-Play.svg" />
            </div>
          </Card>
        </div>
        <div className="h-56 md:h-52 lg:44 flex flex-col col-span-full">
          <h3 className="text-stone-950 text-4xl font-bold font-mundial">
            {"Contact Form"}
          </h3>
          <Card
            className={
              "bg-lime-200 grid grid-cols-2  border-dotted border-black border-2"
            }
          >
            <div className="w-full">
              <div className="flex items-center w-full mb-6 border-b-2 border-b-slate-950">
                <label className="font-mundial font-light text-base mr-1 flex-none">
                  {"Your name"}
                </label>
                <input
                  className="bg-lime-200 h-4 w-1/2 px-1 flex-grow"
                  style={{ direction: "rtl" }}
                />
              </div>
              <div className="flex items-center w-full mb-6 border-b-2 border-b-slate-950">
                <label className="font-mundial font-light text-base mr-1 flex-none">
                  {"Issue"}
                </label>
                <input
                  className="bg-lime-200 h-4 w-1/2 px-1 flex-grow"
                  style={{ direction: "rtl" }}
                />
              </div>
              <div className="flex items-center w-full border-b-2 border-b-slate-950">
                <label className="font-mundial font-light text-base mr-1 flex-none">
                  {"Description"}
                </label>
                <textarea
                  className="bg-lime-200 h-16 w-1/2 px-1 flex-grow"
                  style={{ direction: "rtl" }}
                />
              </div>
            </div>
            <div className="w-full px-1 flex flex-col items-center justify-center">
              <img
                src="/public/assets/ant-design_cloud-upload-outlined.svg"
                className=""
              />
              <p className="text-black text-base font-normal font-mundial">
                {"Drag and Drop here"}
              </p>
              <p className="text-center text-black text-base font-normal font-mundial px-2">
                {"or"}
              </p>
              <Button
                className={"h-9 w-3/4"}
                title="Select file"
                onClick={() => {}}
              />
            </div>
          </Card>
        </div>
      </section>
      <div className="w-full flex justify-center my-12 py-12">
        <Button className={"w-1/2 h-9"} title="Submit" onClick={() => {}} />
      </div>
      <section className="grid grid-cols-2 p-6 border-t-2 border-t-black">
        <div className="w-full justify-center items-center inline-flex group">
          <Link
            to="/privacy-policy"
            className="text-stone-950 text-base font-bold font-mundial group-hover:text-gray-700"
          >
            {"Privacy Policy"}
          </Link>
        </div>
        <div className="w-full justify-center items-center inline-flex group">
          <Link
            to="/terms-and-conditions"
            className="text-stone-950 text-base font-bold font-mundial group-hover:text-gray-700"
          >
            {"Terms and Conditions"}
          </Link>
        </div>
      </section>
    </Page>
  );
}

export default Homepage;
