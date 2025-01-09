import Bar from "../components/Bar";
import { languages, tools } from "../data";
import { motion } from "framer-motion";

export async function getStaticProps() {
  try {
    const urlBase = process.env.NEXT_URL ? process.env.NEXT_URL : "www.cesarhertz.com/";
    const data = await fetch(`${urlBase}api/hello`);
    const posts = await data.json();
    return {
      props: { posts },
      revalidate: 60,
    }
  }

  catch (error) {
    console.error('Error fetching posts:', error);
    return {
      props: { posts: ["err"] }, // Provide fallback empty data
      revalidate: 60,
    }
  }
}


const Resume = (
  { posts }
) => {
  console.log("posts", posts);

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }} className="px-6 py-2">
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
          <h5 className="my-3 text-2xl font-bold">Software Developer</h5>
          <div className="">

            <p className="my-3 text-sm">Lucky to work with cutting edge technologies and talented engineers.
              The digital communities in Copenhagen, Lyon, Shanghai and Brussels have opened the door to the latest
              technologies & innovations, inspiring me to work with like-minded entrepreneurs.</p>
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
    </motion.div>
  );
};

export default Resume;
