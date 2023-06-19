import React, { useState, useEffect } from "react";
import { Typography, Button as Btn, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { incrementCunter, updateLoading } from "../../redux/counter/action";
import CounterLabel from "./CounterLabel";

const { Title, Text } = Typography;

export default function Home() {
  const dispatch = useDispatch();
  const { counter, loading } = useSelector((state) => state.counter);

  const updateCounter = () => {
    dispatch(incrementCunter(counter + 1));
  };

  const changeLoading = () => {
    dispatch(updateLoading(!loading));
  };

  return (
    <div>
      <CounterLabel />
      <Text>counter = {counter}</Text>
      <Button onClick={updateCounter}>+</Button>
      <Button onClick={changeLoading}>{loading ? "true" : "false"}</Button>
    </div>
  );
}
