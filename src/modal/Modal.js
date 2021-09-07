import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import Background from "../components/Background";
import ModalWrapper from "../components/ModalWrapper";
import ModalContent from "../components/ModalContent";
import CloseModalButton from "../components/CloseModalButton";
import PlusIcon from "../components/PlusIcon";
import "./Modal.css";

function Modal({ showModal, setShowModal, listItem, insuranceArr }) {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent className="modal_body">
                <div className="modal_header">
                  <div className="modal_title">{listItem.title} </div>
                </div>
                <section className="modal_desc">{listItem.description}</section>
                <section className="modal_coverd_list">
                  <div className="divider"></div>
                  {listItem.covered.map((coveredlist, index) => (
                    <div key={index} className="modal_covered">
                      <PlusIcon className="add_icon"></PlusIcon>
                      <p>
                        <span>{coveredlist}</span>
                      </p>
                    </div>
                  ))}
                </section>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
}

export default Modal;
