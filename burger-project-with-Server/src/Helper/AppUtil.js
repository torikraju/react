class AppUtil {

    static ID = function () {
        return Math.random().toString(36).substr(2, 9);
    };


}

export default AppUtil;