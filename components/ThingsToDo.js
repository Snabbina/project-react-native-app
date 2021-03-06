import React, { useState } from "react";

import { Text, View, Vibration, TouchableOpacity } from "react-native";

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

const PickButton = styled.TouchableOpacity`
  background-color: #61ccc7;
  padding: 20px;
  border: 5px solid #466687;
  margin: 10px;
  width: 300px;
  border-radius: 20px;
`;
const ButtonText = styled.Text`
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  color: #080814;
`;

const ThingsToDoContainer = styled.View`
  padding: 40px;
  width: 300px;
  height: 160px;
  margin: 20px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

const ThingsToDoText = styled.Text`
  font-size: 30px;
  text-align: center;
  color: black; ;
`;

// array of objects of things to do
export const thingsToDo = () => {
  const thingsToDoArray = [
    {
      thingtodo: "Baka kakor och fika",
      color: "#e7c1b6", //pink
      emoji: " 🍪  +  ☕️ ",
    },
    {
      thingtodo: "Ut och cykla",
      color: "#b9cab4", //green
      emoji: "🚴🏽‍♀️ ",
    },
    {
      thingtodo: "Se på film",
      color: "#f68b64", //orange
      emoji: " 🎬  ",
    },
    {
      thingtodo: "Spela tv-spel",
      color: "#1197d5", //blue
      emoji: " 🎮 ",
    },
    {
      thingtodo: "Ha på pyamas hela dagen!",
      color: "#e2dcd4", //grey
      emoji: " 🛌 ",
    },
  ];

  // This function gets invoked when button gets push, random thing show up.
  const [thingtodo, setThingToDo] = useState({});

  const getThingsToDo = () => {
    const theThingToDo =
      thingsToDoArray[Math.floor(Math.random() * thingsToDoArray.length)];
    setThingToDo(theThingToDo);
  };

  const getThingVibrate = () => {
    getThingsToDo();
    Vibration.vibrate();
  };

  return (
    <Container>
      <ThingsToDoContainer>
        <ThingsToDoText>{thingtodo.thingtodo}</ThingsToDoText>
        <ThingsToDoText>{thingtodo.emoji}</ThingsToDoText>
      </ThingsToDoContainer>
      <PickButton onPress={getThingVibrate}>
        <ButtonText>Klicka för förslag</ButtonText>
      </PickButton>
    </Container>
  );
};

