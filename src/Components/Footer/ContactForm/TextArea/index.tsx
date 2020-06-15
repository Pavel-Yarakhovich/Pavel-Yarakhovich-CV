import React, { memo } from "react";
import { FieldRenderProps } from "react-final-form";
import * as Styled from "./styled";

type Props = FieldRenderProps<string, any>;

export const TextArea: React.FC<Props> = memo(({ input, meta, ...rest }: Props) => {
  return <Styled.Input {...input} {...rest} />;
});
