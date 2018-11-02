class AppUtil {

    static ID = function () {
        return Math.random().toString(36).substr(2, 9);
    };

    static convertFormData = (props) => {
        const formElementsArray = [];
        for (let key in props) {
            formElementsArray.push({
                id: key,
                config: props[key]
            });
        }
        return formElementsArray;
    }


}

export default AppUtil;