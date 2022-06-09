import React, { useState } from "react";
import MainPageLayout from "../Components/MainPageLayout";
import ActorGrid from "../Components/actor/ActorGrid";
import ShowGrid from "../Components/show/ShowGrid";

import { apiGet } from "../Misc/Config";
import { useLastQuery } from "../Misc/CustomHooks";
import {
  SearchInput,
  RadioInputsWrapper,
  SearchButtonWrapper,
} from "./Home.styled";
import CustomRadio from "../Components/CustomRadio";

const Home = () => {
  const [input, setInput] = useLastQuery("");
  const [results, setResults] = useState(null);
  const [searchOptions, setSearchOptions] = useState("shows");

  const isShowsSearch = searchOptions === "shows";

  const onSearch = () => {
    apiGet(`/search/${searchOptions}?q=${input}`).then((result) => {
      setResults(result);
    });
  };

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSearch();
    }
  };
  // 13 is keyCode for ENTER key

  const onRadioChange = (e) => {
    setSearchOptions(e.target.value);
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No Results</div>;
    }

    if (results && results.length > 0) {
      return results[0].show ? (
        <ShowGrid data={results} />
      ) : (
        <ActorGrid data={results} />
      );
    }

    return null;
  };

  return (
    <MainPageLayout>
      <SearchInput
        type="text"
        placeholder={
          isShowsSearch ? "Search for shows..." : "Search for people..."
        }
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <RadioInputsWrapper>
        <div>
          <CustomRadio
            label="Shows"
            id="shows-search"
            value="shows"
            checked={isShowsSearch}
            onChange={onRadioChange}
          />
        </div>
        <div>
          <CustomRadio
            label="Actors"
            id="actors-search"
            value="people"
            checked={!isShowsSearch}
            onChange={onRadioChange}
          />
        </div>
      </RadioInputsWrapper>
      <SearchButtonWrapper>
        <button type="button" onClick={onSearch}>
          Search
        </button>
      </SearchButtonWrapper>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
