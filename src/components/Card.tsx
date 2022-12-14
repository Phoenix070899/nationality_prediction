import React, { ChangeEvent, FC, useState } from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import Button from "./Button";

interface IApiCountry {
  country_id: string;
  probability: number;
}

interface IApiData {
  country: IApiCountry[];
  name: string;
}

const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });

function Card() {
  const [inputVal, setInputVal] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const handleData = (data: IApiData) => {
    data.country.reduce(
      (acc: IApiCountry, curr: IApiCountry) => {
        curr.probability >= acc.probability
        ? (acc = { ...curr })
        : (acc = { ...acc })
        setResult(acc.country_id)
        return acc
    }
      ,{ country_id: "", probability: 0 }
    );
  };

  const onKeyDown = (e : React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onBtnClick()
    }
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
    setResult('')
  };

  const onBtnClick = () => {
    inputVal !== "" &&
      fetch(process.env.REACT_APP_BASE_URL + `${inputVal}`)
        .then((res) => res.json())
        .then((data: IApiData) => handleData(data))
        .catch((error) => console.log("Error:", error));
  };


  return (
    <div className="w-1/3 gap-2 min-w-[280px] bg-white text-black flex flex-col items-center p-5 rounded">
      <h1>Nationality Prediction</h1>
      <div className="card-content w-full flex flex-col gap-4">
        <Input
          title="Username:"
          placeholder="Enter your name"
          type="text"
          value={inputVal}
          onChange={onInputChange}
          onKeyDown={e => onKeyDown(e)}
        />
        <Button title="Predict" onClick={onBtnClick} />
        {result !== '' ? <p>You are from {regionNamesInEnglish.of(result)}</p> : null}
       
      </div>
    </div>
  );
}

export default Card;
