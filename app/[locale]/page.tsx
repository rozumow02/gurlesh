"use client";

import Image from "next/image";
import { Globe, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import DownloadButton from "@/components/DownloadButton";
import logo from "@/public/images/logo1.png";
import gurles from "@/public/images/gurles.png";
import security from "@/public/images/security.png";
import frame1 from "@/public/images/Frame1.png";
import frame2 from "@/public/images/Frame2.png";
import frame3 from "@/public/images/Frame3.png";
import frame4 from "@/public/images/Frame4.png";
import Container from "@/components/Container";
import { SplitText } from "@/components/SplitText";
import { ScrollProgress } from "@/components/ScrollIndicator";

export default function Home() {
  const locale = useLocale();
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const router = useRouter();
  const t = useTranslations(); // Tarjimalarni olish uchun hook

  const images = [frame1, frame2, frame3, frame4];
  const changeLanguage = (lang: string) => {
    router.push(`/${lang}`);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const featureHover = {
    scale: 1.02,
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    transition: { duration: 0.3 },
  };

  return (
    <main className="gap-32 grid">
                <ScrollProgress />
      {/* Header */}
      <div className="bg-[var(--color-primary)] max-h-[600px]">
        <Container className="">
          <motion.header
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-between py-4"
          >
            <motion.div
              variants={itemVariants}
              className="text-2xl font-bold text-[var(--color-textPrimary)]"
            >
              <Image
                src={logo}
                alt="Gürleş logo"
                width={80}
                className="h-auto z-10  bg-cover object-cover"
              />
            </motion.div>
            <motion.div
              className="flex items-center gap-4"
            >
              <div className="flex gap-4 text-sm text-[var(--color-textSecondary)]">
                <button
                  onClick={() => changeLanguage("ru")}
                  className={
                    locale === "ru"
                      ? "text-text-color font-semibold hover:opacity-70 transition-opacity"
                      : "hover:opacity-70 transition-opacity"
                  }
                >
                  RU
                </button>
                <button
                  onClick={() => changeLanguage("en")}
                  className={
                    locale === "en"
                      ? "text-text-color font-semibold hover:opacity-70 transition-opacity"
                      : "hover:opacity-70 transition-opacity"
                  }
                >
                  EN
                </button>
                <button
                  onClick={() => changeLanguage("tm")}
                  className={
                    locale === "tm"
                      ? "text-text-color font-semibold hover:opacity-70 transition-opacity"
                      : "hover:opacity-70 transition-opacity font-medium"
                  }
                >
                  TM
                </button>
              </div>
              <DownloadButton
                text={t("header.download_app")}
                bgColor="transparent"
                showAndroid
                showApple
                textColor="black"
              />
            </motion.div>
          </motion.header>

          {/* Hero Section */}
          <motion.section
            variants={containerVariants}
            animate="visible"
            className="py-16  grid grid-cols-2"
          >
            <motion.div variants={itemVariants} className="max-w-xl mt-20">
              <h1 className="text-5xl font-bold mb-2 text-[#000004]">
                <SplitText text={t("hero.title")} />
                {/* {t("hero.title")} */}
              </h1>
              <p className="text-xl mb-6 text-[#000004]">
                {/* <SplitText text={t("hero.description")} /> */}
                {t("hero.description")}
              </p>

              <DownloadButton
                text={t("header.download_app")}
                bgColor="transparent"
                showAndroid
                showApple
                textColor="black"
              />
            </motion.div>
            <motion.div
              className=""
            >
              <Image
                src={gurles}
                alt="Phone mockup showing Gürleş app"
                width={600}
                className="h-auto z-10"
              />
            </motion.div>
          </motion.section>
        </Container>
      </div>

      {/* Why Use Section */}
      <Container>
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pt-16 px-4 pb-6 leading-7 sm:px-8 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="text-4xl font-bold mb-4 text-text-color]"
          >
            {t("why_use.title")}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-[var(--color-textSecondary)]"
          >
            {t("why_use.description")}
          </motion.p>
        </motion.section>
        

        {/* Security Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className=" px-4 sm:px-8 flex flex-col md:flex-row justify-between items-center "
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="max-w-md mb-8 md:mb-0"
          >
            <h2 className="text-2xl font-bold mb-4 text-text-color">
              {t("security.title")}
            </h2>
            <p className="mb-4 text-lg text-text-color]">
              {t("security.description1")}
            </p>
            <p className="text-text-color text-lg">
              {t("security.description2")}
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <Image
              src={security}
              alt="Phone showing secure messaging"
              width={600}
              className="rounded-3xl"
            />
          </motion.div>
        </motion.section>
      </Container>

      {/* Features Grid */}
      <Container>
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16 px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white"
        >
          {images.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                transition: { duration: 1, delay: 2 },
              }}
              className="bg-[var(--color-featureBg)] p-8 rounded-xl flex flex-col"
            >
              <div className="flex-1">
                <Image
                  src={item}
                  alt={`Feature ${index} interface`}
                  height={400}
                  
                  className="mx-auto mb-6 rounded-lg"
                />
                <div className="flex flex-col justify-end w-full">
                  <h3 className="text-2xl text-center font-bold mb-4 text-text-color">
                    {t(`features.feature${index + 1}.title`)}
                  </h3>
                  <p className="text-sm text-center text-[#7A7A7A]">
                    {t(`features.feature${index + 1}.description`)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.section>
      </Container>
      {/* Footer */}

      <motion.footer
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-[var(--color-secondary)] text-white py-16 px-4 sm:px-8 flex flex-col md:flex-row justify-between items-center"
      >
        <Container className="flex justify-between">
          <motion.div variants={itemVariants} className="max-w-md mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-2">{t("footer.title")}</h2>
          </motion.div>
          <motion.div variants={itemVariants} className="flex h-12 gap-4">
            <DownloadButton showAndroid textColor="white" text="Google Play" />
            <DownloadButton showApple text="App Store" />
          </motion.div>
        </Container>
      </motion.footer>
    </main>
  );
}
