import React, { memo, useState, useEffect } from "react";
import Select from "react-select";
import moment from "moment";
import { IRepo } from "../index";
// import { selectedRepoMock } from "./selectedRepoMock";
import OpenInNewRoundedIcon from "@material-ui/icons/OpenInNewRounded";
import * as Styled from "./styled";

interface IOption {
  value: string;
  label: string;
}

export const Repos: React.FC<{ repos: IRepo[] | undefined }> = memo(
  ({ repos }) => {
    
    const [selectedRepo, setSelectedRepo] = useState<IRepo | undefined>();

    let options: IOption[] = [];
    repos &&
      repos.forEach((repo) =>
        options.push({ value: repo.name, label: repo.name })
      );

    const handleSelectChange = (value: string) => {
      const selected = repos?.find(({ name }) => name === value);
      setSelectedRepo(selected);
    };

    useEffect(() => {
      const defaultSelectedRepo: IRepo | undefined =
      repos && repos.find((repo) => repo.name === repos[0].name);
      setSelectedRepo(defaultSelectedRepo);
    }, [repos]);

    return (
      <Styled.Container>
        <Styled.Title>Repositories</Styled.Title>
        <Select
          // styles={Styled.customStyles}
          defaultInputValue={selectedRepo && selectedRepo.name}
          options={options}
          onChange={(option) => handleSelectChange((option as IOption).value)}
        />

        <Styled.SelectedRepo>
          <Styled.RepoName>
            {selectedRepo && selectedRepo.name}
          </Styled.RepoName>
          <Styled.CreatedAt>
            {selectedRepo
              && moment(selectedRepo.created_at).format("LLL")}
          </Styled.CreatedAt>
          <Styled.RepoDescription>
            {selectedRepo
              && selectedRepo.description}
          </Styled.RepoDescription>
          <Styled.RepoLink>
            <a
              href={selectedRepo
                && selectedRepo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              title="See the repo on GitHub"
            >
              See the repo on GitHub
            </a>
            <Styled.OuterLinkSign>
              <OpenInNewRoundedIcon fontSize="small" />
            </Styled.OuterLinkSign>
          </Styled.RepoLink>
        </Styled.SelectedRepo>
      </Styled.Container>
    );
  }
);
