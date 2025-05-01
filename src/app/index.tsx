import { View, Text, TextInput, Pressable, StyleSheet, Image } from "react-native";
import { IoCutSharp } from "react-icons/io5"
import { GiHamburgerMenu, GiRazorBlade } from "react-icons/gi"
import { TbMoustache } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

export default function Home(){
    return(
        <View style={styles.constainer}>
            {/* HEADER TOP  */}
            <View style={styles.header}> 
                <View style={styles.logo}>
                    <IoCutSharp style={styles.cutLogo} />
                    <Text style={styles.cutText}>TDW</Text>
                    <Text style={styles.cutText1}>BARBER</Text>
                </View>
                <Pressable style={styles.btnHeader}>
                    <GiHamburgerMenu size={30} color="white"/>
                </Pressable>
            </View>

            {/* Mensagens Form  */}
            <View style={styles.searchContainer}>
                <Text style={styles.searchText}>Olá, Antônio</Text>
                <Text style={styles.searchText1}>Quinta, 30 de Abril</Text>

                <View style={styles.searchInputContainer}>
                    <TextInput placeholder="Faça sua busca ..."
                        placeholderTextColor="#fff"
                        style={styles.searchInput}
                    />
                    <Pressable style={styles.btnSearch}>
                        <IoSearch size={30} color="#fff" />
                    </Pressable>
                </View>
            </View>

            {/* Categorias  */}
            <View style={styles.speciality}>
                <View style={styles.specialityText}>
                    <IoCutSharp size={22} color="white" />
                    <Text style={styles.specialityText1}>Cabelo</Text>
                </View>

                <View style={styles.specialityText}>
                    <TbMoustache size={22} color="white" />
                    <Text style={styles.specialityText1}>Barba</Text>
                </View>

                <View style={styles.specialityText}>
                    <GiRazorBlade size={22} color="white" />
                    <Text style={styles.specialityText1}>Acabamento</Text>
                </View>
            </View>

            <Text style={styles.specialityText2}>Escolha sua Barbearia</Text>

            {/* Cards Barber  */}
            <View style={styles.card}>
                <View style={styles.cardItem}>
                    <View style={styles.cardItemImage} >
                        <Image 
                            source={require("../../assets/images/card/01.png")} 
                            style={styles.image}
                        />
                        <View style={styles.cardItemStar}>
                            <FaStar style={styles.itemStar}  />
                            <Text style={{ color: "white" }}>5.0</Text>
                        </View>
                    </View>
                    <View style={styles.cardItemDescription}>
                        <Text style={styles.cardItemTitulo}>Barber Bravos</Text>
                        <Text style={styles.cardItemEndereco}>Rua Paulista N. 222</Text>
                    </View>
                    <Pressable style={styles.cardBtn}>
                            <Text style={styles.cardBtnText}>Reservar</Text>
                    </Pressable>
                </View>

                <View style={styles.cardItem}>
                    <View style={styles.cardItemImage} >
                        <Image 
                            source={require("../../assets/images/card/20.png")} 
                            style={styles.image}
                        />
                        <View style={styles.cardItemStar}>
                            <FaStar style={styles.itemStar}  />
                            <Text style={{ color: "white" }}>5.0</Text>
                        </View>
                    </View>
                    <View style={styles.cardItemDescription}>
                        <Text style={styles.cardItemTitulo}>Barber Ricos</Text>
                        <Text style={styles.cardItemEndereco}>Rua Monte Belos N. 222</Text>
                    </View>
                    <Pressable style={styles.cardBtn}>
                            <Text style={styles.cardBtnText}>Reservar</Text>
                    </Pressable>
                </View>

                <View style={styles.cardItem}>
                    <View style={styles.cardItemImage} >
                        <Image 
                            source={require("../../assets/images/card/01.png")} 
                            style={styles.image}
                        />
                        <View style={styles.cardItemStar}>
                            <FaStar style={styles.itemStar}  />
                            <Text style={{ color: "white" }}>5.0</Text>
                        </View>
                    </View>
                    <View style={styles.cardItemDescription}>
                        <Text style={styles.cardItemTitulo}>Barber Bravos</Text>
                        <Text style={styles.cardItemEndereco}>Rua Paulista N. 222</Text>
                    </View>
                    <Pressable style={styles.cardBtn}>
                            <Text style={styles.cardBtnText}>Reservar</Text>
                    </Pressable>
                </View>

                <View style={styles.cardItem}>
                    <View style={styles.cardItemImage} >
                        <Image 
                            source={require("../../assets/images/card/20.png")} 
                            style={styles.image}
                        />
                        <View style={styles.cardItemStar}>
                            <FaStar style={styles.itemStar}  />
                            <Text style={{ color: "white" }}>5.0</Text>
                        </View>
                    </View>
                    <View style={styles.cardItemDescription}>
                        <Text style={styles.cardItemTitulo}>Barber Ricos</Text>
                        <Text style={styles.cardItemEndereco}>Rua Monte Belos N. 222</Text>
                    </View>
                    <Pressable style={styles.cardBtn}>
                            <Text style={styles.cardBtnText}>Reservar</Text>
                    </Pressable>
                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    constainer: {
        width: "100%",
        height: "auto",
        flex: 1,
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "black"
    },
    // header
    header: {
        width: "100%",
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#1d1d1d"
    },
    logo:{
        flexDirection: "row",
        alignItems: "center"
    },
    cutLogo:{
        height: 30,
        width: 30,
        color: "#5511dd"
    },
    cutText:{
        fontSize: 22,
        fontWeight: "bold",
        color: "#5511dd"
    },
    cutText1:{
        fontSize: 22,
        fontWeight: "bold",
        color: "#ccc"
    },
    btnHeader:{
        padding: 10,
        borderRadius: 10,
        // backgroundColor: "black"
    },

    // MSN Form
    searchContainer:{
        width: "100%",
        padding: 20,
    },
    searchText: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#ccc"
    },
    searchText1: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#ccc"
    },
    searchInputContainer:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    },
    searchInput:{
        width: "90%",
        padding: 9,
        fontSize: 16,
        borderRadius: 10,
        letterSpacing: 2,
        borderWidth: 1,
        borderColor: "#5511dd"
    },
    btnSearch:{
        padding: 6,
        marginLeft: 5,
        borderRadius: 7,
        backgroundColor: "#5511dd"
    },
    // Categoria
    speciality:{
        padding: 20,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    specialityText:{
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: "#1d1d1d"
    },
    specialityText1:{
        padding: 5,
        fontSize: 12,
        fontWeight: "bold",
        letterSpacing: 1,
        color: "#ccc"
    },
    specialityText2: {
        padding: 5,
        fontSize: 18,
        fontWeight: "bold",
        letterSpacing: 1,
        color: "#ccc"
    },

    // Cards
    card: {
        gap: 10,
        height: 500,
        overflowY: "auto",
        width: "100%",
        flexWrap: "wrap",
        padding: 20,
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
    },
    cardItem: {
        width: "45%",
        height: 260,
    },
    cardItemImage:{
        width: 160,
        height: 120,
        
    },
    image:{
        width: "100%",
        height: 160,
        borderRadius: 20,
        alignItems: "center",
        position: "relative"
    },
    cardItemStar:{
        top: 7,
        left: 5,
        position: "absolute",
        width: 60,
        padding: 6,
        borderRadius: 10,
        flexDirection: "row",
        gap: 5,
        justifyContent: "center",
        alignContent: "center",
        color: "#fff",
        backgroundColor: "#5511dd"
    },
    itemStar: {
        paddingTop: 3,
        fontSize: 12,
        color:  "#fff"
    },

    cardItemDescription:{
        marginTop: 45,
    },
    cardItemTitulo: {
        fontSize: 18,
        color: "#ccc"
    },
    cardItemEndereco: {
        fontSize: 12,
        color: "#ccc"
    },
    cardBtn: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
        marginTop: 10,
        alignItems: "center",
        backgroundColor: "#1d1d1d",
    },
    cardBtnText: {
        color: "#ccc",
    }
})

