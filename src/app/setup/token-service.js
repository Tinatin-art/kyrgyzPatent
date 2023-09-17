import Cookies from "js-cookie";

class TokenService {

  getAccessToken() {
    const accessToken = Cookies.get("accessToken");
    return accessToken;
  }

  logOut() {
    Cookies.remove("accessToken");
    Cookies.remove("role");
    return;
  }
}

export default new TokenService();
