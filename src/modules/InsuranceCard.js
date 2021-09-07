import React, { useState } from "react";
import Loader from "../components/Loader";
import { useAxiosGet } from "../hooks/HttpRequest";
import Modal from "../modal/Modal";

function InsuranceCard() {
  const url = `https://hedvig-staging-rest-api.vercel.app/api/perils?contractType=SE_APARTMENT_RENT&locale=en_SE`;
  let insurances = useAxiosGet(url);
  let [content] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [insuranceList, setInsuranceList] = useState({});

  // open popup on click of insurance card
  const openModal = (value) => {
    setShowModal((prev) => !prev);
    const insuranceObj = JSON.stringify(value);
    const insuranceParseObj = JSON.parse(insuranceObj);
    setInsuranceList(insuranceParseObj);
  };

  if (insurances.error) {
    content = (
      <div>
        <div className="bg-red-300 p-3">
          There was an error please refresh or try again later.
        </div>
      </div>
    );
  }

  if (insurances.loading) {
    content = <Loader></Loader>;
  }
  // display list of inurance data
  if (insurances.data) {
    content = insurances.data.map((item, index) => (
      <div key={index} className="items_cls">
        <div className="h-img" onClick={() => openModal(item)}>
          <img
            src={item.icon.variants.light.svgUrl}
            alt="lists"
            className="items_img"
          ></img>
        </div>
        <h4 className="mt-2 title-cls">{item.title}</h4>
      </div>
    ));
  }
  return (
    <>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        listItem={insuranceList} />

      <div className="container">
        <div className="head-section">
          <h4>OUR COVERAGE</h4>
          <p className="mt-5">
            Extensive coverage for you and your family, your house and your
            belongings. All risk is always included. Click the icons for more
            info.
          </p>
        </div>
        <div className="flex-container animate-bottom">{content}</div>
      </div>
    </>
  );
}

export default InsuranceCard;
