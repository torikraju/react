export const updateObject = (oldObject, updatedVaules) => {
    return {
        ...oldObject,
        ...updatedVaules
    };
};
