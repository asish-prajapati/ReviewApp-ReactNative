import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from "@expo/vector-icons";
import Card from "../shared/Card";
import ReviewForm from "./ReviewForm";

export default function Home({ navigation }) {
  const [modelOpen, setModelOpen] = useState(true);
  const [reviews, setReviews] = useState([
    {
      title: "zelda , breath of fresh air ",
      rating: 4,
      body: "lorem impusm goht jadnv ",
      key: "1",
    },
    {
      title: "Gotta Catch the m All (again)",
      rating: 5,
      body: "lorem ipsum hefigaa huntich",
      key: "2",
    },
    {
      title: "not so final fantasy",
      rating: 3,
      body: "koites nothing you terrible",
      key: "3",
    },
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    console.log(review);
    setReviews((prevReviews) => [review, ...prevReviews]);
    setModelOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modelOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              onPress={() => setModelOpen(false)}
              style={styles.modalToggle}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons
        name="add"
        size={24}
        onPress={() => setModelOpen(true)}
        style={styles.modalToggle}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Details", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    marginTop: 50,
    flex: 1,
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
});
