import Bar from "../components/Bar";
import { languages, tools } from "../data";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
            Master of Entrepreneurship &amp; Development
            </h5>
            <p className="font-semibold">Coventry University 2016 | 2018</p>
            <p className="my-3">
            <strong>Thesis:</strong> How to lead digital transformation through KPIs?
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Freelance Developer</h5>
          <div className="">
           
            <p className="my-3 text-sm">Lucky to work with the latest technologies and talented engineers.
             The digital communities in Shanghai and Brussels have opened the door to the latest
              technology and innovation and inspired me to work with like-minded entrepreneurs.</p>
          </div>
        </div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
