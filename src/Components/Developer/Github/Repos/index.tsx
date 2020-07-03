import React, { memo, useState } from "react";
import Select from "react-select";
import { IRepo } from "../index";
import * as Styled from "./styled";

interface IOption {
  value: string;
  label: string;
}

export const Repos: React.FC<{ repos: IRepo[] | undefined }> = memo(
  ({ repos }) => {
    const defaultSelectedRepo: IRepo | undefined = repos && repos.find((repo) => repo.name === repos[0].name);
    const [selectedRepo, setSelectedRepo] = useState<IRepo | undefined>(defaultSelectedRepo);
    let options: IOption[] = [];
    repos &&
      repos.forEach((repo) =>
        options.push({ value: repo.name, label: repo.name })
      );

    
    // TODO
    // handleSelectChange: get selected repo name, filter repos by selected name, set selected repo
    const handleSelectChange = () => console.log("selected");

    return (
      <Styled.Container>
        <Styled.Title>Repositories</Styled.Title>
        <Select options={options} onChange={handleSelectChange} />

        <Styled.SelectedRepo>
          <Styled.RepoName>{selectedRepo && selectedRepo.name}</Styled.RepoName>
          <Styled.CreatedAt>{selectedRepo && selectedRepo.created_at}</Styled.CreatedAt>
          <Styled.RepoDescription>{selectedRepo && selectedRepo.description}</Styled.RepoDescription>
          <Styled.RepoLink>{selectedRepo && selectedRepo.html_url}</Styled.RepoLink>
        </Styled.SelectedRepo>
      </Styled.Container>
    );
  }
);
