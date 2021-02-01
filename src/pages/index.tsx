import React, { useEffect, useState } from "react";
import Head from "next/head";

import { WebcamCapture } from "../components/webcam";

export default function Home() {
  return (
    <>
      <Head>
        <title>Webcam</title>
      </Head>
      <div className="max-w-7xl max-h-screen mx-auto px-4 sm:px-2 ">
        <WebcamCapture />
      </div>
    </>
  );
}
