import React, { useState, useRef } from "react";
import { Camera, CameraType } from "react-camera-pro";

import { Logo } from "./logo";

export const WebcamCapture = () => {
  const webcamRef = useRef<CameraType>(null);
  const [showModal, setShowModal] = useState(false);
  const [isActive, setIsActive] = useState({ i: 1, state: true });
  const [showDrop, setShowDrop] = useState(false);

  const [aspectRatio, setAspectRatio] = useState({
    width: 1,
    height: 1,
  });
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [imageName, setImageName] = useState("");

  const capture = React.useCallback(() => {
    const photo = webcamRef.current.takePhoto();
    setImageSrc(photo);
  }, [webcamRef]);

  const handleWidhHEight = (w, h, i) => {
    setAspectRatio({ width: w, height: h });
    setIsActive({ i: i, state: true });
  };
  const handleOpenDrop = () => {
    setShowDrop(!showDrop);
    console.log({ showDrop });
  };
  const handleSavePhoto = () => {
    setShowModal(false);
    setImageName("");
  };

  return (
    <div>
      <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10 max-h-full">
        <nav className=" md:flex items-center space-x-10 ">
          <div className="h-10 w-10 stroke-2 mx-4">
            <Logo />
          </div>
        </nav>
        <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                onClick={() => handleOpenDrop()}
                className="ml-8 whitespace-nowrap w-32 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base  text-white bg-blue-600 "
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
              >
                Tamanhos
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {showDrop ? (
              <div
                className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 z-50"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
                onMouseLeave={() => handleOpenDrop()}
              >
                <span
                  onClick={() => handleWidhHEight(1, 1, 1)}
                  className={`block ${
                    isActive.i === 1
                      ? isActive.state
                        ? "text-gray-900"
                        : "text-gray-200"
                      : "text-gray-200"
                  } text-center cursor-pointer px-4 py-2 text-1xl hover:bg-gray-100 hover:text-gray-900`}
                  role="menuitem"
                >
                  1 x 1
                </span>
                <span
                  onClick={() => handleWidhHEight(4, 3, 2)}
                  className={`block ${
                    isActive.i === 2
                      ? isActive.state
                        ? "text-gray-900"
                        : "text-gray-200"
                      : "text-gray-200"
                  } text-center cursor-pointer px-4 py-2 text-1xl hover:bg-gray-100 hover:text-gray-900`}
                  role="menuitem"
                >
                  4 x 3
                </span>
                <span
                  onClick={() => handleWidhHEight(16, 9, 3)}
                  className={`block ${
                    isActive.i === 3
                      ? isActive.state
                        ? "text-gray-900"
                        : "text-gray-200"
                      : "text-gray-200"
                  } text-center cursor-pointer px-4 py-2 text-1xl hover:bg-gray-100 hover:text-gray-900`}
                  role="menuitem"
                >
                  16 x 9
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <div
        className=" relative bg-white shadow overflow-hidden sm:rounded-lg mx-auto  max-w-4xl"
        // style={{ position: "fixed", width: "50%", height: "30%", zIndex: 1 }}
      >
        <div className="flex justify-center items-center">
          <div className="container  items-center   ">
            <Camera
              ref={webcamRef}
              aspectRatio={aspectRatio.width / aspectRatio.height}
              // aspectRatio="cover"
              errorMessages={{
                noCameraAccessible:
                  "No camera device accessible. Please connect your camera or try a different browser.",
                permissionDenied:
                  "Permission denied. Please refresh and give camera permission.",
                switchCamera:
                  "It is not possible to switch camera to different one because there is only one video device accessible.",
                canvas: "Canvas is not supported.",
              }}
            />
          </div>
        </div>
        <div className="flex absolute bottom-0.5 left-0 w-full">
          <div className="flex-1"></div>
          <button
            className="flex-shrink-0 w-32  bg-white text-white  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 z-50"
            type="button"
            style={{ transition: "all .15s ease" }}
            onClick={() => {
              capture();
              setShowModal(true);
            }}
          >
            <div className="h-10 w-10 stroke-2 mx-4">
              <Logo />
            </div>
          </button>
          <div className="flex-1"></div>
        </div>
      </div>

      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            // onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-6 max-w-md">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className=" text-3xl font-semibold ">Preview</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-red-500 opacity-30 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    ❌
                  </button>
                </div>
                {/*body*/}
                <div className="max-w-full  p-6 justify-center items-center   ">
                  <img
                    style={{
                      width: "auto",
                      height: "auto",
                    }}
                    src={imageSrc}
                    alt="Photo"
                  />
                  <div className="p-2">
                    <div>
                      <label
                        htmlFor="name" // referencia ao ID
                        className="block text-sm pl-1 font-medium text-gray-700"
                      >
                        Informe o nome do arquivo:
                      </label>
                      <div className="mt-1 relative border-2 rounded-md shadow-sm">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={imageName}
                          onChange={(e) => setImageName(e.target.value)}
                          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 pr-12 h-8 sm:text-sm border-gray-900 rounded-md"
                          placeholder="minha-foto"
                        />
                        <div className="absolute inset-y-0 right-1 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">.jpg</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-start justify-between p-5  border-t border-solid border-gray-300 rounded-b">
                  <button
                    className="text-red-500 font-bold w-auto uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setShowModal(false)}
                  >
                    ❌ Capturar outra
                  </button>
                  <a
                    href={imageSrc}
                    className="text-green-500 w-auto font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => handleSavePhoto()}
                    download={`${imageName ? imageName : "image1"}.jpg`}
                  >
                    ✅ Baixar foto
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default WebcamCapture;
