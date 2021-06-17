import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import ButtonSubmit from "../shared/Button";
import * as Yup from "yup";

const review_schema = Yup.object().shape({
  title: Yup.string()

    .min(2, "Too Short!")

    .max(50, "Too Long!")

    .required("Required"),

  body: Yup.string()

    .min(2, "Too Short!")
    .required("Required"),

  rating: Yup.string()
    .required()
    .test("is num 1-5", "rating must be num 1-5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export default function ReviewForm(props) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        onSubmit={(values) => {
          props.addReview(values);
        }}
        validationSchema={review_schema}
      >
        {(formikProps) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="review title"
              onChangeText={formikProps.handleChange("title")}
              value={formikProps.values.title}
              onBlur={formikProps.handleBlur("title")}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.title && formikProps.errors.title}
            </Text>
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="review body"
              onChangeText={formikProps.handleChange("body")}
              value={formikProps.values.body}
              onBlur={formikProps.handleBlur("body")}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.body && formikProps.errors.body}
            </Text>
            <TextInput
              style={globalStyles.input}
              placeholder="rating(1-5)"
              onChangeText={formikProps.handleChange("rating")}
              value={formikProps.values.rating}
              keyboardType="numeric"
              onBlur={formikProps.handleBlur("rating")}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.rating && formikProps.errors.rating}
            </Text>

            <ButtonSubmit
              text="Submit"
              onPressHandler={formikProps.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}
