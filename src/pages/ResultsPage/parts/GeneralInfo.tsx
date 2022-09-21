import React from "react";
import styled from "styled-components";
import parasol from "graphics/parasol.png";

const GeneralInfoTitle = styled.div`
  font-size: 1.25rem;
  white-space: pre-wrap;
  text-align: center;
  color: rgb(216, 53, 80);
  
  @media (min-width: 1000px) {
    overflow: hidden;
    text-overflow: ellipsis;
    width: 180px;
    white-space: nowrap;
  }
    // @media (max-width: 767px) {
    //     display: block;
    //     position: absolute;
    //     top: -10px;
    // }
    // @media (min-width: 768px) and (max-width:1200px) {
    //     line-height: 1;
    // }
  }
`;
const GeneralInfoWrapper = styled.div`
  position: relative;
  height: 75px;
  width: 20%;
  padding-left: 23px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 1000px) {
    width: 100%;
    display: flex;
    padding: 7px 0 12px 0;
    height: unset;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
  @media (max-width: 400px) {
    width: 100%;
    display: flex;
    padding: 7px 0 12px 0;
    height: unset;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const altcoins_growth = "Altcoins - hightest growth";

const GeneralInfoAlt = styled.div`
  font-size: 10px;
  display: block;

  &::before {
    content: "";
    display: block;
    width: 7px;
    height: 7px;
    border-radius: 100%;
    margin: 4px 5px 0 0;
    float: left;
    background-color: #ffbe33;
  }
`;

const GeneralInfoFnd = styled.div`
  font-size: 10px;
  display: block;
  &::before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    margin: 0 5px 0 -3px;
    float: left;
    background: url(${parasol});
  }
`;

interface Props {
  name: string;
}
/**
 * Renders general information about cryptocurrency
 * @param {string} name cryptocurrency nam
 * @returns memoised component
 */
const GeneralInfo = React.memo((props: Props) => {
  const { name } = props;
  return (
    <GeneralInfoWrapper>
      <GeneralInfoTitle>{name}</GeneralInfoTitle>
      <GeneralInfoFnd>{`${name} foundation`}</GeneralInfoFnd>
      <GeneralInfoAlt>{altcoins_growth}</GeneralInfoAlt>
    </GeneralInfoWrapper>
  );
});

export default GeneralInfo;
