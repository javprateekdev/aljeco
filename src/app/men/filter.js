"use client";
import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { apiUrl } from "../api";
import { useFilter } from "../../context/FilterContext"; // Import the custom hook

const Filter = () => {
  const { checkedFilters, updateCheckedFilters } = useFilter(); // Use the context
  const [bodyFits, setBodyFits] = useState([]);
  const [colours, setColours] = useState([]);
  const [dressTypes, setDressTypes] = useState([]);
  const [lengths, setLengths] = useState([]);
  const [neckLines, setNecklines] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [sleeveLengths, setSleeveLength] = useState([]);
  const [styles, setStyles] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/product/filters`);
      setBodyFits(response.data.bodyFits);
      setColours(response.data.colours);
      setDressTypes(response.data.dressTypes);
      setLengths(response.data.lengths);
      setNecklines(response.data.neckLines);
      setSeasons(response.data.seasons);
      setSleeveLength(response.data.sleeveLengths);
      setStyles(response.data.styles);
    } catch (error) {
      console.error("Error fetching the products:", error);
    }
  };

  useEffect(() => {
    if (colours.length === 0) {
      fetchData();
    }
  }, [colours.length]);

  const bodyList = useMemo(() => {
    return bodyFits.map((item) => (
      <li key={item.bodyId}>
        <label className="d-flex align-items-center gap-1 ">
          <span className="d-flex justify-content-between w-100">
            {item.name}
          </span>
          <input
            type="checkbox"
            checked={checkedFilters.bodyFits.includes(item.bodyId)}
            onChange={() => updateCheckedFilters("bodyFits", item.bodyId)} // Use context method
          />
        </label>
      </li>
    ));
  }, [bodyFits, checkedFilters.bodyFits, updateCheckedFilters]);

  const colourList = useMemo(() => {
    return colours.map((item) => (
      <li key={item.colourId}>
        <label className="d-flex align-items-center gap-1 ">
          <span className="d-flex justify-content-between w-100">
            {item.colourName}
          </span>
          <input
            type="checkbox"
            checked={checkedFilters.colours.includes(item.colourId)}
            onChange={() => updateCheckedFilters("colours", item.colourId)} // Use context method
          />
        </label>
      </li>
    ));
  }, [colours, checkedFilters.colours, updateCheckedFilters]);

  const dressTypeList = useMemo(() => {
    return dressTypes.map((item) => (
      <li key={item.dressId}>
        <label className="d-flex align-items-center gap-1 ">
          <span className="d-flex justify-content-between w-100">
            {item.name}
          </span>
          <input
            type="checkbox"
            checked={checkedFilters.dressTypes.includes(item.dressId)}
            onChange={() => updateCheckedFilters("dressTypes", item.dressId)} // Use context method
          />
        </label>
      </li>
    ));
  }, [dressTypes, checkedFilters.dressTypes, updateCheckedFilters]);

  const lengthList = useMemo(() => {
    return lengths.map((item) => (
      <li key={item.lengthId}>
        <label className="d-flex align-items-center gap-1 ">
          <span className="d-flex justify-content-between w-100">
            {item.name}
          </span>
          <input
            type="checkbox"
            checked={checkedFilters.lengths.includes(item.lengthId)}
            onChange={() => updateCheckedFilters("lengths", item.lengthId)} // Use context method
          />
        </label>
      </li>
    ));
  }, [lengths, checkedFilters.lengths, updateCheckedFilters]);

  const neckLineList = useMemo(() => {
    return neckLines.map((item) => (
      <li key={item.neckLineId}>
        <label className="d-flex align-items-center gap-1 ">
          <span className="d-flex justify-content-between w-100">
            {item.name}
          </span>
          <input
            type="checkbox"
            checked={checkedFilters.neckLines.includes(item.neckLineId)}
            onChange={() => updateCheckedFilters("neckLines", item.neckLineId)} // Use context method
          />
        </label>
      </li>
    ));
  }, [neckLines, checkedFilters.neckLines, updateCheckedFilters]);

  const seasonList = useMemo(() => {
    return seasons.map((item) => (
      <li key={item.seasonId}>
        <label className="d-flex align-items-center gap-1 ">
          <span className="d-flex justify-content-between w-100">
            {item.name}
          </span>
          <input
            type="checkbox"
            checked={checkedFilters.seasons.includes(item.seasonId)}
            onChange={() => updateCheckedFilters("seasons", item.seasonId)} // Use context method
          />
        </label>
      </li>
    ));
  }, [seasons, checkedFilters.seasons, updateCheckedFilters]);

  const sleeveLengthList = useMemo(() => {
    return sleeveLengths.map((item) => (
      <li key={item.sleeveLengthId}>
        <label className="d-flex align-items-center gap-1 ">
          <span className="d-flex justify-content-between w-100">
            {item.name}
          </span>
          <input
            type="checkbox"
            checked={checkedFilters.sleeveLengths.includes(item.sleeveLengthId)}
            onChange={() => updateCheckedFilters("sleeveLengths", item.sleeveLengthId)} // Use context method
          />
        </label>
      </li>
    ));
  }, [sleeveLengths, checkedFilters.sleeveLengths, updateCheckedFilters]);

  const styleList = useMemo(() => {
    return styles.map((item) => (
      <li key={item.styleId}>
        <label className="d-flex align-items-center gap-1 ">
          <span className="d-flex justify-content-between w-100">
            {item.name}
          </span>
          <input
            type="checkbox"
            checked={checkedFilters.styles.includes(item.styleId)}
            onChange={() => updateCheckedFilters("styles", item.styleId)} // Use context method
          />
        </label>
      </li>
    ));
  }, [styles, checkedFilters.styles, updateCheckedFilters]);

  return (
    <div className="tp-shop-sidebar mr-10">
      <div className="tp-shop-widget mb-50">
        <h3 className="tp-shop-widget-title">Body Type</h3>
        <ul className="filter-items">{bodyList}</ul>
      </div>
      <div className="tp-shop-widget mb-50">
        <h3 className="tp-shop-widget-title">Colors</h3>
        <ul className="filter-items">{colourList}</ul>
      </div>
      <div className="tp-shop-widget mb-50">
        <h3 className="tp-shop-widget-title">Dress Types</h3>
        <ul className="filter-items">{dressTypeList}</ul>
      </div>
      <div className="tp-shop-widget mb-50">
        <h3 className="tp-shop-widget-title">Lengths</h3>
        <ul className="filter-items">{lengthList}</ul>
      </div>
      <div className="tp-shop-widget mb-50">
        <h3 className="tp-shop-widget-title">Neck Lines</h3>
        <ul className="filter-items">{neckLineList}</ul>
      </div>
      <div className="tp-shop-widget mb-50">
        <h3 className="tp-shop-widget-title">Seasons</h3>
        <ul className="filter-items">{seasonList}</ul>
      </div>
      <div className="tp-shop-widget mb-50">
        <h3 className="tp-shop-widget-title">Sleeve Lengths</h3>
        <ul className="filter-items">{sleeveLengthList}</ul>
      </div>
      <div className="tp-shop-widget mb-50">
        <h3 className="tp-shop-widget-title">Styles</h3>
        <ul className="filter-items">{styleList}</ul>
      </div>

    </div>
  );
};

export default Filter;
