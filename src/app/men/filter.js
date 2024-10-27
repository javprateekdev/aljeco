"use client";
import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { apiUrl } from "../api";
import { useFilter } from "../../context/FilterContext";
import Skeleton from "react-loading-skeleton"; // Import Skeleton
import "react-loading-skeleton/dist/skeleton.css"; // Import default styles

const Filter = () => {
  const { checkedFilters, updateCheckedFilters } = useFilter();
  const [loading, setLoading] = useState(true); // Add loading state
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
      setLoading(false); // Data loaded, stop showing skeletons
    } catch (error) {
      console.error("Error fetching the filters:", error);
      setLoading(false); // Stop skeletons even on error
    }
  };

  useEffect(() => {
    if (colours.length === 0) {
      fetchData();
    }
  }, [colours.length]);

  const bodyList = useMemo(() => {
    return loading ? (
      <Skeleton count={4} height={20} />
    ) : (
      bodyFits.map((item) => (
        <li key={item.bodyId}>
          <label className="d-flex align-items-center gap-1 ">
            <span className="d-flex justify-content-between w-100">
              {item.name}
            </span>
            <input
              type="checkbox"
              checked={checkedFilters.bodyFits.includes(item.bodyId)}
              onChange={() => updateCheckedFilters("bodyFits", item.bodyId)}
            />
          </label>
        </li>
      ))
    );
  }, [bodyFits, checkedFilters.bodyFits, updateCheckedFilters, loading]);

  const colourList = useMemo(() => {
    return loading ? (
      <Skeleton count={4} height={20} />
    ) : (
      colours.map((item) => (
        <li key={item.colourId}>
          <label className="d-flex align-items-center gap-1 ">
            <span className="d-flex justify-content-between w-100">
              {item.colourName}
            </span>
            <input
              type="checkbox"
              checked={checkedFilters.colours.includes(item.colourId)}
              onChange={() => updateCheckedFilters("colours", item.colourId)}
            />
          </label>
        </li>
      ))
    );
  }, [colours, checkedFilters.colours, updateCheckedFilters, loading]);

  const dressTypeList = useMemo(() => {
    return loading ? (
      <Skeleton count={4} height={20} />
    ) : (
      dressTypes.map((item) => (
        <li key={item.dressId}>
          <label className="d-flex align-items-center gap-1 ">
            <span className="d-flex justify-content-between w-100">
              {item.name}
            </span>
            <input
              type="checkbox"
              checked={checkedFilters.dressTypes.includes(item.dressId)}
              onChange={() => updateCheckedFilters("dressTypes", item.dressId)}
            />
          </label>
        </li>
      ))
    );
  }, [dressTypes, checkedFilters.dressTypes, updateCheckedFilters, loading]);

  const lengthList = useMemo(() => {
    return loading ? (
      <Skeleton count={4} height={20} />
    ) : (
      lengths.map((item) => (
        <li key={item.lengthId}>
          <label className="d-flex align-items-center gap-1 ">
            <span className="d-flex justify-content-between w-100">
              {item.name}
            </span>
            <input
              type="checkbox"
              checked={checkedFilters.lengths.includes(item.lengthId)}
              onChange={() => updateCheckedFilters("lengths", item.lengthId)}
            />
          </label>
        </li>
      ))
    );
  }, [lengths, checkedFilters.lengths, updateCheckedFilters, loading]);

  const neckLineList = useMemo(() => {
    return loading ? (
      <Skeleton count={4} height={20} />
    ) : (
      neckLines.map((item) => (
        <li key={item.neckLineId}>
          <label className="d-flex align-items-center gap-1 ">
            <span className="d-flex justify-content-between w-100">
              {item.name}
            </span>
            <input
              type="checkbox"
              checked={checkedFilters.neckLines.includes(item.neckLineId)}
              onChange={() =>
                updateCheckedFilters("neckLines", item.neckLineId)
              }
            />
          </label>
        </li>
      ))
    );
  }, [neckLines, checkedFilters.neckLines, updateCheckedFilters, loading]);

  const seasonList = useMemo(() => {
    return loading ? (
      <Skeleton count={4} height={20} />
    ) : (
      seasons.map((item) => (
        <li key={item.seasonId}>
          <label className="d-flex align-items-center gap-1 ">
            <span className="d-flex justify-content-between w-100">
              {item.name}
            </span>
            <input
              type="checkbox"
              checked={checkedFilters.seasons.includes(item.seasonId)}
              onChange={() => updateCheckedFilters("seasons", item.seasonId)}
            />
          </label>
        </li>
      ))
    );
  }, [seasons, checkedFilters.seasons, updateCheckedFilters, loading]);

  const sleeveLengthList = useMemo(() => {
    return loading ? (
      <Skeleton count={4} height={20} />
    ) : (
      sleeveLengths.map((item) => (
        <li key={item.sleeveLengthId}>
          <label className="d-flex align-items-center gap-1 ">
            <span className="d-flex justify-content-between w-100">
              {item.name}
            </span>
            <input
              type="checkbox"
              checked={checkedFilters.sleeveLengths.includes(
                item.sleeveLengthId
              )}
              onChange={() =>
                updateCheckedFilters("sleeveLengths", item.sleeveLengthId)
              }
            />
          </label>
        </li>
      ))
    );
  }, [
    sleeveLengths,
    checkedFilters.sleeveLengths,
    updateCheckedFilters,
    loading,
  ]);

  const styleList = useMemo(() => {
    return loading ? (
      <Skeleton count={4} height={20} />
    ) : (
      styles.map((item) => (
        <li key={item.styleId}>
          <label className="d-flex align-items-center gap-1 ">
            <span className="d-flex justify-content-between w-100">
              {item.name}
            </span>
            <input
              type="checkbox"
              checked={checkedFilters.styles.includes(item.styleId)}
              onChange={() => updateCheckedFilters("styles", item.styleId)}
            />
          </label>
        </li>
      ))
    );
  }, [styles, checkedFilters.styles, updateCheckedFilters, loading]);

  return (
    <div className="tp-shop-sidebar mr-10">
      <div className="tp-shop-widget">
        <h3 className="tp-shop-widget-title">Body Type</h3>
        <ul className="filter-items">{bodyList}</ul>
      </div>
      <div className="tp-shop-widget">
        <h3 className="tp-shop-widget-title">Colors</h3>
        <ul className="filter-items">{colourList}</ul>
      </div>
      <div className="tp-shop-widget">
        <h3 className="tp-shop-widget-title">Dress Types</h3>
        <ul className="filter-items">{dressTypeList}</ul>
      </div>
      <div className="tp-shop-widget">
        <h3 className="tp-shop-widget-title">Lengths</h3>
        <ul className="filter-items">{lengthList}</ul>
      </div>
      <div className="tp-shop-widget">
        <h3 className="tp-shop-widget-title">Neck Lines</h3>
        <ul className="filter-items">{neckLineList}</ul>
      </div>
      <div className="tp-shop-widget">
        <h3 className="tp-shop-widget-title">Seasons</h3>
        <ul className="filter-items">{seasonList}</ul>
      </div>
      <div className="tp-shop-widget">
        <h3 className="tp-shop-widget-title">Sleeve Lengths</h3>
        <ul className="filter-items">{sleeveLengthList}</ul>
      </div>
      <div className="tp-shop-widget">
        <h3 className="tp-shop-widget-title">Styles</h3>
        <ul className="filter-items">{styleList}</ul>
      </div>
    </div>
  );
};

export default Filter;
