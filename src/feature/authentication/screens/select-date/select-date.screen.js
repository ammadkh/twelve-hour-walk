import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

import { AuthWrapper } from "../../components/auth-wrapper.component";
import { AuthHeader } from "../../components/auth-header.component";
import { InputComponent } from "../../../../components/UI/input.component";
import { ButtonComponent } from "../../../../components/UI/button.component";
import { BottomSheet } from "@rneui/themed";
import { colors } from "../../../../infrastructure/theme/colors";

export const SelectDateScreen = () => {
  const [showBottomSheet, setShowBottomSheet] = useState();
  const [date, setDate] = useState(new Date().toDateString());
  return (
    <AuthWrapper>
      <AuthHeader title="Select Walk Date"></AuthHeader>
      <InputComponent
        value={date}
        placeholder="Select Walk Date"
        icon="chevron-down"
        onPress={() =>
          setShowBottomSheet((showBottomSheet) => !showBottomSheet)
        }
      />
      <BottomSheet
        isVisible={showBottomSheet}
        onBackdropPress={() => setShowBottomSheet(false)}
      >
        <DateTimePicker
          value={new Date()}
          is24Hour
          themeVariant="dark"
          display="spinner"
          textColor={colors.text.primary}
          style={{ width: "100%" }}
          onChange={(event, date) => setDate(date.toDateString())}
        />
      </BottomSheet>
      <ButtonComponent>Commit</ButtonComponent>
    </AuthWrapper>
  );
};
