import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import { SelectedPage, BenefitType } from "@/shared/types";
import HeaderText from "@/shared/HeaderText";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quod quaerat, sequi voluptas repudiandae quas",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Hundreds of Diverse Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quod quaerat, sequi voluptas repudiandae quas",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quod quaerat, sequi voluptas repudiandae quas",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export default function Benefits({ setSelectedPage }: Props) {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <div className="md:my-5 md:w-3/5">
          <HeaderText>More Than Just Gym</HeaderText>
          <p className="text-md my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nostrum
            odio accusantium temporibus ipsam eum hic provident explicabo ipsum
            nulla!
          </p>
        </div>

        <div className="mt-5 items-center justify-between gap-8 md:flex">
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
