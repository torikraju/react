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

    static isPurchasable(ingredients) {
        const sum = Object.keys(ingredients)
            .map(ingredientKey => {
                return ingredients[ingredientKey];
            }).reduce((sum, el) => {
                return sum + el;
            }, 0);
        return sum > 0;
    }

    static getOrders(data) {
        const fetchedOrders = [];
        for (let key in data) {
            fetchedOrders.push({
                ...data[key],
                id: key
            });
        }
        return fetchedOrders;
    }


}

export default AppUtil;