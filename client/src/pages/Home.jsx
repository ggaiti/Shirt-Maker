import { motion, AnimatePresense } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
//vv makes framer motion animations work vv //
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
//^^ makes framer motion animations work ^^ //

const Home = () => {
  const snap = useSnapshot(state); //one current snapshot of that state
  return (
    <AnimatePresense>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>
          <motion.div className="home.content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1>
                LET'S <br className="xl:block hidden" /> DO IT.
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
                Create your unique and exclusive shirt with our brand-new 3D
                customization tool. <strong>Unleash your imagination</strong>{" "}
                and define your own style.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresense>
  );
};

export default Home;
