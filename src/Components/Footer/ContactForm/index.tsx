import React, { memo } from "react";
import { Form, Field } from "react-final-form";
import { useTranslation } from "react-i18next";
import { TextArea } from "./TextArea";
import { Contacts } from "../Contacts";
import * as Styled from "./styled";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

interface Values {
  email: string;
}

const onSubmit = async (values: Values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, undefined, 2));
};

export const ContactForm: React.FC = memo(() => {
  const { t } = useTranslation();
  return (
    <Styled.Container>
      <Styled.Title>{t("contact_me")}</Styled.Title>
      <Contacts />
      <Styled.Text>{t("write_me_a_message")}</Styled.Text>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <Styled.Form onSubmit={handleSubmit}>
            <Field<string>
              name="message"
              component={TextArea}
              placeholder={t("enter_your_message")}
              rows="6"
            />
            <Styled.EmailWrapper>
              <Styled.Button type="submit">{t("send")}</Styled.Button>
            </Styled.EmailWrapper>
          </Styled.Form>
        )}
      />

      <Styled.Policy>
        <p>{t("disclaimer")}</p>
      </Styled.Policy>
    </Styled.Container>
  );
});
