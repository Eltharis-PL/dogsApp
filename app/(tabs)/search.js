import { View } from "react-native";
import SearchBar from "../../src/components/searchBar";
import searchPageStyles from "../../src/styles/searchPageStyles";

export default function SearchPage() {
  return (
    <View style={searchPageStyles.mainContainer}>
      <SearchBar />
    </View>
  );
}
