import React, { memo } from "react";
import { Form, Field } from "react-final-form";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useSnackbar } from "notistack";

import { TextInput } from "./TextInput";
import { TextArea } from "./TextArea";
import { Contacts } from "../Contacts";
import * as Styled from "./styled";

interface Values {
  email: string;
  message: string;
}

export const ContactForm: React.FC = memo(() => {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (values: Values) => {
    if (!values.email || !values.message) {
      enqueueSnackbar("There is at least one empty field", {
        variant: "warning",
      });
      return;
    }
    await axios
      .post(
        "https://getform.io/f/d709b72b-d30b-4316-9cc1-4d1d33778a8b",
        values,
        { headers: { Accept: "application/json" } }
      )
      .then(function (response) {
        if (response.data.success) {
          enqueueSnackbar(t("got_message"), {
            variant: "success",
          });
        }
      })
      .catch(function (error) {
        enqueueSnackbar(t("msg_not_delivered"), {
          variant: "error",
        });
      });
  };

  return (
    <Styled.Container>
      <Styled.Title>{t("contact_me")}</Styled.Title>
      <Contacts />
      <Styled.Text>{t("write_me_a_message")}</Styled.Text>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine }) => {
          return (
            <Styled.Form
              onSubmit={(event) => {
                handleSubmit && handleSubmit(event);
              }}
            >
              <Field<string>
                name="email"
                component={TextInput}
                placeholder={t("enter_your_email")}
                rows="6"
              />
              <Field<string>
                name="message"
                component={TextArea}
                placeholder={t("enter_your_message")}
                rows="6"
              />
              <Styled.EmailWrapper>
                <Styled.Button type="submit" disabled={submitting || pristine}>
                  {t("send")}
                </Styled.Button>
              </Styled.EmailWrapper>
            </Styled.Form>
          );
        }}
      />

      <Styled.Policy>
        <p>{t("disclaimer")}</p>
      </Styled.Policy>
    </Styled.Container>
  );
});
