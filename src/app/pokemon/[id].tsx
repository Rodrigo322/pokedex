import { Image, StyleSheet, Text, View } from "react-native";

export default function Pokemon() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/bulbasaur.png")} />
      </View>

      <Text style={styles.namePokemon}>Bulbasaur</Text>

      <View style={styles.infoPokemon}>
        <View style={styles.infoCard}>
          <Text style={styles.textWeight}>79kg</Text>
          <Text>Peso</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.textWeight}>0,1m</Text>
          <Text>Altura</Text>
        </View>
      </View>

      <Text style={styles.footerText}>Evoluções</Text>

      <View style={styles.footer}>
        <View style={styles.footerCardContainer}>
          <View style={styles.footerCard}>
            <Image source={require("../assets/bulbasaur.png")} />
          </View>
          <Text>Bulbasaur</Text>
        </View>
        <View style={styles.footerCardContainer}>
          <View style={styles.footerCard}>
            <Image source={require("../assets/bulbasaur.png")} />
          </View>
          <Text>Bulbasaur</Text>
        </View>
        <View style={styles.footerCardContainer}>
          <View style={styles.footerCard}>
            <Image source={require("../assets/bulbasaur.png")} />
          </View>
          <Text>Bulbasaur</Text>
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFf",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
    elevation: 10,
    borderRadius: 6,
  },

  namePokemon: {
    marginVertical: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
  infoPokemon: {
    flexDirection: "row",
    gap: 20,
  },
  infoCard: {
    borderWidth: 1,
    padding: 25,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#F2F2F2",
  },
  textWeight: {
    fontSize: 20,
    fontWeight: "bold",
  },
  footerText: {
    marginVertical: 35,
    fontSize: 25,
    fontWeight: "semibold",
  },
  footer: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  footerCard: {
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#F2F2F2",
    borderRadius: 4,
    padding: 15,
  },
  footerCardContainer: {
    width: 88,
    height: 88,
  },
});