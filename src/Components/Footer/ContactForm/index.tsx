import React, { memo } from "react";
import { Form, Field } from "react-final-form";
import { TextInput } from "./TextInput";
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
  return (
    <Styled.Container>
      <Styled.Title>Feel free to contact me</Styled.Title>
      <Contacts />
      <Styled.Text>
        Should you have an interesting proposition to me or you would like to
        give me an advice feel free to send me a message which I'll respond for
        sure
      </Styled.Text>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <Styled.Form onSubmit={handleSubmit}>
            <Field<string>
              name="message"
              component={TextArea}
              placeholder="Enter Your Message"
              rows="6"
            />
            <Styled.EmailWrapper>
              <Styled.Button type="submit">Send</Styled.Button>
            </Styled.EmailWrapper>
          </Styled.Form>
        )}
      />

      <Styled.Policy>
        <p>
          I only respond messages I've received. If you ever get a message from
          me which does not deal with yours previously sent one, please block
          me.
        </p>
      </Styled.Policy>
    </Styled.Container>
  );
});
