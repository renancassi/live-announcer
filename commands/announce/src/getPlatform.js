const getPlatform = (url) => {
    const domain = new URL(url).hostname
    if (domain.includes("twitch.tv")) {
        return "Twitch";
    } else if (domain.includes("youtube.com")) {
        return "YouTube";
    } else if (domain.includes("facebook.com")) {
        return "Facebook";
    } else {
        return "Plataforma desconhecida";
    }
}

module.exports = { getPlatform }