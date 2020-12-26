import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Modal } from "../../Shared/Modal";
import ServiceAction from "../../Store/service/serviceAction";
import { Toolkit } from "../Toolkit";
import { ToolkitCategoryContent } from "../ToolkitCategoryContent";
import { Github } from "../Developer/Github";
import { WorkExperience } from "../Developer/WorkExperience";
import { BooksCourses } from "../Developer/BooksCourses";

import * as Styled from "./styled";

const container = document.getElementById("modal");

const tabs = [
  { label: "my_toolkit", title: "toolkit" },
  { label: "github", title: "github" },
  { label: "work_experience", title: "work-experience" },
  { label: "education", title: "education" },
  { label: "CV", title: "cv" },
];

export const ModalPortal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: any) => state.service.isModalOpen);
  const content = useSelector((state: any) => state.service.content);
  const element = document.createElement("div");

  const [chosenContent, setChosenContent] = useState("");
  const [chosenCategory, setChosenCategory] = useState("languages");

  useEffect(() => {
    setChosenContent(content);
  }, [content]);

  useEffect((): any => {
    if (container && element) {
      container.appendChild(element);
      return () => container.removeChild(element);
    }
  }, [element]);

  const handleChosenCategory = (id: string) => {
    setChosenCategory(id);
  };

  const handleChooseContent = (e: any, title: string) => {
    e.preventDefault();
    setChosenContent(title);
  };

  const isChosen = tabs.find(({ title }) => title === chosenContent);

  return (
    isModalOpen &&
    createPortal(
      <Modal
        isOpen={isModalOpen}
        handleClose={() => dispatch({ type: ServiceAction.CLOSE_MODAL })}
      >
        <Styled.Tabs>
          {tabs.map((tab) => (
            <Styled.Tab
              key={tab.title}
              onClick={(e: any) => handleChooseContent(e, tab.title)}
              active={tab.title === chosenContent}
            >
              {t(tab.label)}
            </Styled.Tab>
          ))}
        </Styled.Tabs>

        <h2>{isChosen ? t(isChosen.label) : ''}</h2>

        {chosenContent === "toolkit" && (
          <Styled.InfoContainer>
            <Toolkit setChosenCategory={handleChosenCategory} id="toolkit" />
            <ToolkitCategoryContent chosenCategory={chosenCategory} />
          </Styled.InfoContainer>
        )}
        {chosenContent === "github" && <Github />}
        {chosenContent === "work-experience" && <WorkExperience />}
        {chosenContent === "education" && <BooksCourses />}
      </Modal>,
      element
    )
  );
};
