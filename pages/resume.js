import React, { useEffect, useState } from "react";
import Head from 'next/head';
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";
// Data
import data from "../data/portfolio.json";

const Resume = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    if (!data.showResume) {
      router.push("/");
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>hayden</title>
      </Head>
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-6 right-6">
          <Button onClick={() => router.push("/edit")} type="primary">
            Edit Resume
          </Button>
        </div>
      )}
      {/* rest of your existing code */}
    </>
  );
};

export default Resume;
