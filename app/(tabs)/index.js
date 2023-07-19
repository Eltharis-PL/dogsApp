import { View } from "react-native";
import mainStyles from "../../src/styles/mainStyles";
import DogsList from "../../src/components/dogsList";

export default function ListPage() {
  return (
    <View style={mainStyles.mainContainer}>
      <DogsList />
    </View>
  );
}

