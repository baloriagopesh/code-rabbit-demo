function getUserCity(user) {
    if (user.address.city) {
        return user.address.city;
    }
    return "Unknown";
}

// Example usage
const user = {
    name: "Gopesh",
    address: null
}

console.log(getUserCity(user));
