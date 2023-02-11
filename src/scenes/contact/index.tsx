import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

import { SelectedPage } from "@/shared/types";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HeaderText from "@/shared/HeaderText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export default function Contact({ setSelectedPage }: Props) {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const handleSubmit = async (e: any) => {
    const isValid = await trigger();

    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HeaderText>
            <span className="text-primary-500">Join Now</span> To Get In Shape
          </HeaderText>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
            distinctio earum rem rerum, ipsam exercitationem itaque, voluptate
            doloribus, culpa placeat unde deleniti iusto numquam quos
            consequuntur quasi at repellat corporis?
          </p>
        </motion.div>

        {/* Form and Image */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-10 basis-3/5 md:mt-0"
          >
            <form
              method="POST"
              action="https://formsubmit.co/"
              target="_blank"
              onSubmit={handleSubmit}
            >
              <input />
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
